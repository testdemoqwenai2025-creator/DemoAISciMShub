<div align="center">

# AISciImg360

### Universal Scientific Imaging Intelligence

A multi-page application unifying **Scientific**, **Environmental**, **Climatic**, and **Space** imaging under one equivariant reasoning engine — designed to extend the reach of systems like AlphaFold and Segment Anything to every imaging modality at once.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![GDPR-aligned](https://img.shields.io/badge/Compliance-GDPR%20aligned-blue.svg)](#compliance)
[![HIPAA-aware](https://img.shields.io/badge/Compliance-HIPAA%20aware-blue.svg)](#compliance)
[![Version](https://img.shields.io/badge/version-v0.1.0--mvp-9cf.svg)](#roadmap)

**Live preview →** &lt;your-bot-preview-url&gt;

</div>

---

## 👋 Welcome, customer

This is the public storefront for **AISciImg360**. The source code lives in a private development repository; this public repository exists so that customers, partners, and curious researchers can:

- Read about the product without signing an NDA.
- See what is built today and what is on the roadmap.
- Click through to the live preview without authentication.
- Reach the team by email.

No source code, no proprietary assets, no NDA — just an honest product brief and a way to get in touch.

## What AISciImg360 is

AISciImg360 is a unified platform for multi-modal scientific imaging. Instead of rebuilding bespoke AI pipelines for every imaging modality (one for cryo-EM, one for satellite, one for climate, one for JWST), AISciImg360 extracts the shared priors — equivariance, norm-clamping, mass conservation — into a single reasoning engine, and writes thin per-modality adapters on top.

### The four domain pillars

| Domain | What it covers |
| --- | --- |
| 🔬 **Scientific** | Cryo-EM, super-resolution microscopy, X-ray crystallography, materials STEM/TEM |
| 🌿 **Environmental** | Hyperspectral satellite, ocean color, air quality (TROPOMI), land-use change |
| ☁️ **Climatic** | Atmospheric circulation, ocean state (SST / AMOC / ENSO), sea ice, CMIP6 downscaling |
| 🛰️ **Space** | Galaxy morphology (JWST / Euclid / Hubble), exoplanet atmospheres, solar EUV, CMB lensing |

### The mathematical foundation

AISciImg360 inherits the **TME-FUSE norm-clamped geometric fusion framework** ([Zenodo: 10.5281/zenodo.21849798](https://doi.org/10.5281/zenodo.21849798)) by Abhinav Kumar Dixit, which established:

- The **1-Lipschitz norm-clamping operator**: `Π_{c,ε}(v) = v · min(1, c / (‖v‖₂ + ε))`
- **Theorem 7 cumulative displacement bound**: `Δx_i^(L) ≤ L · c = 6.0 μm` at L=3, c=2.0 μm
- Pure-CPU inference at 200–280 ms per 64³ volume, < 200 MB RAM

## Live preview

Click the badge above or visit the preview URL to see the running application. The MVP includes:

- A landing page with the four domain pillars and benchmark comparison table
- One rich page per imaging domain (16 modalities documented with inputs/outputs/equations/datasets)
- An **AskAI copilot** grounded in the modality catalog and the TME-FUSE math
- A **Get Started** page with quickstart (clone → mount sample → CPU forward pass → ask copilot)
- Universal **search** across all modalities (⌘K)
- **Dark / light** theme toggle (persistent)
- A free-tier in-browser **IDE studio** (Monaco + Pyodide) for trying Python code
- **Jupyter notebook** access via JupyterLite and Google Colab
- A **datasets** directory of free public datasets per domain
- A **vision** page with the long-term manifesto and v1.0 roadmap

## Compliance

### GDPR

Personal data is processed lawfully, minimally, and transparently. For EU deployments set `AISCIIMG360_DATA_REGION=eu`. Data subject requests are honored by replaying audit logs through the redaction manifest. Contact `testdemoqwenai2025@gmail.com`.

### HIPAA

For medical imaging workflows set `AISCIIMG360_PHI_MODE=safe_harbor`. The SDK redacts the 18 HIPAA identifiers in safe-harbor mode and writes the redaction manifest next to every output. PHI never leaves the user's environment. Full BAA execution is part of the v1.0 release.

### MIT License (public)

This public storefront repository is released under the [MIT License](./LICENSE). The full application source lives in a private development repository and is shared with partners under separate agreement.

## Roadmap

| Version | Status | Highlights |
| --- | --- | --- |
| v0.1.0 — MVP | **public (this release)** | Multi-page Next.js app · 4 domains · AskAI copilot · IDE + Jupyter access · MIT licensed · HIPAA + GDPR statements |
| v0.2.0 | planned | PyTorch reference engine · Cryo-EM adapter + EMPIAR eval · Hyperspectral adapter + EnMAP eval · Public eval harness |
| v0.5.0 | planned | All four domains at ≥1 stable modality · Per-release eval reports · Live-inference grounded copilot |
| v1.0.0 | planned | Independent reproduction of benchmark numbers · Federated adapter API for new modalities · v1.x API stability commitment |

## Contact

For partnerships, modality contributions, security disclosures, research collaborations, or to request access to the private development repository:

- **Email** → `testdemoqwenai2025@gmail.com`
- **Foundational paper** → https://doi.org/10.5281/zenodo.21849798

## Acknowledgements

AISciImg360 stands in continuous dialogue with — and aims to extend the reach of — these foundational systems:

- **AlphaFold2** (DeepMind, 2021) — protein structure prediction
- **Segment Anything** (Meta, 2023) — prompt-driven segmentation
- **CryoDRGN** (Nature Methods, 2021) — heterogeneous cryo-EM
- **POLYMER** (RSE, 2010) — ocean color atmospheric correction
- **BCSD** (Clim. Dyn., 2003) — bias-corrected spatial downscaling
- **Aura/PLATON** — exoplanet atmospheric retrieval
- **TME-FUSE** (Zenodo, 2026) — norm-clamped geometric fusion for medical mpMRI

AISciImg360 is released under the MIT License. Benchmark numbers in this MVP are illustrative; v1.0 will publish reproducible eval scripts against public datasets.
