"""
degradation.py — DegradationPipeline

Implements the Accelerated Undersampling Objective: intentionally degrade
clean 3D ground truth data to train OSIRIS to reconstruct from sparse fragments.

The pipeline mirrors the repository's 2.78× effective k-space undersampling
factor — learning to reconstruct high-fidelity structures from intentionally
degraded input.

Degradation types:
1. Fourier masking (k-space undersampling — train on 36% of data)
2. Gaussian noise injection (sensor noise simulation)
3. Viewpoint corruption (random rotation + translation of partial views)
4. Occlusion masks (simulate cloud/shadow/sensor dropout)
5. Resolution degradation (downsample + upsample to simulate low-quality sensors)

The network is trained purely on the delta (Δ) — learning to reconstruct
the clean ground truth from the degraded input.
"""

import numpy as np


class DegradationPipeline:
    """
    Intentional data degradation for accelerated undersampling training.

    Args:
        undersampling_factor: Fraction of data to keep (default 0.36 = 2.78× undersampling)
        noise_snr_db: Signal-to-noise ratio in dB (default 20)
        rotation_range: Max rotation in degrees (default 30)
        occlusion_prob: Probability of occluding a voxel (default 0.2 = 20% occlusion)
        downsample_factor: Resolution degradation factor (default 2)

    Usage:
        pipeline = DegradationPipeline(undersampling_factor=0.36)
        degraded = pipeline.degrade(clean_volume)
        # Train: loss = criterion(reconstruct(degraded), clean_volume)
    """

    def __init__(self, undersampling_factor=0.36, noise_snr_db=20,
                 rotation_range=30, occlusion_prob=0.2,
                 downsample_factor=2, seed=42):
        self.undersampling_factor = float(undersampling_factor)
        self.noise_snr_db = float(noise_snr_db)
        self.rotation_range = float(rotation_range)
        self.occlusion_prob = float(occlusion_prob)
        self.downsample_factor = int(downsample_factor)
        self.rng = np.random.default_rng(seed)

    def degrade(self, volume, apply_all=True):
        """
        Apply degradation pipeline to a clean 3D volume.

        Args:
            volume: Clean 3D ground truth (H, W, D)
            apply_all: If True, apply all degradation types. If False, apply one randomly.

        Returns:
            degraded: Degraded volume (same shape)
            degradation_info: Dict describing what was applied

        The network learns: clean_volume = reconstruct(degraded_volume)
        """
        info = {'original_shape': volume.shape}
        degraded = volume.copy().astype(float)

        if apply_all or self.rng.random() < 0.5:
            degraded = self._fourier_undersample(degraded)
            info['fourier_undersampled'] = True

        if apply_all or self.rng.random() < 0.5:
            degraded = self._add_gaussian_noise(degraded)
            info['noise_added'] = True

        if apply_all or self.rng.random() < 0.3:
            degraded = self._apply_occlusion(degraded)
            info['occlusion_applied'] = True

        if apply_all or self.rng.random() < 0.3:
            degraded = self._downsample_upsample(degraded)
            info['resolution_degraded'] = True

        info['final_snr_db'] = self._estimate_snr(volume, degraded)
        info['data_retention'] = float(np.mean(np.abs(degraded) > 1e-10))

        return degraded, info

    def _fourier_undersample(self, vol):
        """Apply k-space undersampling (keep only fraction of Fourier coefficients)."""
        from numpy.fft import fftn, ifftn
        spectrum = fftn(vol)
        mask = self.rng.random(vol.shape) < self.undersampling_factor
        spectrum_undersampled = spectrum * mask
        degraded = np.real(ifftn(spectrum_undersampled))
        return degraded

    def _add_gaussian_noise(self, vol):
        """Add Gaussian sensor noise."""
        signal_power = np.mean(vol**2)
        noise_power = signal_power / (10 ** (self.noise_snr_db / 10))
        noise = self.rng.normal(0, np.sqrt(noise_power), vol.shape)
        return vol + noise

    def _apply_occlusion(self, vol):
        """Apply random occlusion (simulates cloud/shadow/sensor dropout)."""
        occlusion_mask = self.rng.random(vol.shape) < self.occlusion_prob
        vol_occluded = vol.copy()
        vol_occluded[occlusion_mask] = 0
        return vol_occluded

    def _downsample_upsample(self, vol):
        """Downsample then upsample (simulates low-quality sensor)."""
        # Downsample by factor
        ds = self.downsample_factor
        downsampled = vol[::ds, ::ds, ::ds]
        # Upsample back (nearest neighbor)
        upsampled = np.repeat(np.repeat(np.repeat(downsampled, ds, axis=0), ds, axis=1), ds, axis=2)
        # Crop to original shape
        slices = [slice(0, s) for s in vol.shape]
        return upsampled[tuple(slices)]

    def _estimate_snr(self, clean, degraded):
        """Estimate SNR between clean and degraded."""
        signal = np.mean(clean**2)
        noise = np.mean((clean - degraded)**2)
        if noise < 1e-10:
            return 100.0
        return float(10 * np.log10(signal / noise))

    def __repr__(self):
        return (f"DegradationPipeline(undersampling={self.undersampling_factor}, "
                f"snr={self.noise_snr_db}dB, occlusion={self.occlusion_prob})")
