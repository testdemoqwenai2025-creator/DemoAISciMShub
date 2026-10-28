(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,80292,e=>{"use strict";var s=e.i(43476),t=e.i(71645),a=e.i(22016),r=e.i(71689),i=e.i(72520),n=e.i(58041),l=e.i(69074),o=e.i(66432),c=e.i(78583),d=e.i(75254);let m=(0,d.default)("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);var u=e.i(73708),x=e.i(31278),p=e.i(83086),h=e.i(95468),f=e.i(63209),g=e.i(40160),v=e.i(16715),b=e.i(86536);let j=(0,d.default)("log-in",[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]]);var y=e.i(79002);let N=(0,d.default)("settings-2",[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),_=(0,d.default)("table-properties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]),w=(0,d.default)("scroll-text",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);var S=e.i(81418);let k=(0,d.default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var C=e.i(27612),P=e.i(61574),L=e.i(82373),R=e.i(52008);let I=(0,d.default)("list-checks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);var z=e.i(75157),O=e.i(15288),B=e.i(19455),V=e.i(87486),T=e.i(24687),M=e.i(10204),D=e.i(57428),q=e.i(81140),A=e.i(20783),F=e.i(30030),$=e.i(48425),E=e.i(42727),U=e.i(69340),H=e.i(86318),G=e.i(35804),J=e.i(99682),K=e.i(96626),Y="Radio",[W,X]=(0,F.createContextScope)(Y),[Q,Z]=W(Y),ee=t.forwardRef((e,a)=>{let{__scopeRadio:r,name:i,checked:n=!1,required:l,disabled:o,value:c="on",onCheck:d,form:m,...u}=e,[x,p]=t.useState(null),h=(0,A.useComposedRefs)(a,e=>p(e)),f=t.useRef(!1),g=!x||m||!!x.closest("form");return(0,s.jsxs)(Q,{scope:r,checked:n,disabled:o,children:[(0,s.jsx)($.Primitive.button,{type:"button",role:"radio","aria-checked":n,"data-state":er(n),"data-disabled":o?"":void 0,disabled:o,value:c,...u,ref:h,onClick:(0,q.composeEventHandlers)(e.onClick,e=>{n||d?.(),g&&(f.current=e.isPropagationStopped(),f.current||e.stopPropagation())})}),g&&(0,s.jsx)(ea,{control:x,bubbles:!f.current,name:i,value:c,checked:n,required:l,disabled:o,form:m,style:{transform:"translateX(-100%)"}})]})});ee.displayName=Y;var es="RadioIndicator",et=t.forwardRef((e,t)=>{let{__scopeRadio:a,forceMount:r,...i}=e,n=Z(es,a);return(0,s.jsx)(K.Presence,{present:r||n.checked,children:(0,s.jsx)($.Primitive.span,{"data-state":er(n.checked),"data-disabled":n.disabled?"":void 0,...i,ref:t})})});et.displayName=es;var ea=t.forwardRef(({__scopeRadio:e,control:a,checked:r,bubbles:i=!0,...n},l)=>{let o=t.useRef(null),c=(0,A.useComposedRefs)(o,l),d=(0,J.usePrevious)(r),m=(0,G.useSize)(a);return t.useEffect(()=>{let e=o.current;if(!e)return;let s=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(d!==r&&s){let t=new Event("click",{bubbles:i});s.call(e,r),e.dispatchEvent(t)}},[d,r,i]),(0,s.jsx)($.Primitive.input,{type:"radio","aria-hidden":!0,defaultChecked:r,...n,tabIndex:-1,ref:c,style:{...n.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});function er(e){return e?"checked":"unchecked"}ea.displayName="RadioBubbleInput";var ei=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],en="RadioGroup",[el,eo]=(0,F.createContextScope)(en,[E.createRovingFocusGroupScope,X]),ec=(0,E.createRovingFocusGroupScope)(),ed=X(),[em,eu]=el(en),ex=t.forwardRef((e,t)=>{let{__scopeRadioGroup:a,name:r,defaultValue:i,value:n,required:l=!1,disabled:o=!1,orientation:c,dir:d,loop:m=!0,onValueChange:u,...x}=e,p=ec(a),h=(0,H.useDirection)(d),[f,g]=(0,U.useControllableState)({prop:n,defaultProp:i??null,onChange:u,caller:en});return(0,s.jsx)(em,{scope:a,name:r,required:l,disabled:o,value:f,onValueChange:g,children:(0,s.jsx)(E.Root,{asChild:!0,...p,orientation:c,dir:h,loop:m,children:(0,s.jsx)($.Primitive.div,{role:"radiogroup","aria-required":l,"aria-orientation":c,"data-disabled":o?"":void 0,dir:h,...x,ref:t})})})});ex.displayName=en;var ep="RadioGroupItem",eh=t.forwardRef((e,a)=>{let{__scopeRadioGroup:r,disabled:i,...n}=e,l=eu(ep,r),o=l.disabled||i,c=ec(r),d=ed(r),m=t.useRef(null),u=(0,A.useComposedRefs)(a,m),x=l.value===n.value,p=t.useRef(!1);return t.useEffect(()=>{let e=e=>{ei.includes(e.key)&&(p.current=!0)},s=()=>p.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",s),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",s)}},[]),(0,s.jsx)(E.Item,{asChild:!0,...c,focusable:!o,active:x,children:(0,s.jsx)(ee,{disabled:o,required:l.required,checked:x,...d,...n,name:l.name,ref:u,onCheck:()=>l.onValueChange(n.value),onKeyDown:(0,q.composeEventHandlers)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,q.composeEventHandlers)(n.onFocus,()=>{p.current&&m.current?.click()})})})});eh.displayName=ep;var ef=t.forwardRef((e,t)=>{let{__scopeRadioGroup:a,...r}=e,i=ed(a);return(0,s.jsx)(et,{...i,...r,ref:t})});ef.displayName="RadioGroupIndicator";var eg=e.i(33498);function ev({className:e,...t}){return(0,s.jsx)(ex,{"data-slot":"radio-group",className:(0,z.cn)("grid gap-3",e),...t})}function eb({className:e,...t}){return(0,s.jsx)(eh,{"data-slot":"radio-group-item",className:(0,z.cn)("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:(0,s.jsx)(ef,{"data-slot":"radio-group-indicator",className:"relative flex items-center justify-center",children:(0,s.jsx)(eg.CircleIcon,{className:"fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"})})})}var ej=e.i(10772),ey="Tabs",[eN,e_]=(0,F.createContextScope)(ey,[E.createRovingFocusGroupScope]),ew=(0,E.createRovingFocusGroupScope)(),[eS,ek]=eN(ey),eC=t.forwardRef((e,t)=>{let{__scopeTabs:a,value:r,onValueChange:i,defaultValue:n,orientation:l="horizontal",dir:o,activationMode:c="automatic",...d}=e,m=(0,H.useDirection)(o),[u,x]=(0,U.useControllableState)({prop:r,onChange:i,defaultProp:n??"",caller:ey});return(0,s.jsx)(eS,{scope:a,baseId:(0,ej.useId)(),value:u,onValueChange:x,orientation:l,dir:m,activationMode:c,children:(0,s.jsx)($.Primitive.div,{dir:m,"data-orientation":l,...d,ref:t})})});eC.displayName=ey;var eP="TabsList",eL=t.forwardRef((e,t)=>{let{__scopeTabs:a,loop:r=!0,...i}=e,n=ek(eP,a),l=ew(a);return(0,s.jsx)(E.Root,{asChild:!0,...l,orientation:n.orientation,dir:n.dir,loop:r,children:(0,s.jsx)($.Primitive.div,{role:"tablist","aria-orientation":n.orientation,...i,ref:t})})});eL.displayName=eP;var eR="TabsTrigger",eI=t.forwardRef((e,t)=>{let{__scopeTabs:a,value:r,disabled:i=!1,...n}=e,l=ek(eR,a),o=ew(a),c=eB(l.baseId,r),d=eV(l.baseId,r),m=r===l.value;return(0,s.jsx)(E.Item,{asChild:!0,...o,focusable:!i,active:m,children:(0,s.jsx)($.Primitive.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":d,"data-state":m?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:c,...n,ref:t,onMouseDown:(0,q.composeEventHandlers)(e.onMouseDown,e=>{i||0!==e.button||!1!==e.ctrlKey?e.preventDefault():l.onValueChange(r)}),onKeyDown:(0,q.composeEventHandlers)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&l.onValueChange(r)}),onFocus:(0,q.composeEventHandlers)(e.onFocus,()=>{let e="manual"!==l.activationMode;m||i||!e||l.onValueChange(r)})})})});eI.displayName=eR;var ez="TabsContent",eO=t.forwardRef((e,a)=>{let{__scopeTabs:r,value:i,forceMount:n,children:l,...o}=e,c=ek(ez,r),d=eB(c.baseId,i),m=eV(c.baseId,i),u=i===c.value,x=t.useRef(u);return t.useEffect(()=>{let e=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.jsx)(K.Presence,{present:n||u,children:({present:t})=>(0,s.jsx)($.Primitive.div,{"data-state":u?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":d,hidden:!t,id:m,tabIndex:0,...o,ref:a,style:{...e.style,animationDuration:x.current?"0s":void 0},children:t&&l})})});function eB(e,s){return`${e}-trigger-${s}`}function eV(e,s){return`${e}-content-${s}`}function eT({className:e,...t}){return(0,s.jsx)(eC,{"data-slot":"tabs",className:(0,z.cn)("flex flex-col gap-2",e),...t})}function eM({className:e,...t}){return(0,s.jsx)(eL,{"data-slot":"tabs-list",className:(0,z.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",e),...t})}function eD({className:e,...t}){return(0,s.jsx)(eI,{"data-slot":"tabs-trigger",className:(0,z.cn)("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function eq({className:e,...t}){return(0,s.jsx)(eO,{"data-slot":"tabs-content",className:(0,z.cn)("flex-1 outline-none",e),...t})}eO.displayName=ez;let eA=[{id:"iris",name:"Iris (150 rows)",description:"Classic Fisher iris — 4 numeric + 1 categorical",csv:`sepal_length,sepal_width,petal_length,petal_width,species
5.1,3.5,1.4,0.2,setosa
4.9,3.0,1.4,0.2,setosa
4.7,3.2,1.3,0.2,setosa
4.6,3.1,1.5,0.2,setosa
5.0,3.6,1.4,0.2,setosa
5.4,3.9,1.7,0.4,setosa
4.6,3.4,1.4,0.3,setosa
5.0,3.4,1.5,0.2,setosa
4.4,2.9,1.4,0.2,setosa
4.9,3.1,1.5,0.1,setosa
5.4,3.7,1.5,0.2,setosa
4.8,3.4,1.6,0.2,setosa
4.8,3.0,1.4,0.1,setosa
4.3,3.0,1.1,0.1,setosa
5.8,4.0,1.2,0.2,setosa
5.7,4.4,1.5,0.4,setosa
5.4,3.9,1.3,0.4,setosa
5.1,3.5,1.4,0.3,setosa
5.7,3.8,1.7,0.3,setosa
5.1,3.8,1.5,0.3,setosa
5.4,3.4,1.7,0.2,setosa
5.1,3.7,1.5,0.4,setosa
4.6,3.6,1.0,0.2,setosa
5.1,3.3,1.7,0.5,setosa
4.8,3.4,1.9,0.2,setosa
5.0,3.0,1.6,0.2,setosa
5.0,3.4,1.6,0.4,setosa
5.2,3.5,1.5,0.2,setosa
5.2,3.4,1.4,0.2,setosa
4.7,3.2,1.6,0.2,setosa
4.8,3.1,1.6,0.2,setosa
5.4,3.4,1.5,0.4,setosa
5.2,4.1,1.5,0.1,setosa
5.5,4.2,1.4,0.2,setosa
4.9,3.1,1.5,0.2,setosa
5.0,3.2,1.2,0.2,setosa
5.5,3.5,1.3,0.2,setosa
4.9,3.6,1.4,0.1,setosa
4.4,3.0,1.3,0.2,setosa
5.1,3.4,1.5,0.2,setosa
5.0,3.5,1.3,0.3,setosa
4.5,2.3,1.3,0.3,setosa
4.4,3.2,1.3,0.2,setosa
5.0,3.5,1.6,0.6,setosa
5.1,3.8,1.9,0.4,setosa
4.8,3.0,1.4,0.3,setosa
5.1,3.8,1.6,0.2,setosa
4.6,3.2,1.4,0.2,setosa
5.3,3.7,1.5,0.2,setosa
5.0,3.3,1.4,0.2,setosa
7.0,3.2,4.7,1.4,versicolor
6.4,3.2,4.5,1.5,versicolor
6.9,3.1,4.9,1.5,versicolor
5.5,2.3,4.0,1.3,versicolor
6.5,2.8,4.6,1.5,versicolor
5.7,2.8,4.5,1.3,versicolor
6.3,3.3,4.7,1.6,versicolor
4.9,2.4,3.3,1.0,versicolor
6.6,2.9,4.6,1.3,versicolor
5.2,2.7,3.9,1.4,versicolor
5.0,2.0,3.5,1.0,versicolor
5.9,3.0,4.2,1.5,versicolor
6.0,2.2,4.0,1.0,versicolor
6.1,2.9,4.7,1.4,versicolor
5.6,2.9,3.6,1.3,versicolor
6.7,3.1,4.4,1.4,versicolor
5.6,3.0,4.5,1.5,versicolor
5.8,2.7,4.1,1.0,versicolor
6.2,2.2,4.5,1.5,versicolor
5.6,2.5,3.9,1.1,versicolor
5.9,3.2,4.8,1.8,versicolor
6.1,2.8,4.0,1.3,versicolor
6.3,2.5,4.9,1.5,versicolor
6.1,2.8,4.7,1.2,versicolor
6.4,2.9,4.3,1.3,versicolor
6.6,3.0,4.4,1.4,versicolor
6.8,2.8,4.8,1.4,versicolor
6.7,3.0,5.0,1.7,versicolor
6.0,2.9,4.5,1.5,versicolor
5.7,2.6,3.5,1.0,versicolor
5.5,2.4,3.8,1.1,versicolor
5.5,2.4,3.7,1.0,versicolor
5.8,2.7,3.9,1.2,versicolor
6.0,2.7,5.1,1.6,versicolor
5.4,3.0,4.5,1.5,versicolor
6.0,3.4,4.5,1.6,versicolor
6.7,3.1,4.7,1.5,versicolor
6.3,2.3,4.4,1.3,versicolor
5.6,3.0,4.1,1.3,versicolor
5.5,2.5,4.0,1.3,versicolor
5.5,2.6,4.4,1.2,versicolor
6.1,3.0,4.6,1.4,versicolor
5.8,2.6,4.0,1.2,versicolor
5.0,2.3,3.3,1.0,versicolor
5.6,2.7,4.2,1.3,versicolor
5.7,3.0,4.2,1.2,versicolor
5.7,2.9,4.2,1.3,versicolor
6.2,2.9,4.3,1.3,versicolor
5.1,2.5,3.0,1.1,versicolor
5.7,2.8,4.1,1.3,versicolor
6.3,3.3,6.0,2.5,virginica
5.8,2.7,5.1,1.9,virginica
7.1,3.0,5.9,2.1,virginica
6.3,2.9,5.6,1.8,virginica
6.5,3.0,5.8,2.2,virginica
7.6,3.0,6.6,2.1,virginica
4.9,2.5,4.5,1.7,virginica
7.3,2.9,6.3,1.8,virginica
6.7,2.5,5.8,1.8,virginica
7.2,3.6,6.1,2.5,virginica
6.5,3.2,5.1,2.0,virginica
6.4,2.7,5.3,1.9,virginica
6.8,3.0,5.5,2.1,virginica
5.7,2.5,5.0,2.0,virginica
5.8,2.8,5.1,2.4,virginica
6.4,3.2,5.3,2.3,virginica
6.5,3.0,5.5,1.8,virginica
7.7,3.8,6.7,2.2,virginica
7.7,2.6,6.9,2.3,virginica
6.0,2.2,5.0,1.5,virginica
6.9,3.2,5.7,2.3,virginica
5.6,2.8,4.9,2.0,virginica
7.7,2.8,6.7,2.0,virginica
6.3,2.7,4.9,1.8,virginica
6.7,3.3,5.7,2.1,virginica
7.2,3.2,6.0,1.8,virginica
6.2,2.8,4.8,1.8,virginica
6.1,3.0,4.9,1.8,virginica
6.4,2.8,5.6,2.1,virginica
7.2,3.0,5.8,1.6,virginica
7.4,2.8,6.1,1.9,virginica
7.9,3.8,6.4,2.0,virginica
6.4,2.8,5.6,2.2,virginica
6.3,2.8,5.1,1.5,virginica
6.1,2.6,5.6,1.4,virginica
7.7,3.0,6.1,2.3,virginica
6.3,3.4,5.6,2.4,virginica
6.4,3.1,5.5,1.8,virginica
6.0,3.0,4.8,1.8,virginica
6.9,3.1,5.4,2.1,virginica
6.7,3.1,5.6,2.4,virginica
6.9,3.1,5.1,2.3,virginica
5.8,2.7,5.1,1.9,virginica
6.8,3.2,5.9,2.3,virginica
6.7,3.3,5.7,2.5,virginica
6.7,3.0,5.2,2.3,virginica
6.3,2.5,5.0,1.9,virginica
6.5,3.0,5.2,2.0,virginica
6.2,3.4,5.4,2.3,virginica
5.9,3.0,5.1,1.8,virginica
`},{id:"synthetic-patients",name:"Synthetic Patient Vitals (50 rows, OSIRIS lens demo)",description:"Heart rate / BP / SpO2 with 4 engineered outliers — perfect for the OSIRIS lens",csv:`patient_id,heart_rate,sys_bp,dia_bp,spo2,temperature,flag
P001,72,118,76,98,36.7,normal
P002,75,120,78,97,36.6,normal
P003,78,122,80,98,36.8,normal
P004,71,116,74,97,36.5,normal
P005,80,124,82,98,36.7,normal
P006,73,119,77,98,36.9,normal
P007,76,121,79,97,36.5,normal
P008,74,118,76,98,36.6,normal
P009,77,123,81,98,36.7,normal
P010,72,117,75,97,36.8,normal
P011,79,125,83,98,36.6,normal
P012,75,120,78,97,36.7,normal
P013,73,118,76,98,36.5,normal
P014,78,122,80,98,36.8,normal
P015,76,121,79,97,36.7,normal
P016,74,119,77,98,36.6,normal
P017,77,123,81,98,36.9,normal
P018,72,117,75,97,36.5,normal
P019,80,124,82,98,36.7,normal
P020,75,120,78,97,36.6,normal
P021,78,122,80,98,36.8,normal
P022,73,118,76,97,36.5,normal
P023,76,121,79,98,36.7,normal
P024,74,119,77,97,36.6,normal
P025,77,123,81,98,36.9,normal
P026,140,180,110,88,39.5,ANOMALY
P027,42,85,55,99,35.0,ANOMALY
P028,71,116,74,97,36.5,normal
P029,75,120,78,97,36.6,normal
P030,180,200,120,82,40.1,ANOMALY
P031,72,118,76,98,36.7,normal
P032,77,121,79,97,36.7,normal
P033,74,118,76,98,36.6,normal
P034,78,122,80,98,36.8,normal
P035,73,119,77,97,36.5,normal
P036,76,121,79,98,36.7,normal
P037,75,120,78,97,36.6,normal
P038,79,123,82,98,36.8,normal
P039,72,117,75,97,36.5,normal
P040,77,121,79,98,36.9,normal
P041,32,80,50,99,34.5,ANOMALY
P042,74,119,77,97,36.6,normal
P043,76,121,79,98,36.7,normal
P044,73,118,76,97,36.5,normal
P045,78,122,80,98,36.8,normal
P046,75,120,78,97,36.6,normal
P047,72,117,75,98,36.7,normal
P048,80,124,82,97,36.9,normal
P049,77,122,80,98,36.6,normal
P050,74,119,77,97,36.5,normal
`}],eF=[{id:"cancer",name:"Cancer — Tumor Heterogeneity",disease:"Cancer",cValue:2.5,rationale:"Cancer cells exhibit HIGH intra-tumor heterogeneity. A wider c=2.5 σ bound tolerates the natural variance of clonal populations while still flagging extreme outliers (drug-resistant subclones, aneuploid cells). The Michaelis-Menten analogy: v_max saturation is reached slowly because the enzyme (treatment) competes against a heterogeneous substrate pool.",csv:`sample_id,tumor_size_mm,ki67_percent,p53_expression,brca1_methylation,immune_infiltrate,grade
S001,12.5,28.0,0.45,0.32,15.2,2
S002,8.3,15.0,0.22,0.18,22.1,1
S003,25.1,55.0,0.78,0.65,8.5,3
S004,9.8,18.5,0.28,0.22,19.8,1
S005,14.2,32.0,0.51,0.41,13.5,2
S006,11.0,22.0,0.35,0.28,17.0,2
S007,18.5,42.0,0.65,0.55,10.2,3
S008,7.5,12.0,0.18,0.15,25.5,1
S009,16.8,38.0,0.58,0.48,11.8,2
S010,10.2,20.0,0.30,0.25,18.5,1
S011,13.5,26.0,0.42,0.35,16.0,2
S012,22.0,52.0,0.72,0.62,9.0,3
S013,9.0,16.0,0.24,0.20,21.0,1
S014,15.0,30.0,0.48,0.38,14.5,2
S015,11.8,24.0,0.38,0.30,17.5,2
S016,40.0,82.0,0.95,0.88,3.2,4
S017,8.8,14.0,0.20,0.17,23.5,1
S018,17.2,40.0,0.62,0.52,10.8,3
S019,12.0,25.0,0.40,0.32,16.5,2
S020,14.8,31.0,0.50,0.42,13.8,2
S021,9.5,17.0,0.26,0.21,20.5,1
S022,19.5,46.0,0.68,0.58,9.5,3
S023,11.5,23.0,0.36,0.29,17.8,2
S024,13.0,27.0,0.44,0.36,15.5,2
S025,10.5,19.0,0.30,0.24,19.0,1
`},{id:"alzheimer",name:"Alzheimer — CSF Biomarkers",disease:"Alzheimer's",cValue:1.8,rationale:"Alzheimer's neurodegeneration produces SUBTLE early biomarker shifts. A tight c=1.8 σ bound catches pre-clinical amyloid/tau changes 10-15 years before symptoms — where standard c=2.0 would miss them. The bound represents the maximum tolerable deviation before a patient crosses from 'cognitively normal' to 'MCI' on the Alzheimer's continuum.",csv:`patient_id,age,abeta42,ptau,ttau,hippocampus_vol_mm3,cognition_score,dx
P001,68,820,55,280,3450,28,normal
P002,72,780,62,310,3320,27,normal
P003,75,650,85,410,2980,24,MCI
P004,70,810,58,290,3400,28,normal
P005,78,580,95,450,2750,21,MCI
P006,73,750,65,320,3280,27,normal
P007,80,520,110,520,2580,18,AD
P008,71,800,60,300,3380,28,normal
P009,76,620,88,420,2900,23,MCI
P010,69,830,54,275,3470,29,normal
P011,77,600,92,440,2800,22,MCI
P012,74,720,68,325,3210,26,normal
P013,82,480,118,560,2480,16,AD
P014,72,790,63,305,3340,27,normal
P015,79,560,98,460,2700,20,MCI
P016,70,820,57,288,3420,28,normal
P017,75,640,82,400,3020,24,MCI
P018,73,770,66,318,3300,27,normal
P019,81,500,115,540,2520,17,AD
P020,68,840,52,270,3490,29,normal
P021,76,610,90,425,2880,23,MCI
P022,74,740,70,330,3260,26,normal
P023,78,570,96,455,2730,21,MCI
P024,71,800,61,295,3370,28,normal
P025,80,510,112,530,2550,17,AD
`},{id:"parkinson",name:"Parkinson — Motor Symptom Severity",disease:"Parkinson's",cValue:2,rationale:"Parkinson's motor symptoms (tremor, rigidity, bradykinesia) have a clear clinical threshold (UPDRS scale). The default c=2.0 σ bound matches the typical clinical 'on/off' fluctuation boundary — patients beyond this are flagged for medication review. The Lipschitz L captures the day-to-day symptom variability that dopaminergic therapy is meant to stabilize.",csv:`visit_id,age,disease_duration_yr,tremor_score,rigidity_score,bradykinesia_score,updrs_total,ledd_mg
V001,65,3.5,8,4,7,28,650
V002,68,5.0,12,6,10,38,800
V003,70,7.2,15,8,14,52,1100
V004,63,2.0,5,3,5,18,500
V005,72,8.5,18,9,16,60,1250
V006,67,4.5,10,5,8,32,720
V007,69,6.0,13,7,11,42,900
V008,66,3.0,7,4,6,22,580
V009,71,7.8,16,8,15,55,1150
V010,64,2.5,6,3,5,20,520
V011,73,9.0,20,10,18,65,1300
V012,68,5.5,11,5,9,35,750
V013,70,6.8,14,7,12,45,950
V014,65,3.2,7,4,6,24,600
V015,72,8.0,17,9,16,58,1200
V016,67,4.0,9,4,7,28,680
V017,69,5.8,12,6,10,38,820
V018,66,2.8,6,3,5,21,540
V019,71,7.5,16,8,14,53,1080
V020,68,4.8,10,5,8,30,700
V021,70,6.5,14,7,12,44,920
V022,65,3.5,8,4,6,25,620
V023,73,8.8,19,10,17,62,1280
V024,67,4.2,9,4,7,29,690
V025,69,5.2,11,5,9,36,780
`}];function e$(e,s){try{let{rows:t,columns:a}=function(e){let s=e.replace(/\r\n/g,"\n").split("\n").filter(e=>e.trim().length>0);if(s.length<2)return{rows:[],columns:[]};let t=s[0].split(",").map(e=>e.trim().replace(/^["']|["']$/g,"")),a=[];for(let e=1;e<s.length;e++){let r=s[e].split(",").map(e=>e.trim().replace(/^["']|["']$/g,"")),i={};t.forEach((e,s)=>{let t=r[s];void 0===t||""===t?i[e]=null:isNaN(Number(t))||""===t?i[e]=t:i[e]=Number(t)}),a.push(i)}return{rows:a,columns:t}}(e);if(0===t.length)return null;let r=a.map(e=>{let s,{dtype:a,sample:r}={dtype:(s=t.slice(0,50).map(s=>s[e])).filter(e=>"number"==typeof e).length/Math.max(s.length,1)>.7?"numeric":"categorical",sample:s.slice(0,5)};return{name:e,dtype:a,sample:r}});return{rows:t.slice(0,5),columns:r,rowCount:t.length,colCount:a.length,sourceLabel:s}}catch(e){return null}}let eE="0.26.2",eU=null;function eH(e){return eU||(eU=(async()=>{e?.("Loading Pyodide runtime..."),window.loadPyodide||await new Promise((e,s)=>{let t=document.createElement("script");t.src=`https://cdn.jsdelivr.net/pyodide/v${eE}/full/pyodide.js`,t.onload=()=>e(),t.onerror=()=>s(Error("Failed to load Pyodide script")),document.head.appendChild(t)});let s=await window.loadPyodide({indexURL:`https://cdn.jsdelivr.net/pyodide/v${eE}/full/`});return e?.("Loading pandas + matplotlib + scipy (one-time, ~10MB)..."),await s.loadPackage(["pandas","matplotlib","scipy"]),e?.("Pyodide ready."),s})())}let eG=`
import json, io, base64
import pandas as pd
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

def run_analysis(csv_text, request_types, granularity, lens, c_value):
    df = pd.read_csv(io.StringIO(csv_text))
    numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
    categorical_cols = [c for c in df.columns if c not in numeric_cols]

    # Granularity controls
    if granularity == "overview":
        n_histograms = min(2, len(numeric_cols))
        n_scatters = 1 if len(numeric_cols) >= 2 else 0
        do_correlation = len(numeric_cols) >= 3
        do_boxplots = False
        narrative_depth = "brief"
    elif granularity == "standard":
        n_histograms = min(4, len(numeric_cols))
        n_scatters = min(2, max(0, len(numeric_cols) - 1))
        do_correlation = True
        do_boxplots = len(categorical_cols) > 0 and len(numeric_cols) > 0
        narrative_depth = "standard"
    else:  # granular
        n_histograms = len(numeric_cols)
        n_scatters = min(6, max(0, len(numeric_cols) * (len(numeric_cols) - 1) // 2))
        do_correlation = True
        do_boxplots = len(categorical_cols) > 0 and len(numeric_cols) > 0
        narrative_depth = "detailed"

    results = {"statistics": [], "charts": [], "summary": "", "report": "", "osiris_lens": None, "warnings": []}

    # === STATISTICS ===
    if "statistics" in request_types:
        for col in df.columns:
            s = df[col]
            if col in numeric_cols:
                results["statistics"].append({
                    "column": col,
                    "count": int(s.count()),
                    "mean": None if s.mean() != s.mean() else float(s.mean()),
                    "std": None if s.std() != s.std() else float(s.std()),
                    "min": None if s.min() != s.min() else float(s.min()),
                    "q25": None if s.quantile(0.25) != s.quantile(0.25) else float(s.quantile(0.25)),
                    "median": None if s.median() != s.median() else float(s.median()),
                    "q75": None if s.quantile(0.75) != s.quantile(0.75) else float(s.quantile(0.75)),
                    "max": None if s.max() != s.max() else float(s.max()),
                    "missing": int(s.isna().sum()),
                })
            else:
                vc = s.value_counts().head(5).to_dict()
                results["statistics"].append({
                    "column": col,
                    "count": int(s.count()),
                    "mean": None,
                    "std": None,
                    "min": None,
                    "q25": None,
                    "median": None,
                    "q75": None,
                    "max": None,
                    "missing": int(s.isna().sum()),
                    "top_values": {str(k): int(v) for k, v in vc.items()},
                })

    # === CHARTS ===
    if "graphs" in request_types:
        plt.style.use("default")
        # Histograms
        for col in numeric_cols[:n_histograms]:
            fig, ax = plt.subplots(figsize=(6, 4), constrained_layout=True)
            ax.hist(df[col].dropna(), bins=20, color="#6366f1", edgecolor="white", alpha=0.85)
            ax.set_title(f"Distribution of {col}", fontsize=11)
            ax.set_xlabel(col, fontsize=9)
            ax.set_ylabel("count", fontsize=9)
            ax.grid(alpha=0.2)
            buf = io.BytesIO()
            fig.savefig(buf, format="png", dpi=110)
            plt.close(fig)
            b64 = base64.b64encode(buf.getvalue()).decode()
            results["charts"].append({
                "id": f"hist_{col}",
                "title": f"Histogram — {col}",
                "kind": "histogram",
                "pngBase64": b64,
                "description": f"Distribution of {col} across {len(df)} rows",
            })

        # Scatter (pairs)
        if n_scatters > 0 and len(numeric_cols) >= 2:
            pairs_done = 0
            for i in range(len(numeric_cols)):
                for j in range(i + 1, len(numeric_cols)):
                    if pairs_done >= n_scatters:
                        break
                    x_col, y_col = numeric_cols[i], numeric_cols[j]
                    fig, ax = plt.subplots(figsize=(6, 4), constrained_layout=True)
                    ax.scatter(df[x_col], df[y_col], alpha=0.6, s=24, c="#10b981", edgecolors="white", linewidths=0.5)
                    ax.set_xlabel(x_col, fontsize=9)
                    ax.set_ylabel(y_col, fontsize=9)
                    ax.set_title(f"{y_col} vs {x_col}", fontsize=11)
                    ax.grid(alpha=0.2)
                    buf = io.BytesIO()
                    fig.savefig(buf, format="png", dpi=110)
                    plt.close(fig)
                    b64 = base64.b64encode(buf.getvalue()).decode()
                    results["charts"].append({
                        "id": f"scatter_{x_col}_{y_col}",
                        "title": f"Scatter — {y_col} vs {x_col}",
                        "kind": "scatter",
                        "pngBase64": b64,
                        "description": f"Joint relationship between {x_col} and {y_col}",
                    })
                    pairs_done += 1
                if pairs_done >= n_scatters:
                    break

        # Boxplots by category
        if do_boxplots:
            cat = categorical_cols[0]
            num = numeric_cols[0]
            fig, ax = plt.subplots(figsize=(7, 4), constrained_layout=True)
            groups = df.groupby(cat)[num]
            data = [g[1].dropna().values for g in groups]
            labels = [str(g[0]) for g in groups]
            ax.boxplot(data, labels=labels, patch_artist=True,
                       boxprops=dict(facecolor="#fbbf24", alpha=0.6),
                       medianprops=dict(color="#0f172a", linewidth=2))
            ax.set_title(f"{num} by {cat}", fontsize=11)
            ax.set_ylabel(num, fontsize=9)
            ax.grid(alpha=0.2)
            buf = io.BytesIO()
            fig.savefig(buf, format="png", dpi=110)
            plt.close(fig)
            b64 = base64.b64encode(buf.getvalue()).decode()
            results["charts"].append({
                "id": f"box_{num}_by_{cat}",
                "title": f"Boxplot — {num} by {cat}",
                "kind": "boxplot",
                "pngBase64": b64,
                "description": f"Distribution of {num} stratified by {cat}",
            })

        # Correlation heatmap
        if do_correlation and len(numeric_cols) >= 2:
            corr = df[numeric_cols].corr()
            fig, ax = plt.subplots(figsize=(6, 5), constrained_layout=True)
            im = ax.imshow(corr.values, cmap="RdBu_r", vmin=-1, vmax=1, aspect="auto")
            ax.set_xticks(range(len(numeric_cols)))
            ax.set_yticks(range(len(numeric_cols)))
            ax.set_xticklabels(numeric_cols, rotation=45, ha="right", fontsize=8)
            ax.set_yticklabels(numeric_cols, fontsize=8)
            for i in range(len(numeric_cols)):
                for j in range(len(numeric_cols)):
                    val = corr.values[i, j]
                    if val == val:
                        ax.text(j, i, f"{val:.2f}", ha="center", va="center",
                                color="white" if abs(val) > 0.5 else "black", fontsize=8)
            fig.colorbar(im, ax=ax, label="Pearson r")
            ax.set_title("Correlation matrix", fontsize=11)
            buf = io.BytesIO()
            fig.savefig(buf, format="png", dpi=110)
            plt.close(fig)
            b64 = base64.b64encode(buf.getvalue()).decode()
            results["charts"].append({
                "id": "corr_matrix",
                "title": "Correlation matrix",
                "kind": "correlation",
                "pngBase64": b64,
                "description": "Pairwise Pearson correlation across numeric columns",
            })

    # === OSIRIS LENS ===
    if lens == "osiris" and len(numeric_cols) > 0:
        c = float(c_value)
        L_per_column = []
        violations = []
        for col in numeric_cols:
            s = df[col].dropna()
            if len(s) < 3:
                continue
            mu = float(s.mean())
            sigma = float(s.std())
            if sigma == 0 or sigma != sigma:
                continue
            # Local Lipschitz L = max |s[i+1] - s[i]|
            arr = s.values
            L = float(np.max(np.abs(np.diff(arr)))) if len(arr) > 1 else 0.0
            Lc = L * c
            L_per_column.append({"column": col, "L": L, "Lc": Lc})
            # Bound violations: |x - mu| > c * sigma
            for idx, v in enumerate(arr):
                z = abs(v - mu) / sigma
                if z > c:
                    # restoration hint: which feature adjustment brings it within bound
                    target = mu + np.sign(v - mu) * c * sigma
                    hint = f"reduce |Δ| by {abs(v - target):.3f} (move toward {target:.3f})"
                    violations.append({
                        "row_index": int(s.index[idx]),
                        "column": col,
                        "z_score": float(z),
                        "value": float(v),
                        "restoration_hint": hint,
                    })
        certificate = {
            "c": c,
            "L_max": max([x["L"] for x in L_per_column], default=0.0),
            "Lc_max": max([x["Lc"] for x in L_per_column], default=0.0),
            "n_violations": len(violations),
            "certified": len(violations) == 0,
        }
        results["osiris_lens"] = {
            "c": c,
            "L_per_column": L_per_column,
            "bound_violations": violations,
            "certified": certificate["certified"],
            "certificate_json": json.dumps(certificate, indent=2),
        }

    # === SUMMARY (narrative) ===
    if "summary" in request_types:
        lines = []
        lines.append(f"Dataset overview: {len(df)} rows \xd7 {len(df.columns)} columns "
                     f"({len(numeric_cols)} numeric, {len(categorical_cols)} categorical).")
        if narrative_depth in ("standard", "detailed") and len(numeric_cols) > 0:
            most_variable = df[numeric_cols].std().idxmax()
            lines.append(f"Most variable numeric column: '{most_variable}' "
                         f"(σ={df[most_variable].std():.3f}).")
            least_variable = df[numeric_cols].std().idxmin()
            lines.append(f"Least variable: '{least_variable}' (σ={df[least_variable].std():.3f}).")
        if narrative_depth == "detailed" and len(numeric_cols) >= 2:
            corr = df[numeric_cols].corr()
            # find strongest pair
            strongest = None
            strongest_val = 0
            for i in range(len(numeric_cols)):
                for j in range(i + 1, len(numeric_cols)):
                    v = corr.values[i, j]
                    if v == v and abs(v) > abs(strongest_val):
                        strongest_val = v
                        strongest = (numeric_cols[i], numeric_cols[j])
            if strongest:
                lines.append(f"Strongest correlation: {strongest[0]} ↔ {strongest[1]} (r={strongest_val:.3f}).")
        if lens == "osiris" and results["osiris_lens"]:
            n_v = len(results["osiris_lens"]["bound_violations"])
            if n_v == 0:
                lines.append(f"OSIRIS lens: all rows certified within L\xb7c bound (c={results['osiris_lens']['c']}).")
            else:
                lines.append(f"OSIRIS lens: {n_v} bound violation(s) detected — flagged as candidate anomalies "
                             f"(disease / sensor-fault / data-entry-error analogs).")
        results["summary"] = "

".join(lines)

    # === REPORT (longer form) ===
    if "report" in request_types:
        r = []
        r.append("# OSIRIS Demo Creation Report")
        r.append("")
        r.append(f"**Rows**: {len(df)}  |  **Columns**: {len(df.columns)}")
        r.append(f"**Numeric**: {', '.join(numeric_cols) if numeric_cols else '—'}")
        r.append(f"**Categorical**: {', '.join(categorical_cols) if categorical_cols else '—'}")
        r.append(f"**Granularity**: {granularity}")
        r.append(f"**Lens**: {lens}")
        r.append("")
        r.append("## Per-column statistics")
        for s in results["statistics"]:
            if s.get("mean") is not None:
                r.append(f"- **{s['column']}**: μ={s['mean']:.3f}, σ={s['std']:.3f}, "
                         f"range=[{s['min']:.3f}, {s['max']:.3f}], missing={s['missing']}")
            else:
                tv = s.get("top_values", {})
                tv_str = ", ".join([f"{k}={v}" for k, v in list(tv.items())[:3]])
                r.append(f"- **{s['column']}**: categorical, missing={s['missing']}, top: {tv_str}")
        if results["osiris_lens"]:
            r.append("")
            r.append("## OSIRIS L\xb7c certification")
            r.append("~~~json")
            r.append(results["osiris_lens"]["certificate_json"])
            r.append("~~~")
            r.append(f"
Bound violations: {len(results['osiris_lens']['bound_violations'])}")
            for v in results["osiris_lens"]["bound_violations"][:10]:
                r.append(f"- row {v['row_index']}, col '{v['column']}': z={v['z_score']:.2f}, "
                         f"value={v['value']:.3f} — {v['restoration_hint']}")
        results["report"] = "
".join(r)

    # === IMAGES (stub: synthesize a single overview PNG) ===
    if "images" in request_types:
        if len(numeric_cols) >= 2:
            fig, axes = plt.subplots(2, 2, figsize=(8, 6), constrained_layout=True)
            df[numeric_cols[0]].dropna().hist(ax=axes[0, 0], bins=20, color="#6366f1", edgecolor="white")
            axes[0, 0].set_title(numeric_cols[0])
            if len(numeric_cols) > 1:
                df[numeric_cols[1]].dropna().hist(ax=axes[0, 1], bins=20, color="#10b981", edgecolor="white")
                axes[0, 1].set_title(numeric_cols[1])
            axes[1, 0].scatter(df[numeric_cols[0]], df[numeric_cols[1]] if len(numeric_cols) > 1 else df[numeric_cols[0]],
                               alpha=0.5, s=12, c="#f59e0b")
            axes[1, 0].set_xlabel(numeric_cols[0])
            axes[1, 0].set_ylabel(numeric_cols[1] if len(numeric_cols) > 1 else numeric_cols[0])
            axes[1, 0].set_title("joint scatter")
            if len(numeric_cols) >= 3:
                im = axes[1, 1].imshow(df[numeric_cols].corr().values, cmap="RdBu_r", vmin=-1, vmax=1)
                axes[1, 1].set_title("correlation")
                fig.colorbar(im, ax=axes[1, 1])
            else:
                axes[1, 1].axis("off")
            buf = io.BytesIO()
            fig.savefig(buf, format="png", dpi=120)
            plt.close(fig)
            b64 = base64.b64encode(buf.getvalue()).decode()
            results["charts"].append({
                "id": "overview_grid",
                "title": "Overview grid (synthesized image)",
                "kind": "bar",
                "pngBase64": b64,
                "description": "2\xd72 overview: histograms + scatter + correlation — single downloadable image",
            })

    return results

def main(csv_text, request_types_json, granularity, lens, c_value):
    import json
    request_types = json.loads(request_types_json)
    res = run_analysis(csv_text, request_types, granularity, lens, c_value)
    return json.dumps(res)
`;function eJ(){let[e,d]=t.useState(""),[q,A]=t.useState(null),[F,$]=t.useState(null),[E,U]=t.useState(!1),H=t.useRef(null),[G,J]=t.useState(["statistics","graphs","summary"]),[K,Y]=t.useState("standard"),[W,X]=t.useState("standard"),[Q,Z]=t.useState(2),[ee,es]=t.useState(!1),[et,ea]=t.useState(""),[er,ei]=t.useState(null),[en,el]=t.useState(null),[eo,ec]=t.useState("statistics"),ed=e=>{if($(null),!e.name.match(/\.(csv|tsv|json|txt)$/i))return void $("Please upload a CSV, TSV, JSON, or TXT file.");let s=new FileReader;s.onload=()=>{let t=String(s.result||"");d(t);let a=e$(t,e.name);a?A(a):($("Could not parse file. Make sure it is valid CSV/TSV/JSON."),A(null))},s.readAsText(e)},[em,eu]=t.useState(null),[ex,ep]=t.useState(!1),[eh,ef]=t.useState([]),[eg,ej]=t.useState(null),[ey,eN]=t.useState(!1),[e_,ew]=t.useState(""),eS=async()=>{if(0===eh.length)return;eN(!0),ej(null),ew("Initializing Pyodide...");let e=[];try{let s=await eH(ew);for(let t=0;t<eh.length;t++){let a=eh[t];ew(`Running ${t+1}/${eh.length}: ${a.name}...`);let r=new Date().toISOString(),i=performance.now();s.globals.set("csv_text",a.csv),s.globals.set("request_types_json",JSON.stringify(G)),s.globals.set("granularity",K),s.globals.set("lens",W),s.globals.set("c_value",Q);let n=s.runPython(`${eG}
main(csv_text, request_types_json, granularity, lens, c_value)`),l=JSON.parse(n),o=Math.round(performance.now()-i),c=(a.preview?.columns||[]).filter(e=>"numeric"===e.dtype).map(e=>e.name),d=(a.preview?.columns||[]).filter(e=>"categorical"===e.dtype).map(e=>e.name),m={dataset_signature:{rows:a.preview?.rowCount||0,columns:a.preview?.colCount||0,column_names:a.preview?.columns.map(e=>e.name)||[],numeric_columns:c,categorical_columns:d},request_types:G,granularity:K,lens:W,osiris_params:"osiris"===W?{c:Q,flag_threshold:Q}:void 0,requested_at:r},u={runId:`batch_${t}_${Date.now()}`,startedAt:r,durationMs:o,pyodideVersion:eE,lens:W,granularity:K,requestTypes:G,statistics:l.statistics||[],charts:l.charts||[],summary:l.summary||"",report:l.report||"",osirisLens:l.osiris_lens||void 0,blueprint:m,warnings:l.warnings||[]};e.push(u)}ej(e),ew(`Batch complete: ${e.length} datasets analyzed`)}catch(e){console.error(e),el(e?.message||"Batch failed")}finally{eN(!1)}},ek=async()=>{if(!eg)return;let e=new Blob([JSON.stringify({generated_at:new Date().toISOString(),lens:W,granularity:K,c_value:Q,total_datasets:eg.length,datasets:eg.map((e,s)=>({index:s,source:eh[s]?.name,run_id:e.runId,duration_ms:e.durationMs,summary:e.summary,report:e.report,statistics:e.statistics,osiris_lens:e.osirisLens,blueprint:e.blueprint}))},null,2)],{type:"application/json"}),s=URL.createObjectURL(e),t=document.createElement("a");t.href=s,t.download=`osiris-batch-report-${Date.now()}.json`,t.click(),URL.revokeObjectURL(s)},[eC,eP]=t.useState(!1),[eL,eR]=t.useState(null),[eI,ez]=t.useState(null),eO=t.useRef(null),eB=async e=>{eP(!0),ez(null),eL&&(URL.revokeObjectURL(eL),eR(null));try{let s=e.length>1024?e.slice(0,1023)+"…":e,t=await fetch("/api/tts-summary",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:s,voice:"tongtong",speed:1})});if(!t.ok){let e=await t.json().catch(()=>({}));throw Error(e.error||`TTS failed (${t.status})`)}let a=await t.blob(),r=URL.createObjectURL(a);eR(r),setTimeout(()=>eO.current?.play().catch(()=>{}),100)}catch(e){ez(e?.message||"TTS generation failed")}finally{eP(!1)}},eV=async()=>{if(!e.trim())return void el("Please add a dataset first.");if(0===G.length)return void el("Please select at least one request type.");ei(null),el(null),es(!0),ea("Initializing...");let s=new Date().toISOString(),t=performance.now();try{let a=await eH(ea);ea("Loading analysis script..."),a.globals.set("csv_text",e),a.globals.set("request_types_json",JSON.stringify(G)),a.globals.set("granularity",K),a.globals.set("lens",W),a.globals.set("c_value",Q),ea(`Running analysis (granularity=${K}, lens=${W}, c=${Q})...`);let r=a.runPython(`${eG}
main(csv_text, request_types_json, granularity, lens, c_value)`),i=JSON.parse(r),n=Math.round(performance.now()-t),l=(q?.columns||[]).filter(e=>"numeric"===e.dtype).map(e=>e.name),o=(q?.columns||[]).filter(e=>"categorical"===e.dtype).map(e=>e.name),c={dataset_signature:{rows:q?.rowCount||0,columns:q?.colCount||0,column_names:q?.columns.map(e=>e.name)||[],numeric_columns:l,categorical_columns:o},request_types:G,granularity:K,lens:W,osiris_params:"osiris"===W?{c:Q,flag_threshold:Q}:void 0,requested_at:s},d={runId:`run_${Date.now()}`,startedAt:s,durationMs:n,pyodideVersion:eE,lens:W,granularity:K,requestTypes:G,statistics:i.statistics||[],charts:i.charts||[],summary:i.summary||"",report:i.report||"",osirisLens:i.osiris_lens||void 0,blueprint:c,warnings:i.warnings||[]};ei(d),d.statistics?.length?ec("statistics"):d.charts?.length?ec("graphs"):d.summary?ec("summary"):d.report?ec("report"):d.osirisLens&&ec("osiris")}catch(e){console.error(e),el(e?.message||"Analysis failed.")}finally{es(!1),ea("")}},eU=(e,s)=>{let t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=s,r.click(),URL.revokeObjectURL(a)},eJ=(e,s,t="text/plain")=>{let a=new Blob([e],{type:t}),r=URL.createObjectURL(a),i=document.createElement("a");i.href=r,i.download=s,i.click(),URL.revokeObjectURL(r)};return(0,s.jsx)("div",{className:"min-h-screen bg-background pt-20 pb-24",children:(0,s.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 text-xs text-muted-foreground mb-3",children:[(0,s.jsxs)(a.default,{href:"/admin/reverse-engineer",className:"hover:text-foreground inline-flex items-center gap-1",children:[(0,s.jsx)(r.ArrowLeft,{className:"h-3 w-3"})," Reverse-Engineer (sibling)"]}),(0,s.jsx)("span",{className:"text-border",children:"/"}),(0,s.jsx)("span",{className:"text-foreground",children:"Demo Creation Studio"})]}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,s.jsx)("span",{className:"flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary",children:(0,s.jsx)(p.Sparkles,{className:"h-5 w-5"})}),(0,s.jsx)(V.Badge,{variant:"outline",className:"text-[10px] uppercase tracking-wider font-mono",children:"admin · data-science mirror"})]}),(0,s.jsx)("h1",{className:"font-display text-3xl sm:text-4xl font-bold tracking-tight",children:"Demo Creation Studio"}),(0,s.jsxs)("p",{className:"mt-2 text-sm text-muted-foreground max-w-2xl",children:["Bring a dataset — request statistics, graphs, summaries, reports, or synthesized images at the granularity you need. The data-science inverse of the"," ",(0,s.jsx)(a.default,{href:"/admin/reverse-engineer",className:"text-primary underline",children:"Reverse-Engineer"})," ","module. Optional ",(0,s.jsx)("span",{className:"text-primary font-medium",children:"OSIRIS lens"})," flags outliers as L·c bound violations (Theorem 7)."]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(B.Button,{asChild:!0,variant:"outline",size:"sm",children:(0,s.jsxs)(a.default,{href:"/login",children:[(0,s.jsx)(j,{className:"h-3.5 w-3.5"})," Login to save"]})}),(0,s.jsx)(B.Button,{asChild:!0,size:"sm",children:(0,s.jsxs)(a.default,{href:"/get-started",children:[(0,s.jsx)(y.UserPlus,{className:"h-3.5 w-3.5"})," Register"]})})]})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[(0,s.jsxs)("div",{className:"lg:col-span-5 space-y-4",children:[(0,s.jsxs)(O.Card,{className:"p-5",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-bold",children:"1"}),(0,s.jsx)("h2",{className:"font-display text-lg font-semibold",children:"Add your dataset"})]}),(0,s.jsx)(n.Database,{className:"h-4 w-4 text-muted-foreground"})]}),(0,s.jsxs)("div",{onDragOver:e=>{e.preventDefault(),U(!0)},onDragLeave:()=>U(!1),onDrop:e=>{e.preventDefault(),U(!1);let s=e.dataTransfer.files?.[0];s&&ed(s)},onClick:()=>H.current?.click(),className:(0,z.cn)("cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors",E?"border-primary bg-primary/5":"border-border hover:border-primary/50"),children:[(0,s.jsx)(l.Upload,{className:"h-6 w-6 mx-auto mb-2 text-muted-foreground"}),(0,s.jsx)("p",{className:"text-sm font-medium",children:"Drop CSV / TSV / JSON here"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground mt-1",children:"or click to browse"}),(0,s.jsx)("input",{ref:H,type:"file",accept:".csv,.tsv,.txt,.json",className:"hidden",onChange:e=>{let s=e.target.files?.[0];s&&ed(s)}})]}),F&&(0,s.jsxs)("div",{className:"mt-3 flex items-start gap-2 text-xs text-destructive",children:[(0,s.jsx)(f.AlertCircle,{className:"h-3.5 w-3.5 mt-0.5"}),(0,s.jsx)("span",{children:F})]}),(0,s.jsxs)("div",{className:"mt-5",children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2",children:"Or load a sample dataset"}),(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:eA.map(e=>(0,s.jsxs)("button",{onClick:()=>{var s;let t;return s=e.id,void(!(t=eA.find(e=>e.id===s))||(d(t.csv),A(e$(t.csv,`sample: ${t.name}`)),$(null)))},className:(0,z.cn)("text-left rounded-md border p-2.5 hover:border-primary/50 hover:bg-accent/40 transition-colors",q?.sourceLabel?.includes(e.name)?"border-primary bg-primary/5":"border-border"),children:[(0,s.jsx)("p",{className:"text-xs font-medium",children:e.name}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-0.5",children:e.description})]},e.id))})]}),(0,s.jsxs)("div",{className:"mt-5 pt-5 border-t border-border/60",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,s.jsx)(P.HeartPulse,{className:"h-3.5 w-3.5 text-rose-500"}),(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-rose-500 font-mono",children:"Disease presets — auto-enables OSIRIS lens with disease-specific c"})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:eF.map(e=>(0,s.jsxs)("button",{onClick:()=>{var s;let t;return s=e.id,void(!(t=eF.find(e=>e.id===s))||(d(t.csv),A(e$(t.csv,`disease preset: ${t.name}`)),$(null),X("osiris"),Z(t.cValue),eu(s)))},className:(0,z.cn)("text-left rounded-md border p-2.5 hover:border-rose-500/50 hover:bg-rose-500/5 transition-colors",em===e.id?"border-rose-500 bg-rose-500/5":"border-border"),children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[(0,s.jsx)("p",{className:"text-xs font-medium",children:e.name}),(0,s.jsxs)(V.Badge,{variant:"outline",className:"text-[9px] font-mono text-rose-500 border-rose-500/40",children:["c=",e.cValue.toFixed(1)]})]}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground line-clamp-3 leading-relaxed",children:e.rationale})]},e.id))}),em&&(0,s.jsxs)("div",{className:"mt-2 p-2 rounded-md bg-rose-500/5 border border-rose-500/30 text-[10px] text-muted-foreground",children:[(0,s.jsx)("strong",{className:"text-rose-500",children:eF.find(e=>e.id===em)?.disease})," — ","c=",eF.find(e=>e.id===em)?.cValue.toFixed(1),"σ bound active."," ",eF.find(e=>e.id===em)?.rationale.split(".")[0],"."]})]}),(0,s.jsxs)("div",{className:"mt-5",children:[(0,s.jsx)(M.Label,{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono",children:"Or paste CSV directly"}),(0,s.jsx)(T.Textarea,{className:"mt-1 font-mono text-[11px] h-24",placeholder:"col1,col2,col3 1,2,3 ...",value:e.slice(0,5e3),onChange:e=>(e=>{if(d(e),e.trim().length>0){let s=e$(e,"pasted CSV");A(s),$(s?null:"Could not parse pasted CSV.")}else A(null)})(e.target.value)}),e.length>5e3&&(0,s.jsxs)("p",{className:"text-[10px] text-muted-foreground mt-1",children:["Showing first 5KB of ",e.length.toLocaleString()," chars"]})]}),q&&(0,s.jsxs)("div",{className:"mt-5",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,s.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono",children:["Preview · ",q.sourceLabel]}),(0,s.jsxs)(V.Badge,{variant:"outline",className:"text-[10px] font-mono",children:[q.rowCount," rows × ",q.colCount," cols"]})]}),(0,s.jsx)("div",{className:"rounded-md border border-border overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{className:"bg-muted/40",children:(0,s.jsx)("tr",{children:q.columns.map(e=>(0,s.jsxs)("th",{className:"px-2 py-1.5 text-left font-mono text-[10px]",children:[e.name,(0,s.jsx)("span",{className:(0,z.cn)("ml-1 px-1 py-0.5 rounded text-[9px] font-medium","numeric"===e.dtype?"bg-primary/15 text-primary":"bg-muted text-muted-foreground"),children:"numeric"===e.dtype?"#":"A"})]},e.name))})}),(0,s.jsx)("tbody",{children:q.rows.map((e,t)=>(0,s.jsx)("tr",{className:"border-t border-border",children:q.columns.map(t=>(0,s.jsx)("td",{className:"px-2 py-1.5 font-mono text-[10px]",children:String(e[t.name]??"")},t.name))},t))})]})})]})]}),(0,s.jsxs)(O.Card,{className:"p-5",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-bold",children:"2"}),(0,s.jsx)("h2",{className:"font-display text-lg font-semibold",children:"Request what you need"})]}),(0,s.jsx)(N,{className:"h-4 w-4 text-muted-foreground"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(M.Label,{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono",children:"Request types (multi-select)"}),(0,s.jsx)("div",{className:"mt-2 grid grid-cols-2 gap-2",children:[{id:"statistics",label:"Statistics",icon:_,desc:"per-column stats"},{id:"graphs",label:"Graphs",icon:m,desc:"histograms, scatters, corr"},{id:"summary",label:"Summary",icon:w,desc:"narrative 1-2 paragraphs"},{id:"report",label:"Report",icon:c.FileText,desc:"Markdown report"},{id:"images",label:"Images",icon:u.Image,desc:"synthesized overview PNG"}].map(e=>{let t=G.includes(e.id),a=e.icon;return(0,s.jsxs)("button",{onClick:()=>{var s;return s=e.id,void J(e=>e.includes(s)?e.filter(e=>e!==s):[...e,s])},className:(0,z.cn)("text-left rounded-md border p-2.5 transition-colors",t?"border-primary bg-primary/5":"border-border hover:border-primary/50"),children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(a,{className:(0,z.cn)("h-3.5 w-3.5",t?"text-primary":"text-muted-foreground")}),(0,s.jsx)("span",{className:"text-xs font-medium",children:e.label}),t&&(0,s.jsx)(h.CheckCircle2,{className:"h-3 w-3 text-primary ml-auto"})]}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-0.5",children:e.desc})]},e.id)})})]}),(0,s.jsxs)("div",{className:"mt-5",children:[(0,s.jsx)(M.Label,{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono",children:"Granularity"}),(0,s.jsx)(ev,{value:K,onValueChange:e=>Y(e),className:"mt-2 grid grid-cols-3 gap-2",children:[{id:"overview",label:"Overview",desc:"2 charts · brief"},{id:"standard",label:"Standard",desc:"4 charts · full stats"},{id:"granular",label:"Granular",desc:"all cols · detailed"}].map(e=>(0,s.jsxs)("label",{htmlFor:`g-${e.id}`,className:(0,z.cn)("cursor-pointer rounded-md border p-2.5 transition-colors",K===e.id?"border-primary bg-primary/5":"border-border hover:border-primary/50"),children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(eb,{id:`g-${e.id}`,value:e.id,className:"h-3 w-3"}),(0,s.jsx)("span",{className:"text-xs font-medium",children:e.label})]}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1",children:e.desc})]},e.id))})]}),(0,s.jsxs)("div",{className:"mt-5",children:[(0,s.jsx)(M.Label,{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono",children:"Analysis lens"}),(0,s.jsxs)(ev,{value:W,onValueChange:e=>X(e),className:"mt-2 grid grid-cols-2 gap-2",children:[(0,s.jsxs)("label",{htmlFor:"lens-standard",className:(0,z.cn)("cursor-pointer rounded-md border p-2.5 transition-colors","standard"===W?"border-primary bg-primary/5":"border-border hover:border-primary/50"),children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(eb,{id:"lens-standard",value:"standard",className:"h-3 w-3"}),(0,s.jsx)("span",{className:"text-xs font-medium",children:"Standard"})]}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1",children:"mean / std / correlations only"})]}),(0,s.jsxs)("label",{htmlFor:"lens-osiris",className:(0,z.cn)("cursor-pointer rounded-md border p-2.5 transition-colors","osiris"===W?"border-primary bg-primary/5":"border-border hover:border-primary/50"),children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(eb,{id:"lens-osiris",value:"osiris",className:"h-3 w-3"}),(0,s.jsxs)("span",{className:"text-xs font-medium flex items-center gap-1",children:[(0,s.jsx)(S.ShieldCheck,{className:"h-3 w-3 text-primary"})," OSIRIS lens"]})]}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1",children:"flag outliers as L·c bound violations"})]})]})]}),"osiris"===W&&(0,s.jsxs)("div",{className:"mt-4 p-3 rounded-md bg-primary/5 border border-primary/30",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,s.jsxs)(M.Label,{className:"text-[10px] uppercase tracking-wider text-primary font-mono flex items-center gap-1",children:[(0,s.jsx)(S.ShieldCheck,{className:"h-3 w-3"})," Norm-clamp radius c"]}),(0,s.jsxs)(V.Badge,{variant:"outline",className:"font-mono text-xs",children:["c = ",Q.toFixed(2)]})]}),(0,s.jsx)("input",{type:"range",min:1,max:4,step:.25,value:Q,onChange:e=>Z(Number(e.target.value)),className:"w-full"}),(0,s.jsxs)("p",{className:"text-[10px] text-muted-foreground mt-1.5",children:["Rows with ",(0,s.jsx)("code",{className:"font-mono",children:"|z| > c"})," are flagged as bound violations (disease / anomaly analogs). c=2.0 ≈ Michaelis-Menten saturation default."]})]}),(0,s.jsxs)("div",{className:"mt-5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,s.jsx)(D.Checkbox,{id:"batch-toggle",checked:ex,onCheckedChange:e=>ep(!!e)}),(0,s.jsxs)("label",{htmlFor:"batch-toggle",className:"text-xs text-muted-foreground flex items-center gap-1 cursor-pointer",children:[(0,s.jsx)(R.Layers,{className:"h-3 w-3"})," Batch mode — queue multiple datasets, produce a combined report"]})]}),ex?(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)(B.Button,{onClick:()=>{if(!e.trim())return void $("Add a dataset first.");let s=q?.sourceLabel||`dataset_${eh.length+1}`;ef(t=>[...t,{id:`ds_${Date.now()}`,name:s,csv:e,preview:q}])},disabled:!e,variant:"outline",className:"w-full",size:"sm",children:[(0,s.jsx)(I,{className:"h-3.5 w-3.5 mr-1.5"}),"Add current dataset to queue (",eh.length," queued)"]}),eh.length>0&&(0,s.jsx)("div",{className:"rounded-md border border-border p-2 space-y-1 max-h-40 overflow-y-auto",children:eh.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center justify-between text-[10px] py-1",children:[(0,s.jsxs)("span",{className:"font-mono truncate flex-1",children:[(0,s.jsxs)("span",{className:"text-muted-foreground",children:["[",t+1,"]"]})," ",e.name,e.preview&&(0,s.jsxs)("span",{className:"text-muted-foreground",children:[" · ",e.preview.rowCount,"×",e.preview.colCount]})]}),(0,s.jsx)("button",{onClick:()=>{var s;return s=e.id,void ef(e=>e.filter(e=>e.id!==s))},className:"text-destructive hover:text-destructive/80 ml-2",children:(0,s.jsx)(C.Trash2,{className:"h-3 w-3"})})]},e.id))}),(0,s.jsx)(B.Button,{onClick:eS,disabled:ey||0===eh.length,className:"w-full",size:"lg",children:ey?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Loader2,{className:"h-4 w-4 mr-2 animate-spin"}),e_||"Running batch..."]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R.Layers,{className:"h-4 w-4 mr-2"}),"Run batch analysis · ",eh.length," dataset",1!==eh.length?"s":""]})})]}):(0,s.jsx)(B.Button,{onClick:eV,disabled:ee||!e||0===G.length,className:"w-full",size:"lg",children:ee?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Loader2,{className:"h-4 w-4 mr-2 animate-spin"}),et||"Running..."]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k,{className:"h-4 w-4 mr-2"}),"Run analysis · ",G.length," request",1!==G.length?"s":""]})}),en&&(0,s.jsxs)("div",{className:"mt-3 flex items-start gap-2 text-xs text-destructive",children:[(0,s.jsx)(f.AlertCircle,{className:"h-3.5 w-3.5 mt-0.5"}),(0,s.jsx)("span",{children:en})]}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-2 text-center",children:"Runs entirely in your browser via Pyodide (CPython on WebAssembly). No data leaves your device."})]})]})]}),(0,s.jsxs)("div",{className:"lg:col-span-7 space-y-4",children:[!er&&!ee&&(0,s.jsx)(O.Card,{className:"p-12 text-center",children:(0,s.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,s.jsx)("span",{className:"flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground",children:(0,s.jsx)(b.Eye,{className:"h-6 w-6"})}),(0,s.jsx)("p",{className:"text-sm font-medium",children:"Outputs will appear here"}),(0,s.jsxs)("p",{className:"text-xs text-muted-foreground max-w-md",children:["Add a dataset, choose your request types and granularity, then click"," ",(0,s.jsx)("span",{className:"text-foreground font-medium",children:"Run analysis"}),". All execution happens locally in your browser — no server round-trip."]})]})}),ee&&(0,s.jsxs)(O.Card,{className:"p-12 text-center",children:[(0,s.jsx)(x.Loader2,{className:"h-8 w-8 animate-spin mx-auto text-primary mb-4"}),(0,s.jsx)("p",{className:"text-sm font-medium",children:et||"Working..."}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground mt-1",children:"First run downloads Pyodide + pandas + matplotlib (~10MB). Subsequent runs are instant."})]}),eg&&(0,s.jsxs)(O.Card,{className:"p-4 border-primary/40 bg-primary/5",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(R.Layers,{className:"h-5 w-5 text-primary"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"text-sm font-medium",children:["Batch complete — ",eg.length," datasets analyzed"]}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground font-mono",children:["lens=",W," · granularity=",K," · c=",Q.toFixed(2)]})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)(B.Button,{size:"sm",variant:"outline",onClick:ek,children:[(0,s.jsx)(g.Download,{className:"h-3.5 w-3.5 mr-1"})," Download combined report (.json)"]}),(0,s.jsx)(B.Button,{size:"sm",variant:"ghost",onClick:()=>ej(null),children:(0,s.jsx)(v.RefreshCw,{className:"h-3.5 w-3.5"})})]})]}),(0,s.jsx)("div",{className:"space-y-2 max-h-[60vh] overflow-y-auto",children:eg.map((e,t)=>(0,s.jsxs)("div",{className:"rounded-md border border-border/60 bg-card/60 p-3",children:[(0,s.jsxs)("div",{className:"flex items-baseline justify-between gap-2 mb-1",children:[(0,s.jsxs)("p",{className:"text-xs font-medium truncate",children:[(0,s.jsxs)("span",{className:"text-muted-foreground font-mono",children:["[",t+1,"]"]})," ",eh[t]?.name||`dataset ${t+1}`]}),(0,s.jsxs)(V.Badge,{variant:"outline",className:"text-[9px] font-mono shrink-0",children:[e.durationMs,"ms · ",e.blueprint.dataset_signature.rows,"×",e.blueprint.dataset_signature.columns]})]}),e.summary&&(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground line-clamp-2 leading-relaxed",children:e.summary.split("\n\n")[0]}),e.osirisLens&&(0,s.jsxs)("p",{className:(0,z.cn)("text-[10px] mt-1 font-mono",e.osirisLens.certified?"text-emerald-500":"text-amber-500"),children:["OSIRIS lens: ",e.osirisLens.certified?"CERTIFIED":`${e.osirisLens.bound_violations.length} bound violation(s)`]})]},e.runId))})]}),er&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(O.Card,{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(h.CheckCircle2,{className:"h-5 w-5 text-primary"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm font-medium",children:"Analysis complete"}),(0,s.jsxs)("p",{className:"text-[11px] text-muted-foreground font-mono",children:[er.durationMs,"ms · Pyodide v",er.pyodideVersion," · ",er.lens," lens · ",er.granularity]})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)(B.Button,{size:"sm",variant:"outline",onClick:()=>eU(er.blueprint,`osiris-request-${er.runId}.json`),children:[(0,s.jsx)(o.FileJson,{className:"h-3.5 w-3.5 mr-1"})," Blueprint"]}),(0,s.jsxs)(B.Button,{size:"sm",variant:"outline",onClick:()=>eU(er,`osiris-result-${er.runId}.json`),children:[(0,s.jsx)(g.Download,{className:"h-3.5 w-3.5 mr-1"})," Full JSON"]}),(0,s.jsx)(B.Button,{size:"sm",variant:"ghost",onClick:()=>ei(null),children:(0,s.jsx)(v.RefreshCw,{className:"h-3.5 w-3.5"})})]})]}),er.warnings.length>0&&(0,s.jsxs)("div",{className:"mt-3 flex items-start gap-2 text-xs text-amber-600 dark:text-amber-400",children:[(0,s.jsx)(f.AlertCircle,{className:"h-3.5 w-3.5 mt-0.5"}),(0,s.jsx)("span",{children:er.warnings.join("; ")})]})]}),(0,s.jsx)(O.Card,{className:"p-4",children:(0,s.jsxs)(eT,{value:eo,onValueChange:ec,children:[(0,s.jsxs)(eM,{className:"w-full justify-start flex-wrap h-auto",children:[er.statistics?.length>0&&(0,s.jsxs)(eD,{value:"statistics",className:"text-xs",children:[(0,s.jsx)(_,{className:"h-3 w-3 mr-1"})," Statistics (",er.statistics.length,")"]}),er.charts?.length>0&&(0,s.jsxs)(eD,{value:"graphs",className:"text-xs",children:[(0,s.jsx)(m,{className:"h-3 w-3 mr-1"})," Graphs (",er.charts.length,")"]}),er.summary&&(0,s.jsxs)(eD,{value:"summary",className:"text-xs",children:[(0,s.jsx)(w,{className:"h-3 w-3 mr-1"})," Summary"]}),er.report&&(0,s.jsxs)(eD,{value:"report",className:"text-xs",children:[(0,s.jsx)(c.FileText,{className:"h-3 w-3 mr-1"})," Report"]}),er.osirisLens&&(0,s.jsxs)(eD,{value:"osiris",className:"text-xs",children:[(0,s.jsx)(S.ShieldCheck,{className:"h-3 w-3 mr-1"})," OSIRIS lens"]}),(0,s.jsxs)(eD,{value:"blueprint",className:"text-xs",children:[(0,s.jsx)(o.FileJson,{className:"h-3 w-3 mr-1"})," Blueprint"]})]}),er.statistics?.length>0&&(0,s.jsx)(eq,{value:"statistics",className:"mt-4",children:(0,s.jsx)("div",{className:"rounded-md border border-border overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{className:"bg-muted/40",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-2 py-1.5 text-left font-mono text-[10px]",children:"column"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"count"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"mean"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"std"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"min"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"median"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"max"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"missing"})]})}),(0,s.jsx)("tbody",{children:er.statistics.map(e=>(0,s.jsxs)("tr",{className:"border-t border-border",children:[(0,s.jsx)("td",{className:"px-2 py-1.5 font-mono text-[10px]",children:e.column}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:e.count}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:null!=e.mean?e.mean.toFixed(3):"—"}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:null!=e.std?e.std.toFixed(3):"—"}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:null!=e.min?e.min.toFixed(3):"—"}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:null!=e.median?e.median.toFixed(3):"—"}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:null!=e.max?e.max.toFixed(3):"—"}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:e.missing})]},e.column))})]})})}),er.charts?.length>0&&(0,s.jsx)(eq,{value:"graphs",className:"mt-4",children:(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:er.charts.map(e=>(0,s.jsxs)("div",{className:"rounded-md border border-border p-3",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,s.jsx)("p",{className:"text-xs font-medium",children:e.title}),(0,s.jsx)(B.Button,{size:"sm",variant:"ghost",className:"h-6 px-2",onClick:()=>{var s,t;let a;return s=e.pngBase64,t=`${e.id}.png`,void((a=document.createElement("a")).href=`data:image/png;base64,${s}`,a.download=t,a.click())},children:(0,s.jsx)(g.Download,{className:"h-3 w-3"})})]}),(0,s.jsx)("img",{src:`data:image/png;base64,${e.pngBase64}`,alt:e.title,className:"w-full rounded border border-border/50"}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1.5",children:e.description})]},e.id))})}),er.summary&&(0,s.jsxs)(eq,{value:"summary",className:"mt-4",children:[(0,s.jsx)("div",{className:"prose prose-sm dark:prose-invert max-w-none",children:er.summary.split("\n\n").map((e,t)=>(0,s.jsx)("p",{className:"text-sm leading-relaxed mb-3",children:e},t))}),(0,s.jsxs)("div",{className:"mt-4 p-3 rounded-md border border-primary/30 bg-primary/5",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(L.Volume2,{className:"h-3.5 w-3.5 text-primary"}),(0,s.jsx)("p",{className:"text-xs font-medium",children:"Listen to summary (TTS)"})]}),(0,s.jsx)(B.Button,{size:"sm",variant:"outline",onClick:()=>eB(er.summary),disabled:eC,className:"h-7 px-2 text-xs",children:eC?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Loader2,{className:"h-3 w-3 mr-1 animate-spin"})," Generating…"]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(L.Volume2,{className:"h-3 w-3 mr-1"})," Generate audio"]})})]}),eI&&(0,s.jsxs)("p",{className:"text-[10px] text-destructive flex items-center gap-1",children:[(0,s.jsx)(f.AlertCircle,{className:"h-3 w-3"})," ",eI]}),eL&&(0,s.jsxs)("div",{className:"flex items-center gap-2 mt-2",children:[(0,s.jsx)("audio",{ref:eO,src:eL,controls:!0,className:"h-8 flex-1",style:{width:"100%"}}),(0,s.jsxs)("a",{href:eL,download:`summary-${er.runId}.wav`,className:"text-xs text-primary hover:underline flex items-center gap-1",children:[(0,s.jsx)(g.Download,{className:"h-3 w-3"})," .wav"]})]}),(0,s.jsx)("p",{className:"text-[10px] text-muted-foreground mt-1.5",children:"~30-90 second voice readout via z-ai-web-dev-sdk TTS. Truncates to first 1024 chars if longer."})]}),(0,s.jsxs)(B.Button,{size:"sm",variant:"outline",className:"mt-3",onClick:()=>eJ(er.summary,`summary-${er.runId}.md`,"text/markdown"),children:[(0,s.jsx)(g.Download,{className:"h-3.5 w-3.5 mr-1"})," Download as Markdown"]})]}),er.report&&(0,s.jsxs)(eq,{value:"report",className:"mt-4",children:[(0,s.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap bg-muted/40 p-4 rounded-md max-h-[60vh] overflow-y-auto",children:er.report}),(0,s.jsxs)(B.Button,{size:"sm",variant:"outline",className:"mt-3",onClick:()=>eJ(er.report,`report-${er.runId}.md`,"text/markdown"),children:[(0,s.jsx)(g.Download,{className:"h-3.5 w-3.5 mr-1"})," Download report.md"]})]}),er.osirisLens&&(0,s.jsxs)(eq,{value:"osiris",className:"mt-4 space-y-4",children:[(0,s.jsxs)("div",{className:(0,z.cn)("rounded-md border p-3",er.osirisLens.certified?"border-primary bg-primary/5":"border-amber-500/40 bg-amber-500/5"),children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[er.osirisLens.certified?(0,s.jsx)(S.ShieldCheck,{className:"h-4 w-4 text-primary"}):(0,s.jsx)(f.AlertCircle,{className:"h-4 w-4 text-amber-500"}),(0,s.jsx)("p",{className:"text-sm font-medium",children:er.osirisLens.certified?`CERTIFIED — all rows within L\xb7c bound (c=${er.osirisLens.c})`:`${er.osirisLens.bound_violations.length} bound violation(s) detected`})]}),(0,s.jsx)("pre",{className:"text-[10px] font-mono mt-2 whitespace-pre-wrap",children:er.osirisLens.certificate_json})]}),er.osirisLens.L_per_column.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2",children:"Per-column Lipschitz L and L·c bound"}),(0,s.jsx)("div",{className:"rounded-md border border-border overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{className:"bg-muted/40",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-2 py-1.5 text-left font-mono text-[10px]",children:"column"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"L (max |Δ|)"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"L·c"})]})}),(0,s.jsx)("tbody",{children:er.osirisLens.L_per_column.map(e=>(0,s.jsxs)("tr",{className:"border-t border-border",children:[(0,s.jsx)("td",{className:"px-2 py-1.5 font-mono text-[10px]",children:e.column}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:e.L.toFixed(3)}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:e.Lc.toFixed(3)})]},e.column))})]})})]}),er.osirisLens.bound_violations.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono mb-2",children:"Bound violations — candidate anomalies"}),(0,s.jsx)("div",{className:"rounded-md border border-amber-500/30 overflow-x-auto max-h-72 overflow-y-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{className:"bg-amber-500/10",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-2 py-1.5 text-left font-mono text-[10px]",children:"row"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-left font-mono text-[10px]",children:"column"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"value"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:"z-score"}),(0,s.jsx)("th",{className:"px-2 py-1.5 text-left font-mono text-[10px]",children:"restoration hint"})]})}),(0,s.jsx)("tbody",{children:er.osirisLens.bound_violations.map((e,t)=>(0,s.jsxs)("tr",{className:"border-t border-amber-500/20",children:[(0,s.jsx)("td",{className:"px-2 py-1.5 font-mono text-[10px]",children:e.row_index}),(0,s.jsx)("td",{className:"px-2 py-1.5 font-mono text-[10px]",children:e.column}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px]",children:e.value.toFixed(3)}),(0,s.jsx)("td",{className:"px-2 py-1.5 text-right font-mono text-[10px] text-amber-600 dark:text-amber-400",children:e.z_score.toFixed(2)}),(0,s.jsx)("td",{className:"px-2 py-1.5 font-mono text-[10px] text-muted-foreground",children:e.restoration_hint})]},t))})]})})]})]}),(0,s.jsxs)(eq,{value:"blueprint",className:"mt-4",children:[(0,s.jsx)("p",{className:"text-xs text-muted-foreground mb-2",children:"The request blueprint is a structured spec of what was asked. Download and submit to the OSIRIS team for a server-side re-run at scale."}),(0,s.jsx)("pre",{className:"text-[11px] font-mono whitespace-pre-wrap bg-muted/40 p-4 rounded-md max-h-[60vh] overflow-y-auto",children:JSON.stringify(er.blueprint,null,2)}),(0,s.jsxs)(B.Button,{size:"sm",variant:"outline",className:"mt-3",onClick:()=>eU(er.blueprint,`osiris-request-${er.runId}.json`),children:[(0,s.jsx)(g.Download,{className:"h-3.5 w-3.5 mr-1"})," Download blueprint.json"]})]})]})})]}),(0,s.jsx)(O.Card,{className:"p-5 bg-gradient-to-br from-primary/5 to-transparent border-primary/30",children:(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-1",children:[(0,s.jsx)(j,{className:"h-4 w-4 text-primary"}),(0,s.jsx)("p",{className:"text-sm font-medium",children:"Save your datasets & request history"})]}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground max-w-md",children:"Login or register a free OSIRIS account to persist datasets, replay past requests, and queue batch jobs. Clients get a private dashboard; the OSIRIS team sees your request blueprints for follow-up."})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 shrink-0",children:[(0,s.jsx)(B.Button,{asChild:!0,variant:"outline",size:"sm",children:(0,s.jsxs)(a.default,{href:"/login",children:[(0,s.jsx)(j,{className:"h-3.5 w-3.5"})," Login"]})}),(0,s.jsx)(B.Button,{asChild:!0,size:"sm",children:(0,s.jsxs)(a.default,{href:"/get-started",children:[(0,s.jsx)(y.UserPlus,{className:"h-3.5 w-3.5"})," Register"]})})]})]})}),(0,s.jsx)(O.Card,{className:"p-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono",children:"Sibling module"}),(0,s.jsx)("p",{className:"text-sm font-medium mt-0.5",children:"Going the other direction?"}),(0,s.jsx)("p",{className:"text-xs text-muted-foreground mt-0.5",children:"If you have an infographic / paper figure / screenshot and want a structured dataset extracted from it, use the Reverse-Engineer module."})]}),(0,s.jsx)(B.Button,{asChild:!0,variant:"outline",size:"sm",children:(0,s.jsxs)(a.default,{href:"/admin/reverse-engineer",children:["Reverse-Engineer ",(0,s.jsx)(i.ArrowRight,{className:"h-3.5 w-3.5 ml-1"})]})})]})})]})]})]})})}e.s(["DemoCreationContent",()=>eJ],80292)}]);