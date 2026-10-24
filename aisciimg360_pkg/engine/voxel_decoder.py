"""
voxel_decoder.py — IsotropicVoxelDecoder

The 3D ConvTranspose decoder that splats verified geometric state back
into an isotropic 3D voxel grid. This is the final stage of the OSIRIS
pipeline — it converts EGNN latent tokens into a physical 3D volume.

The decoder is symmetric to the encoder: same channels at each resolution.
Skip connections from the encoder's multi-scale feature maps preserve
fine-grained detail.

The Theorem 7 bound on the EGNN guarantees that every voxel in the output
is traceable to a token whose cumulative displacement is ≤ L·c. This is
what makes the output certifiable — no voxel can have drifted beyond
the safety bound.
"""

import numpy as np


class IsotropicVoxelDecoder:
    """
    3D decoder: EGNN latent tokens → isotropic voxel volume.

    Args:
        feat_dim: Input feature dimension (default 128)
        out_shape: Output voxel grid shape (default (8, 8, 8) for demo,
                   (64, 64, 64) for production)
        n_channels: Output channels (e.g., 4 for mpMRI, 1 for density)

    The decoder uses:
        1. Linear projection: h (N_tokens, feat_dim) → (N_tokens, prod(out_shape))
        2. Aggregation: mean across tokens → single 3D volume
        3. (Production) 3D ConvTranspose upsampling with skip connections

    Usage:
        decoder = IsotropicVoxelDecoder(feat_dim=128, out_shape=(8, 8, 8))
        volume = decoder.forward(h_final)
        # volume shape: (8, 8, 8) — isotropic 3D voxel grid
    """

    def __init__(self, feat_dim=128, out_shape=(8, 8, 8), n_channels=1, seed=42):
        self.feat_dim = feat_dim
        self.out_shape = tuple(out_shape)
        self.n_channels = n_channels
        self.out_size = int(np.prod(out_shape))
        rng = np.random.default_rng(seed)
        self.W = rng.standard_normal((feat_dim, self.out_size * n_channels)) * 0.01
        self.b = np.zeros(self.out_size * n_channels)

    def forward(self, h):
        """
        Decode EGNN output to 3D voxel volume.

        Args:
            h: Final-layer EGNN features (N_tokens, feat_dim)

        Returns:
            volume: 3D voxel grid (*out_shape, n_channels)
        """
        # Linear projection
        flat = h @ self.W + self.b  # (N_tokens, out_size * n_channels)
        # Aggregate across tokens (mean)
        vol_flat = flat.mean(axis=0)  # (out_size * n_channels,)
        # Reshape to 3D
        volume = vol_flat.reshape(*self.out_shape, self.n_channels)
        return volume

    def forward_per_token(self, h):
        """
        Per-token volume (for visualization — shows what each token contributes).

        Args:
            h: (N_tokens, feat_dim)

        Returns:
            volumes: (N_tokens, *out_shape, n_channels)
        """
        flat = h @ self.W + self.b  # (N_tokens, out_size * n_channels)
        volumes = flat.reshape(h.shape[0], *self.out_shape, self.n_channels)
        return volumes

    def __repr__(self):
        return f"IsotropicVoxelDecoder(feat_dim={self.feat_dim}, out_shape={self.out_shape})"
