"""
aisciimg360 — Universal Scientific Imaging Intelligence
OSIRIS: Equivariant Observation, Spatial Integrity, and Reconstruction Inference System

Built on the TME-FUSE norm-clamped geometric fusion framework (Zenodo: 10.5281/zenodo.21849798).
MIT License. CPU-first. No GPU required.

Usage (NumPy, works in Pyodide/browser):
    import aisciimg360
    engine = aisciimg360.OSIRISGeometricEngine(L=3, c=2.0, feat_dim=128)
    h_out, x_out = engine.forward(h, x, adj)
    compliance = engine.theorem_7_check(x_0, x_out)

Usage (PyTorch, for training with autograd):
    from aisciimg360.torch import OSIRISGeometricEngine
    engine = OSIRISGeometricEngine(L=3, c=2.0, feat_dim=128)
    h_out, x_out = engine(h, x, adj)  # autograd-compatible
    loss = criterion(h_out, target)
    loss.backward()  # gradients flow through norm-clamp

The 1-Lipschitz norm-clamp guarantees:
    ||x_i^(L) - x_i^(0)||_2 <= L * c  (Theorem 7)
"""

__version__ = "0.2.0"
__author__ = "AISciImg360 Team"
__license__ = "MIT"
__paper__ = "https://doi.org/10.5281/zenodo.21849798"

# Core engine (NumPy backend, works everywhere)
from .engine.norm_clamp import norm_clamp, NormClamp
from .engine.clamped_layer import ClampedEquivariantLayer
from .engine.osiris_engine import OSIRISGeometricEngine
from .engine.asymmetric_bridge import AsymmetricPromptBridge
from .engine.voxel_decoder import IsotropicVoxelDecoder
from .engine.graph_remesher import DynamicGraphRemesher

# Training utilities
from .training.synthetic_generator import SyntheticToRealGenerator
from .training.degradation import DegradationPipeline

# Skill adapter protocol
from .skills.base import Skill, SkillMetadata

# Theorem 7 compliance
from .utils.theorem7 import Theorem7Checker

__all__ = [
    "norm_clamp",
    "NormClamp",
    "ClampedEquivariantLayer",
    "OSIRISGeometricEngine",
    "AsymmetricPromptBridge",
    "IsotropicVoxelDecoder",
    "DynamicGraphRemesher",
    "SyntheticToRealGenerator",
    "DegradationPipeline",
    "Skill",
    "SkillMetadata",
    "Theorem7Checker",
]
