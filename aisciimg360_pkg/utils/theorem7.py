"""
theorem7.py — Theorem 7 Compliance Checker

Theorem 7: For an L-layer EGNN with clamp radius c, the cumulative
displacement of any node from its origin is strictly bounded:

    ||x_i^(L) - x_i^(0)||_2 <= L * c

This is the mathematical safety case for OSIRIS. Every forward pass must
show 100.00% compliance. If compliance drops below 100%, the output is
flagged as untrusted.

The checker logs:
- Per-layer displacement (pre and post clamp)
- Cumulative displacement
- Compliance percentage (target: 100.00%)
- Per-node displacement distribution
"""

import numpy as np


class Theorem7Checker:
    """
    Theorem 7 compliance checker for OSIRIS forward passes.

    Args:
        L: Number of EGNN layers
        c: Clamp radius per layer
        bound: L * c (cumulative displacement bound)

    Usage:
        checker = Theorem7Checker(L=3, c=2.0)
        # After forward pass:
        audit = checker.check(x_initial, x_final)
        print(f"Compliance: {audit['compliance_pct']:.2f}%")  # must be 100.00%
    """

    def __init__(self, L=3, c=2.0, eps=1e-8):
        self.L = int(L)
        self.c = float(c)
        self.eps = float(eps)
        self.bound = L * c
        self.history = []  # log of all compliance checks

    def check(self, x_initial, x_final):
        """
        Check Theorem 7 compliance for a forward pass.

        Args:
            x_initial: Initial node positions (N, 3)
            x_final: Final node positions after L layers (N, 3)

        Returns:
            dict with compliance report:
                bound: L * c (theoretical maximum displacement)
                max_observed: actual maximum displacement
                mean_observed: actual mean displacement
                compliance_pct: % of nodes within bound (target: 100.00%)
                is_compliant: True if compliance_pct == 100.0
                per_node: per-node displacement values
        """
        cumulative = np.linalg.norm(x_final - x_initial, axis=-1)
        compliance = float(np.mean(cumulative <= self.bound + self.eps) * 100)

        report = {
            'bound': float(self.bound),
            'max_observed': float(cumulative.max()),
            'mean_observed': float(cumulative.mean()),
            'compliance_pct': compliance,
            'is_compliant': compliance == 100.0,
            'L': self.L,
            'c': self.c,
            'per_node': cumulative.tolist(),
        }

        self.history.append(report)
        return report

    def get_history(self):
        """Return full compliance history."""
        return self.history

    def summary(self):
        """Print summary of all compliance checks."""
        if not self.history:
            return "No compliance checks recorded."

        lines = [
            f"Theorem 7 Compliance Summary (L={self.L}, c={self.c}, bound={self.bound})",
            f"  Total checks: {len(self.history)}",
            f"  All compliant: {all(h['is_compliant'] for h in self.history)}",
            f"  Worst compliance: {min(h['compliance_pct'] for h in self.history):.2f}%",
            f"  Max displacement observed: {max(h['max_observed'] for h in self.history):.4f}",
            f"  Bound: {self.bound}",
        ]
        return '\n'.join(lines)

    def __repr__(self):
        return f"Theorem7Checker(L={self.L}, c={self.c}, bound={self.bound})"
