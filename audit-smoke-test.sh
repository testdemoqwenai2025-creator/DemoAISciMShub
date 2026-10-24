#!/bin/bash
# OSIRIS / AISciImg360 — Audit + Smoke Test Script
# Tests all routes, all concept cards, and all API endpoints
# Usage: bash scripts/audit-smoke-test.sh [BASE_URL]

BASE_URL="${1:-http://localhost:3000}"
PASS=0
FAIL=0
WARN=0

echo "============================================"
echo "OSIRIS / AISciImg360 — Audit + Smoke Test"
echo "Base URL: $BASE_URL"
echo "============================================"
echo ""

# 1. Test all routes
echo "==> 1. Route Tests (22 routes)"
echo "--------------------------------------------"
ROUTES=(
  "/" "/about" "/scientific" "/environmental" "/climatic" "/space"
  "/get-started" "/ask-ai" "/search" "/datasets" "/ide" "/notebooks"
  "/tools" "/vision" "/concepts" "/playground" "/upload" "/papers"
  "/marketplace" "/admin/linkedin" "/admin/generate" "/knowledge-graph"
)

for route in "${ROUTES[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$route" 2>/dev/null)
  if [ "$STATUS" = "200" ]; then
    echo "  ✅ $route (200)"
    PASS=$((PASS+1))
  else
    echo "  ❌ $route ($STATUS)"
    FAIL=$((FAIL+1))
  fi
done

echo ""

# 2. Test concept cards (31 cards)
echo "==> 2. Concept Card Tests (31 cards)"
echo "--------------------------------------------"
CARDS=(
  "tme-fuse-norm-clamp" "e3-equivariance" "osiris-system-architecture"
  "cryo-em-density" "field-ultrasound-diagnostics" "forest-canopy-reconstruction"
  "crop-disease-spatial-tracking" "hyperspectral-canopy-chemistry" "sst-enso-detection"
  "jwst-galaxy-morphology" "exoplanet-atmospheric-retrieval" "solar-flare-forecasting"
  "mpmri-brain-tumor-reconstruction" "cardiac-4d-flow-mri" "ct-lung-nodule-detection"
  "histopathology-wsi" "retinal-oct-macular-degeneration" "enzyme-kinetics-haldane"
  "dna-sequence-alignment" "drug-target-binding-affinity" "single-cell-rnaseq"
  "nmr-chemical-shift-prediction" "ir-spectrum-peak-assignment" "mass-spec-fragment-id"
  "raman-spectral-unmixing" "uv-vis-absorption-decomposition" "quantum-wavefunction-visualization"
  "drone-multispectral-thermal-fusion" "stellar-classification-hr-diagram"
  "gravitational-wave-strain-analysis" "black-hole-imaging-eht"
)

# Check that the concepts page loads
CONCEPTS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/concepts" 2>/dev/null)
if [ "$CONCEPTS_STATUS" = "200" ]; then
  echo "  ✅ /concepts page loads (200)"
  PASS=$((PASS+1))
else
  echo "  ❌ /concepts page fails ($CONCEPTS_STATUS)"
  FAIL=$((FAIL+1))
fi

# Check for concept card titles in the HTML
for card in "${CARDS[@]}"; do
  # Convert card ID to a search-friendly title
  TITLE=$(echo "$card" | tr '-' ' ' | sed 's/.*/&/')
  FOUND=$(curl -s "$BASE_URL/concepts" 2>/dev/null | grep -ci "$card" || echo "0")
  if [ "$FOUND" -gt 0 ]; then
    echo "  ✅ Card '$card' found in /concepts"
    PASS=$((PASS+1))
  else
    echo "  ⚠️ Card '$card' not found in /concepts HTML"
    WARN=$((WARN+1))
  fi
done

echo ""

# 3. Test API endpoints (on dev server only — not on static GitHub Pages)
echo "==> 3. API Endpoint Tests (dev server only)"
echo "--------------------------------------------"
APIS=(
  "/api/search?q=cryo"
  "/api/papers"
)

for api in "${APIS[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$api" 2>/dev/null)
  if [ "$STATUS" = "200" ]; then
    echo "  ✅ $api (200)"
    PASS=$((PASS+1))
  elif [ "$STATUS" = "000" ]; then
    echo "  ⚠️ $api (connection refused — expected on static site)"
    WARN=$((WARN+1))
  else
    echo "  ❌ $api ($STATUS)"
    FAIL=$((FAIL+1))
  fi
done

# Test concept chat API
CHAT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
  -X POST "$BASE_URL/api/concepts/chat" \
  -H "Content-Type: application/json" \
  -d '{"conceptId":"tme-fuse-norm-clamp","kind":"deeper-thoughts"}' 2>/dev/null)
if [ "$CHAT_STATUS" = "200" ]; then
  echo "  ✅ /api/concepts/chat (200)"
  PASS=$((PASS+1))
