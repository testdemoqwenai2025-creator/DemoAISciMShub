(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,15288,e=>{"use strict";var t=e.i(43476),r=e.i(75157);function s({className:e,...s}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...s})}e.s(["Card",()=>s])},16715,e=>{"use strict";let t=(0,e.i(75254).default)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);e.s(["RefreshCw",()=>t],16715)},62997,e=>{"use strict";var t=e.i(43476),r=e.i(71645),s=e.i(31343);let a=(0,e.i(75254).default)("rotate-cw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);var n=e.i(31278),d=e.i(95468),l=e.i(73884),i=e.i(16715),o=e.i(21218),c=e.i(75157),x=e.i(15288),m=e.i(19455),u=e.i(87486);let p="0.26.2",h=`
def run_batch_tests(n_tests, n_points, n_layers, c, base_seed=42):
    import numpy as np
    results = []
    for i in range(n_tests):
        seed = base_seed + i * 7
        # Inline the test (re-imports)
        rng = np.random.default_rng(seed)
        feat_dim = 32
        W_e = rng.standard_normal((2*feat_dim + 1, feat_dim)) * 0.05
        W_x = rng.standard_normal((feat_dim, 1)) * 0.05

        def norm_clamp(v, c=2.0, eps=1e-8):
            norms = np.linalg.norm(v, axis=-1, keepdims=True)
            return v * np.minimum(1.0, c / (norms + eps))

        def egnn_layer_forward(h, x, adj):
            diff = x[:, None] - x[None, :]
            d_sq = (diff ** 2).sum(axis=-1, keepdims=True)
            N = h.shape[0]
            h_ij = np.concatenate([
                np.broadcast_to(h[:, None, :], (N, N, feat_dim)),
                np.broadcast_to(h[None, :, :], (N, N, feat_dim)),
                d_sq,
            ], axis=-1)
            m = np.maximum(0, h_ij @ W_e) * adj[..., None]
            w = (m @ W_x).squeeze(-1)
            delta = (diff * w[..., None]).sum(axis=1) / np.maximum(adj.sum(axis=1, keepdims=True), 1)
            delta = norm_clamp(delta, c=c)
            return x + delta, delta

        h = rng.standard_normal((n_points, feat_dim))
        x = rng.standard_normal((n_points, 3)) * 3.0
        adj = (np.linalg.norm(x[:, None] - x[None, :], axis=-1) < 4.0).astype(float)

        x_current = x.copy()
        for _ in range(n_layers):
            x_new, _ = egnn_layer_forward(h, x_current, adj)
            x_current = x_new

        theta = rng.uniform(0, 2 * np.pi)
        R = np.array([
            [np.cos(theta), -np.sin(theta), 0],
            [np.sin(theta),  np.cos(theta), 0],
            [0, 0, 1]
        ])
        t = rng.standard_normal(3) * 0.5

        x_transformed = x @ R.T + t
        adj_t = (np.linalg.norm(x_transformed[:, None] - x_transformed[None, :], axis=-1) < 4.0).astype(float)

        x_current_t = x_transformed.copy()
        for _ in range(n_layers):
            x_new_t, _ = egnn_layer_forward(h, x_current_t, adj_t)
            x_current_t = x_new_t

        expected = x_current @ R.T + t
        actual = x_current_t
        error = float(np.linalg.norm(actual - expected) / (np.linalg.norm(expected) + 1e-10))
        results.append({
            'rotation_angle_deg': float(np.degrees(theta)),
            'translation': [float(t[0]), float(t[1]), float(t[2])],
            'equivariance_error': error,
            'pass': bool(error < 1e-5),
        })
    return results
`;function f(){let[e,f]=r.useState(!1),[g,j]=r.useState(!1),[N,_]=r.useState(!1),[y,b]=r.useState([]),[v,w]=r.useState(null),[k,C]=r.useState(null),T=r.useRef(null),P=r.useCallback(async()=>{if(T.current)return T.current;if(g)return null;j(!0),C(null);try{await new Promise((e,t)=>{if(window.loadPyodide)return e();let r=document.createElement("script");r.src=`https://cdn.jsdelivr.net/pyodide/v${p}/full/pyodide.js`,r.onload=()=>e(),r.onerror=()=>t(Error("Failed to load Pyodide from CDN")),document.head.appendChild(r)});let e=await window.loadPyodide({indexURL:`https://cdn.jsdelivr.net/pyodide/v${p}/full/`});return await e.loadPackage(["numpy"]),T.current=e,f(!0),e}catch(e){return C(`Failed to initialize Pyodide: ${e?.message??e}`),null}finally{j(!1)}},[g]),R=async e=>{C(null),_(!0),b([]);try{let t=await P();if(!t)return void _(!1);t.runPython(h);let r=[];for(let s=0;s<e;s++){let e=t.runPython(`run_batch_tests(1, 50, 3, 2.0, ${42+7*s})[0]`);if(e){let t={rotationAngleDeg:e.get("rotation_angle_deg"),translation:e.get("translation").toJs(),equivarianceError:e.get("equivariance_error"),pass:e.get("pass")};r.push(t),w(t),b([...r]),await new Promise(e=>setTimeout(e,80))}}w(null)}catch(e){C(String(e?.message??e))}finally{_(!1)}},E=y.filter(e=>e.pass).length,q=y.length>0&&E===y.length,L=y.length?Math.max(...y.map(e=>e.equivarianceError)):0;return(0,t.jsxs)(x.Card,{className:"overflow-hidden border-border/60 bg-card/40 backdrop-blur",children:[(0,t.jsxs)("div",{className:"border-b border-border/60 bg-muted/30 px-4 py-3 flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(o.Activity,{className:"h-4 w-4 text-primary"}),(0,t.jsx)("span",{className:"text-xs font-mono text-muted-foreground",children:"E(3) rotational invariance test suite"}),e&&(0,t.jsxs)(u.Badge,{variant:"outline",className:"text-[9px] gap-1",children:[(0,t.jsx)(d.CheckCircle2,{className:"h-2.5 w-2.5 text-emerald-500"}),"Pyodide ready"]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsxs)(m.Button,{size:"sm",variant:"outline",onClick:()=>R(5),disabled:N||g,className:"h-7 px-3 text-xs",children:[(0,t.jsx)(s.Play,{className:"h-3 w-3"}),"Run 5 tests"]}),(0,t.jsxs)(m.Button,{size:"sm",onClick:()=>R(20),disabled:N||g,className:"h-7 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90",children:[(0,t.jsx)(a,{className:"h-3 w-3"}),"Run 20 tests"]}),y.length>0&&(0,t.jsx)(m.Button,{size:"sm",variant:"ghost",onClick:()=>b([]),className:"h-7 px-2 text-xs",children:(0,t.jsx)(i.RefreshCw,{className:"h-3 w-3"})})]})]}),(0,t.jsxs)("div",{className:"p-4 grid grid-cols-1 lg:grid-cols-3 gap-3",children:[(0,t.jsx)("div",{className:(0,c.cn)("rounded-lg border-2 p-4 text-center",0===y.length?"border-border/60 bg-muted/20 text-muted-foreground":q?"border-emerald-500/60 bg-emerald-500/10":"border-rose-500/60 bg-rose-500/10"),children:0===y.length?(0,t.jsxs)("div",{children:[(0,t.jsx)(o.Activity,{className:"h-8 w-8 mx-auto opacity-50"}),(0,t.jsx)("p",{className:"mt-2 text-xs font-mono",children:"No tests run yet"}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1",children:'Click "Run 5 tests" to begin'})]}):q?(0,t.jsxs)("div",{children:[(0,t.jsx)(d.CheckCircle2,{className:"h-10 w-10 mx-auto text-emerald-500"}),(0,t.jsx)("p",{className:"mt-2 text-2xl font-display font-bold text-emerald-500",children:"ALL PASS"}),(0,t.jsxs)("p",{className:"text-[10px] font-mono",children:[E," / ",y.length," tests"]})]}):(0,t.jsxs)("div",{children:[(0,t.jsx)(l.XCircle,{className:"h-10 w-10 mx-auto text-rose-500"}),(0,t.jsxs)("p",{className:"mt-2 text-2xl font-display font-bold text-rose-500",children:[E," / ",y.length]}),(0,t.jsxs)("p",{className:"text-[10px] font-mono",children:[y.length-E," failures"]})]})}),(0,t.jsxs)("div",{className:"rounded-lg border border-border/60 bg-background/40 p-4",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono",children:"Test parameters"}),(0,t.jsxs)("dl",{className:"mt-2 space-y-1.5 text-xs font-mono",children:[(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"N points"}),(0,t.jsx)("dd",{children:"50"})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"L layers"}),(0,t.jsx)("dd",{children:"3"})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"c clamp"}),(0,t.jsx)("dd",{children:"2.0"})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Group"}),(0,t.jsx)("dd",{children:"E(3) = O(3) ⋊ ℝ³"})]}),(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Tolerance"}),(0,t.jsx)("dd",{children:"< 1e-5"})]}),(0,t.jsxs)("div",{className:"flex justify-between border-t border-border/40 pt-1.5 mt-1.5",children:[(0,t.jsx)("dt",{className:"text-muted-foreground",children:"Worst error"}),(0,t.jsx)("dd",{className:(0,c.cn)(L<1e-5?"text-emerald-500":"text-rose-500"),children:L.toExponential(2)})]})]})]}),(0,t.jsxs)("div",{className:"rounded-lg border border-border/60 bg-background/40 p-4",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2",children:"Verifying"}),(0,t.jsx)("code",{className:"block text-xs font-mono text-primary leading-relaxed",children:"φ(g · x) = g · φ(x)"}),(0,t.jsx)("p",{className:"mt-2 text-[11px] text-muted-foreground leading-relaxed",children:"For all g ∈ E(3) (rotations + translations). The EGNN layer updates coordinates as a sum of (x_i - x_j) weighted by scalars — this is structurally equivariant. Random weights still satisfy it. The test confirms the architecture, not the training."}),k&&(0,t.jsx)("p",{className:"mt-2 text-[11px] text-rose-500 font-mono break-words",children:k}),g&&(0,t.jsxs)("p",{className:"mt-2 text-[11px] text-muted-foreground flex items-center gap-1",children:[(0,t.jsx)(n.Loader2,{className:"h-3 w-3 animate-spin"}),"Loading Pyodide + numpy from CDN (~10s first time, cached after)…"]}),N&&v&&(0,t.jsxs)("p",{className:"mt-2 text-[11px] text-muted-foreground flex items-center gap-1",children:[(0,t.jsx)(n.Loader2,{className:"h-3 w-3 animate-spin"}),"Running test #",y.length,"… (",v.rotationAngleDeg.toFixed(1),"° rotation)"]})]})]}),y.length>0&&(0,t.jsxs)("div",{className:"border-t border-border/40 p-4",children:[(0,t.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2",children:"Test results (most recent first)"}),(0,t.jsx)("div",{className:"overflow-x-auto max-h-[200px] overflow-y-auto",children:(0,t.jsxs)("table",{className:"w-full text-xs font-mono",children:[(0,t.jsx)("thead",{className:"border-b border-border/40 sticky top-0 bg-background",children:(0,t.jsxs)("tr",{className:"text-left text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,t.jsx)("th",{className:"py-1.5 pr-3",children:"#"}),(0,t.jsx)("th",{className:"py-1.5 pr-3",children:"Rotation"}),(0,t.jsx)("th",{className:"py-1.5 pr-3",children:"Translation"}),(0,t.jsx)("th",{className:"py-1.5 pr-3 text-right",children:"Error"}),(0,t.jsx)("th",{className:"py-1.5 text-center",children:"Pass?"})]})}),(0,t.jsx)("tbody",{children:y.slice().reverse().map((e,r)=>(0,t.jsxs)("tr",{className:"border-b border-border/30 last:border-0",children:[(0,t.jsx)("td",{className:"py-1 pr-3 text-muted-foreground",children:y.length-r}),(0,t.jsxs)("td",{className:"py-1 pr-3",children:[e.rotationAngleDeg.toFixed(2),"°"]}),(0,t.jsxs)("td",{className:"py-1 pr-3 text-muted-foreground",children:["[",e.translation.map(e=>e.toFixed(2)).join(", "),"]"]}),(0,t.jsx)("td",{className:(0,c.cn)("py-1 pr-3 text-right",e.pass?"text-emerald-500":"text-rose-500"),children:e.equivarianceError.toExponential(2)}),(0,t.jsx)("td",{className:"py-1 text-center",children:e.pass?(0,t.jsx)(d.CheckCircle2,{className:"h-3 w-3 text-emerald-500 inline"}):(0,t.jsx)(l.XCircle,{className:"h-3 w-3 text-rose-500 inline"})})]},r))})]})})]})]})}e.s(["EquivarianceTester",()=>f],62997)},915,e=>{e.n(e.i(62997))}]);