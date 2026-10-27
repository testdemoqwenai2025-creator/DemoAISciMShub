# AISciImg360 / OSIRIS — Universal Certified Scientific Imaging Intelligence

> **Live preview (no NDA, no signup):** https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/
>
> The certified middle layer for scientific AI — one mathematical guarantee (Theorem 7: `Δx ≤ L·c`) across six domains, from Å-scale protein design to mm-scale biomechanics.

[![Live site](https://img.shields.io/badge/Live-DemoAISciMShub-2ea44f?style=for-the-badge&logo=github)](https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Deploy workflow](https://github.com/testdemoqwenai2025-creator/AISciMShub-Advanced/actions/workflows/deploy.yml/badge.svg)](https://github.com/testdemoqwenai2025-creator/AISciMShub-Advanced/actions/workflows/deploy.yml)
[![Concept cards](https://img.shields.io/badge/concept%20cards-39-9cf.svg)](#concept-card-catalog)
[![Certified domains](https://img.shields.io/badge/certified%20domains-6-9cf.svg)](#the-six-certified-domains)
[![Cross-domain bridge](https://img.shields.io/badge/cross--domain%20bridge-1-9cf.svg)](#cross-domain-bridge)

---

## What you can do right now (no signup, no NDA)

1. **Open the live site** → https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/
2. **Browse the concept catalog** → `/concepts` (38 cards, each with math + code + observation canvas + comparison table + futuristic timeline)
3. **Try a popup** → click any card's "Open popup" button for the full-page scientific communication unit
4. **Read the reverse-engineered external sources** → every concept card's "Comparison" tab now pulls live extractions from `/extractions/index.json`
5. **Read the blog** → `/blog` (3 short articles on certified imaging, agentic discovery, and the Theorem 7 thesis)
6. **Submit your own source** → `/admin/reverse-engineer` accepts a paper URL, an image, or a LinkedIn infographic and (with a PAT) saves the extraction to the public `extractions/` folder

---

## The thesis in one paragraph

Modern scientific AI is fragmented across domains: protein design uses one stack, medical imaging another, climate another, space another. **OSIRIS is the certified middle layer that unifies them.** One mathematical object — the 1-Lipschitz norm-clamped EGNN with Theorem 7's cumulative displacement bound `Δx ≤ L·c` — applies across every scientific imaging domain. The bound is **measurable before deployment** (not post-hoc), **propagates compositionally** (every layer adds its `c`), and **is auditable** (every prediction ships with a certificate). The same `c = 2.0 μm` that certifies a medical image segmentation certifies a `c = 2.0 Å` protein design and a `c = 2.0 mm` musculoskeletal simulation — the math is identical, only the scale changes.

---

## The six certified domains

| Domain | Scale `c` | Representative card | Live URL |
| --- | --- | --- | --- |
| **Drug-target binding** | 0.5 kcal/mol | `drug-target-binding-affinity` | [/concepts#card-drug-target-binding-affinity](https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/concepts#card-drug-target-binding-affinity) |
| **Medical imaging** | 2.0 μm | `mpmri-brain-tumor-reconstruction` | [/concepts#card-mpmri-brain-tumor-reconstruction](https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/concepts#card-mpmri-brain-tumor-reconstruction) |
| **Climate** | 0.25 K | `sst-enso-detection` | [/concepts#card-sst-enso-detection](https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/concepts#card-sst-enso-detection) |
| **Space** | 0.1 arcsec | `jwst-galaxy-morphology` | [/concepts#card-jwst-galaxy-morphology](https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/concepts#card-jwst-galaxy-morphology) |
| **Biomechanics** | 2.0 mm | `musculoskeletal-simulation` | [/concepts#card-musculoskeletal-simulation](https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/concepts#card-musculoskeletal-simulation) |
| **Protein design** | 2.0 Å | `natural-language-protein-design` (Pinal) | [/concepts#card-natural-language-protein-design](https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/concepts#card-natural-language-protein-design) |

Every card carries the same five-part anatomy: **math (with LaTeX) · Python code · observation canvas · futuristic timeline · comparison table**. The "Comparison" tab on each card now pulls live extractions from `/extractions/index.json`, so when the weekly ingestion job finds a new arXiv paper or LinkedIn infographic that matches a card's keyword catalog, the comparison panel updates automatically.

---

## Cross-domain bridge

The `isosteric-pocket-design` card (concept #39) is the platform's **first cross-domain artifact**: a single protein that is simultaneously certified in three domains at three different L·c scales — protein design (c=2.0 Å), drug-target binding (c=0.5 kcal/mol), and medical imaging (c=2.0 μm).

Inspired by the Nature paper *"Rapid assessment of chemical complementarity of ligands for protein design"* (2026), whose two-domain chromophore binder construct is simultaneously a protein-design object, a drug-target binding object, and a microscopy reagent in live cells. The paper's "isosteric and chemically complementary" phrase is exactly the L·c decomposition rediscovered in medicinal-chemistry language.

The `cross-domain-bridge` renderer is the first visualization on the platform that shows ONE protein radiating certification spokes to multiple domains — top spoke (blue, Design, Å-scale), bottom-left (red, Binding, kcal/mol-scale), bottom-right (green, Imaging, μm-scale). The 10-second animation cycles through design → binding → imaging → convergence, where all three certifications pulse back to the central protein.

This card is the prototype for the domain-graph view (v0.6.0 on the roadmap): nodes = artifacts, edges = "certified by the same L·c bound at different scales".

**Live**: https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/concepts#card-isosteric-pocket-design

---

## Concept card catalog (39 cards, organized by domain)

### Foundation (2)
- `tme-fuse-norm-clamp` — the 1-Lipschitz operator that bounds displacement
- `e3-equivariance` — E(3)-equivariant graph neural networks

### Scientific (medical + bio + chemistry, 20)
- `mpmri-brain-tumor-reconstruction` · `cardiac-4d-flow-mri` · `ct-lung-nodule-detection` · `histopathology-wsi` · `retinal-oct-macular-degeneration` (5 medical imaging)
- `enzyme-kinetics-haldane` · `dna-sequence-alignment` · `drug-target-binding-affinity` · `single-cell-rnaseq` (4 bioinformatics)
- `nmr-chemical-shift-prediction` · `ir-spectrum-peak-assignment` · `mass-spec-fragment-id` · `raman-spectral-unmixing` · `uv-vis-absorption-decomposition` (5 cheminformatics)
- `cryo-em-density` · `pixel-level-segmentation` · `agentic-protein-discovery` · `protein-pipeline-orchestration` · `adc-therapeutic-response` (ESMO 2026) · `natural-language-protein-design` (Pinal, c=2.0 Å) · `camera-agnostic-ray-fields` (OmniRay) · `isosteric-pocket-design` (cross-domain bridge: design + binding + imaging)

### Environmental (3)
- `field-ultrasound-diagnostics` · `forest-canopy-reconstruction` · `hyperspectral-canopy-chemistry` · `crop-disease-spatial-tracking` · `drone-multispectral-thermal-fusion`

### Climatic (1)
- `sst-enso-detection`

### Space (5)
- `jwst-galaxy-morphology` · `exoplanet-atmospheric-retrieval` · `solar-flare-forecasting` · `stellar-classification-hr-diagram` · `gravitational-wave-strain-analysis` · `black-hole-imaging-eht`

### Biomechanics (1)
- `musculoskeletal-simulation` — walking skeleton with certified muscle activations

### System (1)
- `osiris-system-architecture` — the certified middle layer

### Physics (1)
- `quantum-wavefunction-visualization`

---

## The reverse-engineering pipeline

Every concept card's "Comparison" tab pulls live extractions from `/extractions/index.json` on the public site. The pipeline:

1. **Ingest**: a user submits a paper URL, image, or infographic via `/admin/reverse-engineer` (or the weekly ingestion cron finds one on arXiv).
2. **Extract**: the system calls the VLM to read the source and produces a structured JSON with title, architecture, workflow steps, key claims, citations, and `keywords_for_concept_matching`.
3. **Match**: the keyword catalog at `src/lib/concept-keywords.ts` (now 110+ mappings) is used to find which concept cards the extraction links to.
4. **Display**: the extraction appears in the "Related external sources" panel on every matched card's Comparison tab, and is searchable from the admin page.
5. **Cross-reference**: when a paper is significant enough, a hand-curated comparison block is added to the card's `comparison[]` array in the data file (this is the "vs <PaperName> (Author Year)" entries on each card).

### Current extractions (live on the site)

| Slug | Source type | Extracted at | Linked cards |
| --- | --- | --- | --- |
| `medsam-linkedin-infographic` | LinkedIn infographic | 2026-10-26 | pixel-level-segmentation, mpmri-brain-tumor-reconstruction |
| `autobinder-agent-2026` | arXiv:2602.00019 (Feb 2026) | 2026-10-27 | agentic-protein-discovery, protein-pipeline-orchestration, drug-target-binding-affinity |
| `mdrna-cat-2026` | arXiv:2610.35204 (Oct 2026) | 2026-10-27 | natural-language-protein-design, cryo-em-density |
| `medsam-agent-2026` | arXiv:2602.03320 (Feb 2026) | 2026-10-27 | pixel-level-segmentation, mpmri-brain-tumor-reconstruction, histopathology-wsi |
| `rpca-psf-reconstruction-2026` | arXiv:2610.19909 (Oct 2026) | 2026-10-27 | jwst-galaxy-morphology, camera-agnostic-ray-fields, black-hole-imaging-eht |
| `coded-aperture-aiml-2026` | arXiv:2610.22709 (Oct 2026) | 2026-10-27 | jwst-galaxy-morphology, camera-agnostic-ray-fields, black-hole-imaging-eht |

---

## The weekly ingestion cron (24/7/365)

**Cron job ID**: `476749` · **Schedule**: daily 09:00 Europe/London · **Last run**: 2026-10-27 17:00 UTC · **Next run**: 2026-10-28 09:00 UTC

The cron fires an agent turn that searches arXiv across 6 categories (q-bio.QM, q-bio.BM, cs.LG, eess.IV, physics.geo-ph, astro-ph.IM), matches results against the keyword catalog, dedupes against existing extractions, and adds new comparison blocks. The job runs daily (not just weekly) so new arXiv submissions are picked up within 24 hours.

---

## Repository layout

| Repository | Branch | Role | Visibility |
| --- | --- | --- | --- |
| `testdemoqwenai2025-creator/AISciMShub-Advanced` | `main` | Next.js source + worklog + deploy workflow | private |
| `testdemoqwenai2025-creator/DemoAISciMShub` | `gh-pages` | Static export (served by GitHub Pages) | public |

The deploy workflow at `.github/workflows/deploy.yml` in the private repo:
1. Triggers on push to `main` (filtered to `src/`, `public/`, build configs)
2. Builds Next.js with Bun
3. Stages the static export to a temp directory
4. Applies the rendering fix (Tailwind 4 strips `[style*="opacity:0"]` selectors — this re-injects them as a `<style>` block in each HTML file's `<head>`)
5. Checks out the public repo's `gh-pages` branch
6. Replaces build files (preserving `extractions/` user-generated content)
7. Commits and pushes — GitHub Pages auto-rebuilds

Concurrency control is enabled (`cancel-in-progress: true`) so a fast double-push never races two deployments.

**Required secret**: `DEPLOY_TOKEN` — a PAT with `repo` scope on the public repo, stored as a GitHub Actions secret in the private repo.

---

## Run the MVP locally

```bash
# Clone the source repo (private — needs PAT)
git clone https://github.com/testdemoqwenai2025-creator/AISciMShub-Advanced.git
cd AISciMShub-Advanced

# Install (Bun recommended)
bun install

# Start the dev server
bun run dev
# → http://localhost:3000

# Or build the static export
bun run build
# → .next/server/app/*.html + .next/static/
```

---

## The mathematical foundation

AISciImg360 inherits the **TME-FUSE norm-clamped geometric fusion framework** (Zenodo: [10.5281/zenodo.21849798](https://doi.org/10.5281/zenodo.21849798)) by Abhinav Kumar Dixit, which established:

- **1-Lipschitz norm-clamping operator**: `Π_{c,ε}(v) = v · min(1, c / (‖v‖₂ + ε))`
- **Theorem 7 cumulative bound**: `Δx_i^(L) ≤ L · c` (at L=3, c=2.0 μm → 6.0 μm in medical imaging)
- **CPU-only inference**: 200–280 ms forward pass on a multi-core CPU, < 200 MB RAM per 64³ volume
- **Compositional safety**: every layer adds its `c`; the bound accumulates linearly; the certificate is per-prediction

These mathematical commitments propagate from the medical TME-FUSE work into every other imaging domain the platform supports — that universality is the entire point.

---

## Roadmap

| Version | Status | Highlights |
| --- | --- | --- |
| v0.1.0 — MVP | ✅ public | Multi-page Next.js app · 4 domain pages · AskAI copilot · MIT licensed |
| v0.2.0 — Certified cards | ✅ public | 39 concept cards · 6 certified domains · popups as scientific communication units · cross-domain bridge |
| v0.3.0 — Reverse-engineering pipeline | ✅ public | `/admin/reverse-engineer` · `/extractions/` public store · weekly ingestion cron (24/7/365) |
| v0.4.0 — Deploy automation | ✅ public | GitHub Actions workflow · concurrency control · paths filter · rendering-fix injection |
| v0.5.0 — Cross-domain bridge | ✅ public | `isosteric-pocket-design` card (#39) · `cross-domain-bridge` renderer · first artifact certified in 3 domains simultaneously (Å + kcal/mol + μm) |
| v0.6.0 — Domain graph view | 🚧 planned | Nodes = artifacts (proteins, drugs, images, climate models), edges = "certified by the same L·c bound at different scales" |
| v1.0.0 — Independent reproduction | planned | Reproducible eval scripts against public datasets · federated adapter API |

---

## Compliance

### GDPR notice
Personal data is processed lawfully, minimally, and transparently. For EU deployments set `AISCIIMG360_DATA_REGION=eu`. Data subject requests are honored by replaying audit logs through the redaction manifest. Contact: `testdemoqwenai2025@gmail.com`.

### HIPAA notice
For medical imaging workflows set `AISCIIMG360_PHI_MODE=safe_harbor`. The SDK redacts the 18 HIPAA identifiers in safe-harbor mode and writes the redaction manifest next to every output. PHI never leaves the user's environment. Full BAA execution is part of the v1.0 release.

### MIT license
All MVP source is MIT-licensed. See [`LICENSE`](./LICENSE). Fork, embed, modify, ship commercial products on top — no strings attached.

---

## Contact

- **Email**: `testdemoqwenai2025@gmail.com`
- **Live site**: https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/
- **Public repository**: https://github.com/testdemoqwenai2025-creator/DemoAISciMShub
- **Foundational paper**: https://doi.org/10.5281/zenodo.21849798

For partnerships, modality contributions, security disclosures, or research collaborations, email us. We are a small team but the work is honest.

---

## Acknowledgements

This platform stands in continuous dialogue with — and aims to extend the reach of — these foundational systems:

- **AlphaFold2 / AlphaFold3** (DeepMind) — protein structure prediction
- **Segment Anything / MedSAM** (Meta) — prompt-driven segmentation
- **CryoDRGN** (Nature Methods, 2021) — heterogeneous cryo-EM
- **RFdiffusion / ProteinMPNN** (Baker Lab) — de novo protein design
- **Pinal** (2026, 16B-parameter protein design foundation model) — natural-language protein design
- **Antigravity + ProtNLM** (DeepMind, 2026) — agentic protein discovery
- **Chaperone** (UW Institute for Protein Design, 2026) — pipeline orchestration
- **AutoBinder Agent** (Ge et al., 2026) — MCP-based agentic binder design
- **mdRNAcat** (Dorn et al., 2026) — RNA conformational ensemble catalog
- **MedSAM-Agent** (2026) — multi-modal LLM medical segmentation
- **RPCA** (2026) — resolved PSF reconstruction for undersampled astronomical images
- **Rapid assessment of chemical complementarity for protein design** (Nature, 2026) — physics-based isosteric pocket design with single-digit design counts; the inspiration for the cross-domain bridge card
- **POLYMER** (RSE, 2010) — ocean color atmospheric correction
- **BCSD** (Clim. Dyn., 2003) — bias-corrected spatial downscaling
- **Aura/PLATON** — exoplanet atmospheric retrieval
- **TME-FUSE** (Zenodo, 2026) — norm-clamped geometric fusion for medical mpMRI

AISciImg360 / OSIRIS is released under the MIT License. Theorem 7 numbers on individual cards are illustrative; v1.0 will publish reproducible eval scripts against public datasets.
