"""
asymmetric_bridge.py — AsymmetricPromptBridge

The OSIRIS text-to-visual fusion mechanism. Unlike symmetric cross-attention
(used in CLIP, Flamingo), which allows either modality to dominate, the
AsymmetricPromptBridge ADDS text features to visual features without
replacing them.

The text acts as a "directional force field" — biasing the EGNN toward the
prompt's anatomical/agricultural/environmental context without overwriting
the visual evidence.

Formula:
    h_fused = h_visual + W_p · enc_text(prompt)

The asymmetry is critical: the text fills information gaps in corrupted
visual data (e.g., cloud-obstructed canopy, noisy ultrasound) without
inventing new structure.
"""

import numpy as np


class AsymmetricPromptBridge:
    """
    Text → geometric token space fusion (ASYMMETRIC — add, don't replace).

    Args:
        text_dim: Text embedding dimension (e.g., 512 for ClinicalBERT)
        feat_dim: Geometric token feature dimension (e.g., 128)

    The bridge projects text embeddings into the geometric token space
    and ADDS them to the visual features. The text acts as a directional
    force field, not a passive description.

    Usage:
        bridge = AsymmetricPromptBridge(text_dim=512, feat_dim=128)
        h_fused = bridge.forward(h_visual, text_embedding)
        # h_fused = h_visual + W_p @ text_embedding  (ASYMMETRIC)
    """

    def __init__(self, text_dim=512, feat_dim=128, seed=42):
        self.text_dim = text_dim
        self.feat_dim = feat_dim
        rng = np.random.default_rng(seed)
        self.W_p = rng.standard_normal((text_dim, feat_dim)) * 0.01

    def forward(self, h_visual, text_embedding):
        """
        Asymmetric fusion: text ADDS to visual, doesn't replace.

        Args:
            h_visual: Visual features (N, feat_dim)
            text_embedding: Text embedding (text_dim,) — single prompt

        Returns:
            h_fused: (N, feat_dim) — visual + projected text

        The key insight: if visual data is corrupted (cloud, noise, occlusion),
        the text fills the gaps. If visual data is clean, the text biases
        interpretation (e.g., 'spleen' vs 'kidney' in the same LUQ scan).
        The text CANNOT invent new spatial structure — that's the EGNN's job,
        bounded by the norm-clamp.
        """
        # Project text to geometric space
        text_projected = text_embedding @ self.W_p  # (feat_dim,)

        # ASYMMETRIC: add, don't replace
        h_fused = h_visual + text_projected[None, :]  # broadcast to all nodes

        return h_fused

    def forward_batch(self, h_visual, text_embeddings):
        """
        Batch version: different text prompt per node (for per-region guidance).

        Args:
            h_visual: (N, feat_dim)
            text_embeddings: (N, text_dim) — different prompt per node

        Returns:
            h_fused: (N, feat_dim)
        """
        text_projected = text_embeddings @ self.W_p  # (N, feat_dim)
        return h_visual + text_projected

    def __repr__(self):
        return f"AsymmetricPromptBridge(text_dim={self.text_dim}, feat_dim={self.feat_dim})"
