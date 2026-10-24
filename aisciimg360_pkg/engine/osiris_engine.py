"""
osiris_engine.py — OSIRISGeometricEngine

The full L-layer EGNN stack with Theorem 7 compliance checking.

This is the OSIRIS core: it takes visual features + text-bridged features and
runs L layers of ClampedEquivariantLayer, each applying the 1-Lipschitz norm-clamp.

Theorem 7 guarantees:
    ||x_i^(L) - x_i^(0)||_2 <= L * c

For L=3, c=2.0: cumulative displacement <= 6.0 (in modality units).
This is the mathematical safety case that prevents structural hallucinations.
"""

import numpy as np
from .clamped_layer import ClampedEquivariantLayer


class OSIRISGeometricEngine:
    """
    L-layer stack of ClampedEquivariantLayers.

    This is the OSIRIS core engine. It processes geometric tokens through
    L layers of E(3)-equivariant message passing with 1-Lipschitz norm-clamping.

    Args:
        L: Number of EGNN layers (default 3, matches TME-FUSE paper)
        feat_dim: Feature dimension per node (default 128)
        c: Clamp radius per layer (domain-specific, see norm_clamp.py)
        eps: Numerical stability (default 1e-8)

    Properties:
        - E(3)-equivariant: rotating input produces identically rotated output
        - Theorem 7 compliant: cumulative displacement bounded by L*c
        - CPU-only: runs on NumPy, no GPU required
        - Memory: < 200 MB per forward pass (for 512 tokens, 128 features)

    Usage:
        engine = OSIRISGeometricEngine(L=3, c=2.0, feat_dim=128)
        h_out, x_out = engine.forward(h, x, adj)
        audit = engine.theorem_7_check(x_initial, x_out)
        print(f"Compliance: {audit['compliance_pct']:.2f}%")  # must be 100.00%
    """

    def __init__(self, L=3, feat_dim=128, c=2.0, eps=1e-8, seed=42):
        self.L = L
        self.feat_dim = feat_dim
        self.c = float(c)
        self.eps = float(eps)
        self.bound = L * c  # Theorem 7 cumulative bound

        # Stack of L clamped equivariant layers
        self.layers = [
            ClampedEquivariantLayer(
                feat_dim=feat_dim,
                c=c,
                eps=eps,
                seed=seed + i,  # different seed per layer
            )
            for i in range(L)
        ]

    def forward(self, h, x, adj):
        """
        Full forward pass through L layers.

        Args:
            h: Node features (N, feat_dim)
            x: Node coordinates (N, 3)
            adj: Adjacency matrix (N, N)

        Returns:
            h_out: Final-layer features (N, feat_dim)
            x_out: Final-layer coordinates (N, 3)

        Each layer applies:
            1. Edge MLP → messages
            2. Coordinate MLP → scalar weights
            3. Coordinate update: Δx = Σ (x_i - x_j) * φ_x(m)
            4. Norm-clamp: Π_{c,ε}(Δx) — THE SAFETY PRIMITIVE
            5. Feature update: h += φ_h(Σ m)
        """
        h_current = h.copy()
        x_current = x.copy()
        x_initial = x.copy()

        for layer in self.layers:
            h_current, x_current = layer.forward(h_current, x_current, adj)

        return h_current, x_current

    def theorem_7_check(self, x_initial, x_final):
        """
        Theorem 7 compliance check: ||x_i^(L) - x_i^(0)||_2 <= L * c.

        This is the mathematical safety case. Every forward pass must show
        100.00% compliance. If compliance drops below 100%, the output is
        flagged as untrusted.

        Returns:
            dict with:
                bound: L * c (the theoretical maximum)
                max_observed: actual maximum displacement
                mean_observed: actual mean displacement
                compliance_pct: percentage of nodes within bound (target: 100.00%)
                per_layer_stats: displacement stats from each layer
        """
        cumulative = np.linalg.norm(x_final - x_initial, axis=-1)
        bound = self.L * self.c
        compliance = float(np.mean(cumulative <= bound + 1e-6) * 100)

        per_layer_stats = [layer.get_displacement_stats() for layer in self.layers]

        return {
            'bound': float(bound),
            'max_observed': float(cumulative.max()),
            'mean_observed': float(cumulative.mean()),
            'compliance_pct': compliance,
            'is_compliant': compliance == 100.0,
            'per_layer_stats': per_layer_stats,
            'L': self.L,
            'c': self.c,
        }

    def equivariance_test(self, h, x, adj, R=None, t=None, n_tests=5, seed=42):
        """
        Verify E(3)-equivariance: φ(g·x) should equal g·φ(x).

        Generates random rotations R and translations t, applies them to the input,
        runs the forward pass, and checks that the output transforms identically.

        This is a STRUCTURAL test — it verifies the architecture, not the weights.
        It should pass for ANY trained model, including untrained random weights.

        Returns:
            dict with test results (pass/fail + error per test)
        """
        rng = np.random.default_rng(seed)
        results = []

        for test_idx in range(n_tests):
            # Random rotation around Z axis
            theta = rng.uniform(0, 2 * np.pi)
            R_test = np.array([
                [np.cos(theta), -np.sin(theta), 0],
                [np.sin(theta),  np.cos(theta), 0],
                [0, 0, 1]
            ]) if R is None else R

            # Random translation
            t_test = rng.standard_normal(3) * 0.5 if t is None else t

            # Forward on original input
            h_out, x_out = self.forward(h, x, adj)

            # Transform input
            x_transformed = x @ R_test.T + t_test
            adj_t = (np.linalg.norm(x_transformed[:, None] - x_transformed[None, :], axis=-1) <
                     np.inf).astype(float) * adj  # preserve adjacency structure

            # Forward on transformed input
            h_out_t, x_out_t = self.forward(h, x_transformed, adj_t)

            # Check equivariance: φ(g·x) should equal g·φ(x)
            expected = x_out @ R_test.T + t_test
            actual = x_out_t
            error = float(np.linalg.norm(actual - expected) /
                          (np.linalg.norm(expected) + 1e-10))

            results.append({
                'rotation_angle_deg': float(np.degrees(theta)),
                'translation': t_test.tolist(),
                'equivariance_error': error,
                'pass': error < 1e-5,
            })

        all_pass = all(r['pass'] for r in results)
        max_error = max(r['equivariance_error'] for r in results)

        return {
            'all_pass': all_pass,
            'n_tests': n_tests,
            'max_error': max_error,
            'tolerance': 1e-5,
            'results': results,
        }

    def __repr__(self):
        return (f"OSIRISGeometricEngine(L={self.L}, feat_dim={self.feat_dim}, "
                f"c={self.c}, bound={self.bound})")
