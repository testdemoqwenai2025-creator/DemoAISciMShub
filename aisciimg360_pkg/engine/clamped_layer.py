"""
clamped_layer.py — ClampedEquivariantLayer

One layer of the E(3)-equivariant graph neural network with 1-Lipschitz norm-clamping.

The layer implements:
1. Edge MLP (φ_e): produces messages from sender+receiver features + squared distance
2. Coordinate MLP (φ_x): produces scalar weights for coordinate updates
3. Coordinate update: sum of (x_i - x_j) * φ_x(m), then norm-clamped
4. Feature update: sum of messages through φ_h

The norm-clamp Π_{c,ε} on the coordinate update is the OSIRIS safety primitive.
It guarantees that per-layer displacement is bounded by c, and cumulative
displacement over L layers is bounded by L*c (Theorem 7).

E(3)-equivariance is structural:
- Messages use squared distances ‖x_i - x_j‖² (rotation-invariant)
- Coordinate updates are sums of (x_i - x_j) * scalar (rotation-equivariant)
- The clamp preserves direction (Π(R·v) = R·Π(v))
"""

import numpy as np
from .norm_clamp import norm_clamp


class ClampedEquivariantLayer:
    """
    One EGNN layer with 1-Lipschitz norm-clamp.

    Args:
        feat_dim: Feature dimension (default 128)
        c: Clamp radius for displacement bound (default 2.0, domain-specific)
        eps: Numerical stability (default 1e-8)

    The layer maintains:
        - W_e: Edge MLP weights (2*feat_dim + 1 → feat_dim)
        - W_x: Coordinate MLP weights (feat_dim → 1, no final activation)
        - W_h: Feature MLP weights (feat_dim → feat_dim)
        - Per-layer displacement log (for Theorem 7 audit)

    Forward:
        Input: h (N, feat_dim), x (N, 3), adj (N, N)
        Output: h_new (N, feat_dim), x_new (N, 3)
    """

    def __init__(self, feat_dim=128, c=2.0, eps=1e-8, seed=42):
        self.feat_dim = feat_dim
        self.c = float(c)
        self.eps = float(eps)
        self.displacement_log = []  # per-forward-pass audit trail

        rng = np.random.default_rng(seed)
        # Edge MLP: concat(h_i, h_j, ||x_i-x_j||^2) -> message
        self.W_e = rng.standard_normal((2 * feat_dim + 1, feat_dim)) * 0.01
        self.W_e_b = np.zeros(feat_dim)
        # Coordinate MLP: message -> scalar weight (NO final activation — allows unrestricted pull before clamp)
        self.W_x = rng.standard_normal((feat_dim, 1)) * 0.01
        self.W_x_b = np.zeros(1)
        # Feature MLP: summed messages -> new features
        self.W_h = rng.standard_normal((feat_dim, feat_dim)) * 0.01
        self.W_h_b = np.zeros(feat_dim)

    def forward(self, h, x, adj):
        """
        Forward pass for one EGNN layer with norm-clamping.

        Args:
            h: Node features, shape (N, feat_dim)
            x: Node coordinates, shape (N, 3)
            adj: Adjacency matrix, shape (N, N) — binary or weighted

        Returns:
            h_new: Updated features, shape (N, feat_dim)
            x_new: Updated coordinates, shape (N, 3)

        The coordinate update is:
            Δx_i = (1/|N(i)|) Σ_{j∈N(i)} (x_i - x_j) * φ_x(m_{j→i})
            x_i^{new} = x_i + Π_{c,ε}(Δx_i)

        The feature update is:
            h_i^{new} = h_i + φ_h(Σ_{j∈N(i)} m_{j→i})
        """
        N = h.shape[0]
        feat_dim = self.feat_dim

        # Step 1: Compute pairwise differences and squared distances
        diff = x[:, None, :] - x[None, :, :]  # (N, N, 3) — x_i - x_j
        d_sq = (diff ** 2).sum(axis=-1, keepdims=True)  # (N, N, 1) — ||x_i - x_j||^2

        # Step 2: Edge MLP — φ_e(h_i, h_j, ||x_i - x_j||^2) → message
        h_ij = np.concatenate([
            np.broadcast_to(h[:, None, :], (N, N, feat_dim)),  # h_i (receiver)
            np.broadcast_to(h[None, :, :], (N, N, feat_dim)),  # h_j (sender)
            d_sq,  # squared distance
        ], axis=-1)  # (N, N, 2*feat_dim + 1)

        # Apply edge MLP with ReLU
        m = np.maximum(0, h_ij @ self.W_e + self.W_e_b)  # (N, N, feat_dim)
        m = m * adj[..., None]  # mask to neighbors only

        # Step 3: Coordinate MLP — φ_x(m) → scalar weight
        w = (m @ self.W_x + self.W_x_b).squeeze(-1)  # (N, N) — scalar per edge

        # Step 4: Coordinate update (EQUIVARIANT) — sum of (x_i - x_j) * scalar w
        delta = (diff * w[..., None]).sum(axis=1)  # (N, 3)
        # Mean over neighbors (degree normalization)
        degree = adj.sum(axis=1, keepdims=True)
        delta = delta / np.maximum(degree, 1)

        # === THE OSIRIS SAFETY PRIMITIVE ===
        # Apply 1-Lipschitz norm-clamp — this is what prevents hallucinations
        delta_clamped = norm_clamp(delta, c=self.c, eps=self.eps)

        # Audit log for Theorem 7 compliance
        self.displacement_log.append({
            'pre_clamp': np.linalg.norm(delta, axis=-1),
            'post_clamp': np.linalg.norm(delta_clamped, axis=-1),
            'c': self.c,
        })

        x_new = x + delta_clamped

        # Step 5: Feature update (INVARIANT) — sum of messages through φ_h
        m_sum = m.sum(axis=1)  # (N, feat_dim) — aggregate messages
        h_new = h + np.maximum(0, m_sum @ self.W_h + self.W_h_b)  # ReLU

        return h_new, x_new

    def get_displacement_stats(self):
        """Return per-layer displacement statistics for Theorem 7 audit."""
        if not self.displacement_log:
            return None
        last = self.displacement_log[-1]
        return {
            'max_pre_clamp': float(last['pre_clamp'].max()),
            'max_post_clamp': float(last['post_clamp'].max()),
            'clamp_radius': last['c'],
            'compliance_rate': float(np.mean(last['post_clamp'] <= last['c'] + 1e-6)),
        }

    def __repr__(self):
        return f"ClampedEquivariantLayer(feat_dim={self.feat_dim}, c={self.c})"