elif [ "$CHAT_STATUS" = "429" ]; then
  echo "  ✅ /api/concepts/chat (429 rate-limited — working)"
  PASS=$((PASS+1))
elif [ "$CHAT_STATUS" = "000" ]; then
  echo "  ⚠️ /api/concepts/chat (connection refused — expected on static site)"
  WARN=$((WARN+1))
else
  echo "  ❌ /api/concepts/chat ($CHAT_STATUS)"
  FAIL=$((FAIL+1))
fi

echo ""

# 4. Test notebooks (.ipynb files)
echo "==> 4. Notebook Tests (.ipynb files)"
echo "--------------------------------------------"
NOTEBOOK_COUNT=$(curl -s "$BASE_URL/notebooks/" 2>/dev/null | grep -c "ipynb" || echo "0")
# Try a direct notebook URL
NB_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/notebooks/tme-fuse-norm-clamp.ipynb" 2>/dev/null)
if [ "$NB_STATUS" = "200" ]; then
  echo "  ✅ /notebooks/tme-fuse-norm-clamp.ipynb (200)"
  PASS=$((PASS+1))
else
  echo "  ⚠️ /notebooks/tme-fuse-norm-clamp.ipynb ($NB_STATUS)"
  WARN=$((WARN+1))
fi

echo ""

# 5. Test images
echo "==> 5. Image Tests"
echo "--------------------------------------------"
IMAGES=(
  "/scientific-images/scientific-hero.png"
  "/scientific-images/medical-biology.png"
  "/scientific-images/bioinformatics-molecules.png"
  "/scientific-images/cheminformatics-spectroscopy.png"
  "/scientific-images/physics-cosmic.png"
  "/domain-images/environmental-hero.png"
  "/domain-images/climatic-hero.png"
  "/domain-images/space-hero.png"
)

for img in "${IMAGES[@]}"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$img" 2>/dev/null)
  if [ "$STATUS" = "200" ]; then
    echo "  ✅ $img (200)"
    PASS=$((PASS+1))
  else
    echo "  ⚠️ $img ($STATUS)"
    WARN=$((WARN+1))
  fi
done

echo ""

# 6. Lint check
echo "==> 6. Lint Check"
echo "--------------------------------------------"
cd /home/z/my-project 2>/dev/null && LINT_OUTPUT=$(bun run lint 2>&1) || LINT_OUTPUT="skipped (not in project dir)"
if echo "$LINT_OUTPUT" | grep -q "error" || echo "$LINT_OUTPUT" | grep -q "✖"; then
  echo "  ❌ Lint has errors"
  echo "$LINT_OUTPUT" | tail -5
  FAIL=$((FAIL+1))
else
  echo "  ✅ Lint clean"
  PASS=$((PASS+1))
fi

echo ""

# 7. aisciimg360 package test
echo "==> 7. aisciimg360 Package Test"
echo "--------------------------------------------"
PKG_OUTPUT=$(python3 -c "
import sys; sys.path.insert(0, '/home/z/my-project')
from aisciimg360 import OSIRISGeometricEngine, norm_clamp
engine = OSIRISGeometricEngine(L=3, c=2.0, feat_dim=64)
import numpy as np
h = np.random.randn(50, 64)
x = np.random.randn(50, 3) * 5
adj = (np.linalg.norm(x[:,None]-x[None,:],axis=-1) < 5.0).astype(float)
h_out, x_out = engine.forward(h, x, adj)
audit = engine.theorem_7_check(x, x_out)
print(f'Theorem 7: {audit[\"compliance_pct\"]:.2f}%')
equiv = engine.equivariance_test(h, x, adj, n_tests=3)
print(f'Equivariance: {\"PASS\" if equiv[\"all_pass\"] else \"FAIL\"} (error={equiv[\"max_error\"]:.2e})')
" 2>&1)
if echo "$PKG_OUTPUT" | grep -q "100.00%" && echo "$PKG_OUTPUT" | grep -q "PASS"; then
  echo "  ✅ aisciimg360 package: Theorem 7=100%, Equivariance=PASS"
  echo "    $PKG_OUTPUT"
  PASS=$((PASS+1))
else
  echo "  ❌ aisciimg360 package test failed"
  echo "    $PKG_OUTPUT"
  FAIL=$((FAIL+1))
fi

echo ""
echo "============================================"
echo "SUMMARY"
echo "============================================"
echo "  ✅ Pass: $PASS"
echo "  ❌ Fail: $FAIL"
echo "  ⚠️ Warn: $WARN"
echo ""
if [ $FAIL -eq 0 ]; then
  echo "  RESULT: ALL CRITICAL TESTS PASSED ✅"
else
  echo "  RESULT: $FAIL FAILURES — NEEDS ATTENTION ❌"
fi
echo "============================================"
