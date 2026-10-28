(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,87486,e=>{"use strict";var t=e.i(43476),r=e.i(91918),a=e.i(25913),i=e.i(75157);let s=(0,a.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function n({className:e,variant:a,asChild:n=!1,...l}){let o=n?r.Slot:"span";return(0,t.jsx)(o,{"data-slot":"badge",className:(0,i.cn)(s({variant:a}),e),...l})}e.s(["Badge",()=>n])},15288,e=>{"use strict";var t=e.i(43476),r=e.i(75157);function a({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...a})}e.s(["Card",()=>a])},63209,e=>{"use strict";let t=(0,e.i(75254).default)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",()=>t],63209)},25652,e=>{"use strict";let t=(0,e.i(75254).default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);e.s(["TrendingUp",()=>t],25652)},82876,72664,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(22016),i=e.i(55436),s=e.i(78583);let n=(0,e.i(75254).default)("box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);e.s(["Box",()=>n],72664);var l=e.i(78094),o=e.i(72520),d=e.i(81156);function c({extractions:e}){let[c,u]=r.useState(""),[m,p]=r.useState([]),[f,g]=r.useState(!1),h=r.useRef(null);r.useEffect(()=>{if(!c.trim())return void p([]);let t=c.toLowerCase().trim(),r=[];for(let e of d.CONCEPTS)`${e.title} ${e.id} ${e.subtitle} ${e.category}`.toLowerCase().includes(t)&&r.push({type:"card",title:e.title,subtitle:e.subtitle.slice(0,80),href:`/concepts#card-${e.id}`,icon:s.FileText,color:"#14b8a6"});if(e)for(let a of e)`${a.title} ${a.slug} ${a.topic}`.toLowerCase().includes(t)&&r.push({type:"extraction",title:a.title.slice(0,80),subtitle:a.topic.slice(0,80),href:"/extraction-graph",icon:l.Network,color:"#fbbf24"});for(let e of d.CONCEPTS){let a=e.id,i=e.observations?.canvasType==="cross-domain-bridge",s=e.observations?.canvasType==="sample-efficiency-plot";(i||s||a.includes("drug")||a.includes("protein")||a.includes("imaging")||a.includes("climate")||a.includes("space")||a.includes("musculo"))&&`${e.title} ${a} ${e.category}`.toLowerCase().includes(t)&&r.push({type:"artifact",title:e.title,subtitle:"artifact in /domain-graph",href:"/domain-graph",icon:n,color:"#d946ef"})}let a=new Set;p(r.filter(e=>{let t=`${e.type}:${e.title}`;return!a.has(t)&&(a.add(t),!0)}).slice(0,20))},[c,e]),r.useEffect(()=>{let e=e=>{h.current&&!h.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let b={card:"Concept Cards",extraction:"Extractions",artifact:"Domain Graph Artifacts"},_=m.reduce((e,t)=>(e[t.type]||(e[t.type]=[]),e[t.type].push(t),e),{});return(0,t.jsxs)("div",{ref:h,className:"relative w-full max-w-2xl",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(i.Search,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,t.jsx)("input",{type:"text",value:c,onChange:e=>{u(e.target.value),g(!0)},onFocus:()=>g(!0),placeholder:"Search across all graphs: cards, extractions, artifacts…",className:"w-full rounded-lg border border-border/60 bg-card/60 backdrop-blur pl-10 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"})]}),f&&m.length>0&&(0,t.jsx)("div",{className:"absolute z-50 mt-2 w-full max-h-96 overflow-y-auto rounded-lg border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl",children:Object.entries(_).map(([e,r])=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-mono bg-muted/30 border-b border-border/40",children:[b[e]," (",r.length,")"]}),r.map((r,i)=>{let s=r.icon;return(0,t.jsxs)(a.default,{href:r.href,onClick:()=>{g(!1),u("")},className:"flex items-center gap-2 px-3 py-2 hover:bg-accent/40 transition-colors border-b border-border/20 last:border-0",children:[(0,t.jsx)(s,{className:"h-3.5 w-3.5 flex-shrink-0",style:{color:r.color}}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)("p",{className:"text-sm font-medium truncate",children:r.title}),(0,t.jsx)("p",{className:"text-[10px] text-muted-foreground truncate",children:r.subtitle})]}),(0,t.jsx)(o.ArrowRight,{className:"h-3 w-3 text-muted-foreground flex-shrink-0"})]},`${e}-${i}`)})]},e))}),f&&c.trim()&&0===m.length&&(0,t.jsxs)("div",{className:"absolute z-50 mt-2 w-full rounded-lg border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl p-4 text-center text-sm text-muted-foreground",children:['No results found for "',c,'"']})]})}e.s(["CrossGraphSearch",()=>c],82876)},97270,e=>{"use strict";let t="0.26.2",r={"drug-target-binding-affinity":.5,"natural-language-protein-design":2,"isosteric-pocket-design":2,"mpmri-brain-tumor-reconstruction":2,"pixel-level-segmentation":2,"jwst-galaxy-morphology":.1,"sst-enso-detection":.25,"musculoskeletal-simulation":2,"corollary-7-1-parsimony":1,"agentic-protein-discovery":2,"protein-pipeline-orchestration":2,"climate-vegetation-space-bridge":.25},a={"drug-target-binding-affinity":{units:["kcal/mol","Kd","IC50","ΔG","Ki","nM","μM"],methods:["docking","molecular dynamics","MD","free energy","FEP","binding"]},"natural-language-protein-design":{units:["Å","angstrom","RMSD","backbone","Pinal"],methods:["AlphaFold","ESMFold","ProteinMPNN","RFdiffusion","language model"]},"isosteric-pocket-design":{units:["Å","isosteric","pocket","Hausdorff","apo","X-ray"],methods:["physics-based","complementarity","pocket design"]},"mpmri-brain-tumor-reconstruction":{units:["μm","voxel","MRI","tumor"],methods:["EGNN","norm-clamp","TME-FUSE","U-Net"]},"pixel-level-segmentation":{units:["pixel","mask","Dice","IoU"],methods:["SAM","MedSAM","VLM","foundation model"]},"jwst-galaxy-morphology":{units:["arcsec","PSF","galaxy","JWST"],methods:["deconvolution","PSF reconstruction","CNN","VLBI"]},"sst-enso-detection":{units:["K","SST","sea surface","ENSO"],methods:["downscaling","CNN","GAN","ERA5","CMIP6"]},"musculoskeletal-simulation":{units:["mm","muscle","joint","gait"],methods:["EGNN","reinforcement learning","OpenSim","Hill model"]},"corollary-7-1-parsimony":{units:["sample","N=","bound","parsimony"],methods:["certification","Theorem 7","EGNN","Lipschitz"]},"climate-vegetation-space-bridge":{units:["K","SST","NDVI","arcsec","μm"],methods:["satellite","remote sensing","EGNN","certification"]}},i=null;async function s(){return i||(i=(async()=>{window.loadPyodide||await new Promise((e,r)=>{let a=document.createElement("script");a.src=`https://cdn.jsdelivr.net/pyodide/v${t}/full/pyodide.js`,a.onload=()=>e(),a.onerror=()=>r(Error("Failed to load Pyodide from CDN")),document.head.appendChild(a)});let e=await window.loadPyodide({indexURL:`https://cdn.jsdelivr.net/pyodide/v${t}/full/`});return await e.loadPackage(["numpy"]),e})())}let n=`
import numpy as np
from js import extraction_features, baseline_features, c_value, L_layers, n_steps

# Convert JS arrays to numpy arrays
ext_feats = np.array(extraction_features, dtype=np.float64)
base_feats = np.array(baseline_features, dtype=np.float64)
c = float(c_value)
L = int(L_layers)
n_steps = int(n_steps)

# Set random seed for reproducibility
np.random.seed(42)

# Tiny EGNN: 3 layers, 16-dim
# Layer weights: initialized small, trained via gradient descent
class TinyEGNN:
    def __init__(self, dim=16, L=3, c=1.0):
        self.dim = dim
        self.L = L
        self.c = c
        # Initialize weights (small random)
        self.weights = [np.random.randn(dim, dim) * 0.1 for _ in range(L)]
        self.biases = [np.random.randn(dim) * 0.05 for _ in range(L)]
    
    def norm_clamp(self, v, c):
        """1-Lipschitz norm-clamp (Theorem 7 bound)."""
        norm = np.linalg.norm(v)
        if norm > c:
            return v * (c / (norm + 1e-8))
        return v
    
    def forward(self, x):
        """Forward pass: L layers of linear -> norm-clamp -> tanh."""
        h = x.copy()
        cumulative_displacement = 0.0
        for layer in range(self.L):
            # Linear
            z = self.weights[layer] @ h + self.biases[layer]
            # Norm-clamp (Theorem 7 bound)
            z_clamped = self.norm_clamp(z, self.c)
            # tanh activation
            h_new = np.tanh(z_clamped)
            # Track displacement
            cumulative_displacement += np.linalg.norm(h_new - h)
            h = h_new
        return h, cumulative_displacement
    
    def train(self, x, target, n_steps=50, lr=0.01):
        """Train via gradient descent on MSE loss."""
        loss_curve = []
        for step in range(n_steps):
            # Forward
            h, disp = self.forward(x)
            # Loss: MSE to target + small displacement penalty
            loss = np.mean((h - target) ** 2) + 0.01 * disp
            loss_curve.append(float(loss))
            
            # Numerical gradient (simple finite differences)
            grad_W = [np.zeros_like(w) for w in self.weights]
            grad_b = [np.zeros_like(b) for b in self.biases]
            eps = 0.01
            
            # Compute gradient for each weight
            for layer in range(self.L):
                for i in range(self.dim):
                    for j in range(self.dim):
                        # Perturb weight up
                        orig = self.weights[layer][i, j]
                        self.weights[layer][i, j] = orig + eps
                        h_p, disp_p = self.forward(x)
                        loss_p = np.mean((h_p - target) ** 2) + 0.01 * disp_p
                        # Perturb weight down
                        self.weights[layer][i, j] = orig - eps
                        h_m, disp_m = self.forward(x)
                        loss_m = np.mean((h_m - target) ** 2) + 0.01 * disp_m
                        # Gradient
                        grad_W[layer][i, j] = (loss_p - loss_m) / (2 * eps)
                        # Restore
                        self.weights[layer][i, j] = orig
                
                # Gradient for biases
                for i in range(self.dim):
                    orig = self.biases[layer][i]
                    self.biases[layer][i] = orig + eps
                    h_p, disp_p = self.forward(x)
                    loss_p = np.mean((h_p - target) ** 2) + 0.01 * disp_p
                    self.biases[layer][i] = orig - eps
                    h_m, disp_m = self.forward(x)
                    loss_m = np.mean((h_m - target) ** 2) + 0.01 * disp_m
                    grad_b[layer][i] = (loss_p - loss_m) / (2 * eps)
                    self.biases[layer][i] = orig
            
            # Update weights (gradient descent)
            for layer in range(self.L):
                self.weights[layer] -= lr * grad_W[layer]
                self.biases[layer] -= lr * grad_b[layer]
        
        return loss_curve

# Train baseline model (without extraction features)
np.random.seed(42)
model_baseline = TinyEGNN(dim=16, L=L, c=c)
target = np.random.randn(16) * 0.5  # synthetic target
loss_curve_baseline = model_baseline.train(base_feats, target, n_steps=n_steps)
_, baseline_displacement = model_baseline.forward(base_feats)

# Train augmented model (with extraction features)
np.random.seed(42)  # same seed for fair comparison
model_augmented = TinyEGNN(dim=16, L=L, c=c)
# Augmented input: 70% baseline + 30% extraction
augmented_feats = 0.7 * base_feats + 0.3 * ext_feats
loss_curve_augmented = model_augmented.train(augmented_feats, target, n_steps=n_steps)
_, augmented_displacement = model_augmented.forward(augmented_feats)

# Compute delta and certificate
delta = baseline_displacement - augmented_displacement
Lc = c * L
delta_max = max(baseline_displacement, augmented_displacement)
certified = delta_max <= Lc

# Score: normalized delta (0-1)
score = max(0.0, min(1.0, (delta / (baseline_displacement + 1e-8)) * 2))

# Return results as dict
results = {
    "baseline_displacement": float(baseline_displacement),
    "augmented_displacement": float(augmented_displacement),
    "delta": float(delta),
    "score": float(score),
    "loss_curve_baseline": loss_curve_baseline,
    "loss_curve_augmented": loss_curve_augmented,
    "certificate": {
        "c": float(c),
        "L": int(L),
        "Lc": float(Lc),
        "delta_max": float(delta_max),
        "certified": bool(certified),
    },
}
results
`;async function l(e,i,o=50,d){let c=Date.now(),u=await s(),m=function(e,t){let r,i=Array(16).fill(0),s=a[t];if(!s)return i;let n=(e.title+" "+e.topic+" "+e.key_claims.join(" ")).toLowerCase(),l=/(-?\d+\.?\d*)\s*(kcal\/mol|kd|ic50|δg|ki|nm|μm|um|å|angstrom|rmsd|k|arcsec|mm|pixel|voxel)/gi,o=0;for(;null!==(r=l.exec(n))&&o<4;){let e=parseFloat(r[1]);!isNaN(e)&&(i[o]=(Math.tanh(e/10)+1)/2,o++)}for(let e=0;e<Math.min(6,s.units.length);e++)i[4+e]=+!!n.includes(s.units[e].toLowerCase());for(let e=0;e<Math.min(4,s.methods.length);e++)i[10+e]=+!!n.includes(s.methods[e].toLowerCase());let d=e.source_type.toLowerCase();return d.includes("nature")||d.includes("science")?i[14]=1:d.includes("arxiv")||d.includes("preprint")?i[14]=.8:d.includes("linkedin")||d.includes("infographic")?i[14]=.3:i[14]=.5,i[15]=+!!e.matched_concept_ids.includes(t),i}(e,i.id),p=function(e){let t=Array(16);for(let r=0;r<16;r++){let a=e.charCodeAt(r%e.length)+13*r;t[r]=(9301*a+49297)%233280/233280}return t}(i.id),f=d?.cOverride??r[i.id]??1,g=d?.LOverride??3;u.globals.set("extraction_features",m),u.globals.set("baseline_features",p),u.globals.set("c_value",f),u.globals.set("L_layers",g),u.globals.set("n_steps",o);let h=u.runPython(n),b=h.baseline_displacement,_=h.augmented_displacement,y=h.delta,x=h.score,v=h.loss_curve_baseline,w=h.certificate,N=Date.now()-c,L=d?.cOverride!=null||d?.LOverride!=null,k=`Full Phase C (trained EGNN, ${o} steps${L?", user-overridden c/L":""}): baseline displacement ${b.toFixed(4)} → augmented ${_.toFixed(4)} (delta ${y>=0?"+":""}${y.toFixed(4)}, c=${f}, L=${g}, L\xb7c=${(f*g).toFixed(1)}, ${w.certified?"✓ certified":"✗ violated"})`;return{baseline_displacement:b,augmented_displacement:_,delta:y,score:x,training_loss_curve:v,certificate:{c:w.c,L:w.L,Lc:w.Lc,delta_max:w.delta_max,certified:w.certified},explanation:k,pyodide_version:t,training_time_ms:N}}e.s(["evaluateTighteningFullPhaseC",()=>l])},20278,e=>{"use strict";let t=(0,e.i(75254).default)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);e.s(["Target",()=>t],20278)}]);