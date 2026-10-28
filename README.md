# DemoAISciMShub — Public Live Preview

> **Live site (always on, 24/7/365, no NDA):** **https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/**

This repository contains the **built static bundle** for the OSIRIS / AISciImg360 platform. It is automatically deployed to GitHub Pages on every push to the `gh-pages` branch.

The **source code** lives in a separate private repository: [`testdemoqwenai2025-creator/AISciMShub-Advanced`](https://github.com/testdemoqwenai2025-creator/AISciMShub-Advanced).

---

## What's in this repository

This is a **build artifact repository** — it contains the prerendered HTML, JavaScript chunks, CSS, fonts, and static assets produced by `next build`. You should not edit these files directly; they are regenerated from source on every deployment.

```
DemoAISciMShub/
├── *.html, *.meta, *.rsc, *.segments    # Prerendered pages (40+ routes)
├── _next/static/                         # JS chunks, CSS, fonts (rebuilt every deploy)
├── resources/                            # Curated + auto-discovered resources (cron-updated)
├── .nojekyll                             # Critical — disables Jekyll so _next/ is served
└── README.md                             # This file
```

---

## Live preview — always on, 24/7/365

The site is hosted on **GitHub Pages**, which is:

- ✅ **Backed by GitHub's global CDN** — 99.9% uptime SLA, no maintenance windows
- ✅ **Available 24/7/365** — no cold starts, no rate limits for normal traffic
- ✅ **No NDA required** — clients, customers, investors, and any interested party can view, navigate, and test every feature without legal agreements, signup, or access requests
- ✅ **HTTPS by default** — GitHub provides free TLS certificates
- ✅ **Free forever** — GitHub Pages is free for public repositories

---

## What you can do on the live site

| Action | URL |
|---|---|
| **Read the manifesto** | https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/manifesto |
| **Generate a concept card** (5 sample papers, one-click) | https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/admin/generate |
| **Run OSIRIS in your browser** (8 sample datasets, no upload) | https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/admin/demo-creation |
| **View a shared artifact** (paste a shareable link) | https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/shared |
| **Browse 54 concept cards** | https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/concepts |
| **Extraction graph** (auto-updated from arXiv + LinkedIn) | https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/extraction-graph |
| **Curated resources** (daily auto-discovered) | https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/resources |
| **Blog** | https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/blog |

### 3-minute demo flow (no signup, no NDA)

1. Open the [Concept Card Generator](https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/admin/generate)
2. Click **"Load sample paper"** → pick "Highly accurate protein structure prediction with AlphaFold"
3. Click **"Generate draft concept card"** — produces a full structured card
4. Scroll to **Step 3: Share & Publish** → click **Copy link**
5. Paste in a fresh browser tab → the [/shared](https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/shared) viewer renders the draft

---

## The thesis in one paragraph

OSIRIS / AISciImg360 unifies biological signal (4 billion years of enzyme kinetics), neural networks (80 years of Lipschitz theory), and scientific imaging (400 years of fiducial calibration) under a single mathematical bound:

$$\Delta x \leq L \cdot c$$

The displacement of any input under a bounded operator cannot exceed the local sensitivity `L` scaled by the clamp radius `c`. The same bound describes enzyme saturation (`v_max`), 1-Lipschitz networks, GP kernels (`ℓ ↔ L`, `σ² ↔ c`), fiducial calibration, and adversarial robustness. OSIRIS names this bound and ships tools that let a working scientist use it immediately.

Read the full manifesto: **https://testdemoqwenai2025-creator.github.io/DemoAISciMShub/manifesto**

---

## How this repository is updated

A sync script in the source repository handles deployment automatically:

1. `next build` produces the static bundle in `.next/`
2. The script copies HTML/`.meta`/`.rsc`/`.segments` files from `.next/server/app/`
3. Replaces `_next/static/` entirely (chunk hashes change between builds)
4. Copies `public/` assets (resources/, `.nojekyll`, robots.txt)
5. Commits + pushes to this repository's `gh-pages` branch
6. GitHub Pages rebuilds within ~90 seconds

The `.nojekyll` file is critical — it disables Jekyll processing so that the `_next/` directory (which starts with an underscore) is served correctly.

---

## License

[MIT](https://github.com/testdemoqwenai2025-creator/AISciMShub-Advanced/blob/main/LICENSE) — the source code and the deployed site are both open-source and free to use.

---

## Source code

The full source code (Next.js 16, TypeScript, React 19) is in the private repository: [`testdemoqwenai2025-creator/AISciMShub-Advanced`](https://github.com/testdemoqwenai2025-creator/AISciMShub-Advanced).

For access to the source code, contact the project maintainers via GitHub Issues.

---

*Deployed by OSIRIS / AISciImg360 · v0.6.0 · October 2026*
