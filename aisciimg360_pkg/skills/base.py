"""
base.py — Skill Protocol + Adapter API

Every modality in OSIRIS is a Skill — a self-contained, reproducible capability
that ships with an encoder, decoder, and benchmark against public ground truth.

The Skill protocol follows the SKILLS.md documentation contract:
1. Architectural overview (Mermaid flowchart)
2. Mathematical formulation (LaTeX equations + variable tables)
3. Multi-core CPU optimization notes
4. Real scientific data benchmarks
5. Theorem 7 displacement compliance report
6. Reproducibility (pinned requirements + hash-pinned data)
7. Citation + MIT license

Usage:
    @Skill.register("sci.cryo-em")
    class CryoEMSkill:
        metadata = SkillMetadata(
            domain="scientific",
            modality="cryo-em",
            stage="alpha",
            c=0.5,  # Å
            L=3,
            K_max=32,
        )
        def encode(self, particles_2d, ctf_params, poses): ...
        def decode(self, latent, positions, grid_shape): ...
        def benchmark(self, dataset): ...
"""

from dataclasses import dataclass, field
from typing import Optional
import numpy as np


@dataclass
class SkillMetadata:
    """Metadata for a registered OSIRIS skill (modality adapter)."""
    domain: str  # "scientific" | "environmental" | "climatic" | "space" | "global-health" | "food-security"
    modality: str  # e.g., "cryo-em", "hyperspectral", "sst-enso"
    stage: str  # "alpha" | "beta" | "stable"
    c: float  # clamp radius (domain-specific units)
    L: int = 3  # number of EGNN layers
    K_max: int = 32  # max neighbors in kNN graph
    feat_dim: int = 128  # feature dimension
    sample_data_url: Optional[str] = None
    benchmark_dataset: Optional[str] = None
    cpu_latency_ms: Optional[float] = None
    ram_budget_mb: float = 200.0


class Skill:
    """
    Base class for OSIRIS modality adapters (skills).

    A skill implements three methods:
        encode(): raw modality data → geometric tokens (h, x)
        decode(): EGNN output (h, x) → physical output (volume, map, spectrum)
        benchmark(): run eval against public dataset

    The OSIRISGeometricEngine is universal — only the skill changes.
    A new modality is a new Python file, not a new research project.

    To register a skill:
        @Skill.register("sci.cryo-em")
        class CryoEMSkill(Skill):
            metadata = SkillMetadata(...)
            def encode(self, ...): ...
            def decode(self, ...): ...
            def benchmark(self, ...): ...
    """

    _registry = {}
    metadata: SkillMetadata = None

    @classmethod
    def register(cls, skill_id: str):
        """Decorator to register a skill in the global registry."""
        def decorator(skill_cls):
            cls._registry[skill_id] = skill_cls
            skill_cls._skill_id = skill_id
            return skill_cls
        return decorator

    @classmethod
    def get(cls, skill_id: str):
        """Retrieve a registered skill by ID."""
        return cls._registry.get(skill_id)

    @classmethod
    def list_all(cls):
        """List all registered skills."""
        return dict(cls._registry)

    def encode(self, *args, **kwargs):
        """Encode raw modality data into geometric tokens (h, x, uncertainty)."""
        raise NotImplementedError(f"{self.__class__.__name__}.encode() not implemented")

    def decode(self, h, x, grid_shape=None):
        """Decode EGNN output into physical output (volume, map, spectrum)."""
        raise NotImplementedError(f"{self.__class__.__name__}.decode() not implemented")

    def benchmark(self, dataset):
        """Run evaluation against a public dataset."""
        raise NotImplementedError(f"{self.__class__.__name__}.benchmark() not implemented")

    def create_engine(self):
        """Create an OSIRISGeometricEngine configured for this skill."""
        from ..engine.osiris_engine import OSIRISGeometricEngine
        return OSIRISGeometricEngine(
            L=self.metadata.L,
            feat_dim=self.metadata.feat_dim,
            c=self.metadata.c,
        )

    def __repr__(self):
        sid = getattr(self, '_skill_id', 'unregistered')
        return f"Skill({sid}, domain={self.metadata.domain}, stage={self.metadata.stage})"
