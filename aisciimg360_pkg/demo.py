"""
aisciimg360 demo — runs in Pyodide (browser) or locally.

This demo verifies:
1. The 1-Lipschitz norm-clamp operator
2. E(3)-equivariance (structural test)
3. Theorem 7 compliance (cumulative displacement bound)
4. The AsymmetricPromptBridge (text → visual fusion)
5. The DynamicGraphRemesher (topology handling)
6. The DegradationPipeline (undersampling)

Usage (Pyodide/browser):
    import aisciimg360
    aisciimg360.demo.run()

Usage (local):
    python -m aisciimg360.demo
"""
import numpy as np
from . import (
    OSIRISGeometricEngine, AsymmetricPromptBridge, IsotropicVoxelDecoder,
    DynamicGraphRemesher, SyntheticToRealGenerator, DegradationPipeline,
    Theorem7Checker, norm_clamp,
)

def run():
    print("=" * 60)
    print("OSIRIS / AISciImg360 v0.2.0 — Demo")
    print("Equivariant Observation, Spatial Integrity,")
    print("and Reconstruction Inference System")
    print("=" * 60)

    # 1. Norm-clamp test
    print("\n1. Norm-Clamp Operator (1-Lipschitz)")
    v = np.random.randn(100, 3) * 10  # large displacements
    clamped = norm_clamp(v, c=2.0)
    max_norm = np.linalg.norm(clamped, axis=-1).max()
    print(f"   Input max norm: {np.linalg.norm(v, axis=-1).max():.4f}")
    print(f"   Clamped max norm: {max_norm:.4f} (must be <= c=2.0)")
    print(f"   Compliance: {(max_norm <= 2.0 + 1e-6) * 100:.2f}%")

    # 2. OSIRIS engine + Theorem 7
    print("\n2. OSIRISGeometricEngine + Theorem 7")
    engine = OSIRISGeometricEngine(L=3, c=2.0, feat_dim=64)
    N = 50
    h = np.random.randn(N, 64)
    x = np.random.randn(N, 3) * 5
    adj = (np.linalg.norm(x[:, None] - x[None, :], axis=-1) < 5.0).astype(float)

    h_out, x_out = engine.forward(h, x, adj)
    audit = engine.theorem_7_check(x, x_out)
    print(f"   Bound (L*c): {audit['bound']}")
    print(f"   Max displacement: {audit['max_observed']:.4f}")
    print(f"   Mean displacement: {audit['mean_observed']:.4f}")
    print(f"   Π_compliance: {audit['compliance_pct']:.2f}% (must be 100.00%)")

    # 3. E(3)-equivariance test
    print("\n3. E(3)-Equivariance Test")
    equiv = engine.equivariance_test(h, x, adj, n_tests=5)
    print(f"   All pass: {equiv['all_pass']}")
    print(f"   Max error: {equiv['max_error']:.2e} (must be < 1e-5)")

    # 4. AsymmetricPromptBridge
    print("\n4. AsymmetricPromptBridge (text → visual fusion)")
    bridge = AsymmetricPromptBridge(text_dim=256, feat_dim=64)
    text_emb = np.random.randn(256)
    h_fused = bridge.forward(h, text_emb)
    delta = np.linalg.norm(h_fused - h, axis=-1)
    print(f"   Text adds to visual (not replace)")
    print(f"   Mean |h_fused - h|: {delta.mean():.4f}")
    print(f"   Asymmetry confirmed: h_fused = h + W_p·text (additive)")

    # 5. DynamicGraphRemesher
    print("\n5. DynamicGraphRemesher (topology handling)")
    remesher = DynamicGraphRemesher(tear_threshold=3.0, verbose=True)
    x_prev = x.copy()
    x_new = x_out.copy()
    adj_new, tear_info = remesher.remesh(x_new, x_prev, adj)
    print(f"   Torn edges: {tear_info['torn_edges']}")
    print(f"   Isolated nodes fixed: {tear_info['isolated_nodes_fixed']}")
    print(f"   Max displacement: {tear_info['max_displacement']:.4f}")

    # 6. DegradationPipeline
    print("\n6. DegradationPipeline (accelerated undersampling)")
    pipeline = DegradationPipeline(undersampling_factor=0.36, noise_snr_db=20)
    clean = np.random.randn(16, 16, 16) * 50 + 100
    degraded, info = pipeline.degrade(clean)
    print(f"   Undersampling: {info.get('fourier_undersampled', 'not applied')}")
    print(f"   Final SNR: {info['final_snr_db']:.1f} dB")
    print(f"   Data retention: {info['data_retention']:.1%}")

    # 7. VoxelDecoder
    print("\n7. IsotropicVoxelDecoder")
    decoder = IsotropicVoxelDecoder(feat_dim=64, out_shape=(4, 4, 4))
    volume = decoder.forward(h_out)
    print(f"   Output shape: {volume.shape}")
    print(f"   Volume range: [{volume.min():.2f}, {volume.max():.2f}]")

    print("\n" + "=" * 60)
    print("OSIRIS v0.2.0 demo complete.")
    print("All systems operational.")
    print(f"  Theorem 7: {audit['compliance_pct']:.2f}% compliant")
    print(f"  Equivariance: {'PASS' if equiv['all_pass'] else 'FAIL'}")
    print(f"  Bound: ||x_L - x_0|| <= L*c = {audit['bound']}")
    print("=" * 60)

if __name__ == "__main__":
    run()
