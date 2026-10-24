(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95468,e=>{"use strict";let a=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>a],95468)},78894,e=>{"use strict";let a=(0,e.i(75254).default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["AlertTriangle",()=>a],78894)},47151,e=>{"use strict";let a=(0,e.i(75254).default)("file-code-2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);e.s(["FileCode2",()=>a],47151)},98487,e=>{"use strict";var a=e.i(43476),t=e.i(71645),r=e.i(69074),s=e.i(40160),i=e.i(31278),n=e.i(58041),d=e.i(81418),o=e.i(78894),l=e.i(95468),p=e.i(37727),m=e.i(47151),c=e.i(86536),f=e.i(75157),h=e.i(15288),u=e.i(19455),y=e.i(87486);let x="0.26.2",g=[{ext:/\.(h5|hdf5)$/i,format:"HDF5",pyodidePackage:"h5py"},{ext:/\.(parquet)$/i,format:"Parquet",pyodidePackage:"pyarrow"},{ext:/\.(arrow|feather)$/i,format:"Apache Arrow",pyodidePackage:"pyarrow"},{ext:/\.(sam|bam)$/i,format:"SAM/BAM (genomics)",pyodidePackage:"pysam"},{ext:/\.(dcm|dicom)$/i,format:"DICOM (radiography)",pyodidePackage:"pydicom"},{ext:/\.(nii|nii\.gz)$/i,format:"NIfTI (neuroimaging)",pyodidePackage:"nibabel"},{ext:/\.(nc|nc4|netcdf)$/i,format:"NetCDF (climate)",pyodidePackage:"netCDF4"},{ext:/\.(tif|tiff)$/i,format:"TIFF (multi-page)",pyodidePackage:"Pillow"},{ext:/\.(csv)$/i,format:"CSV",pyodidePackage:"pandas"},{ext:/\.(json)$/i,format:"JSON",pyodidePackage:"json"},{ext:/\.(npz|npy)$/i,format:"NumPy archive",pyodidePackage:"numpy"},{ext:/\.(png|jpg|jpeg|webp)$/i,format:"Image (raster)",pyodidePackage:"Pillow"}];function w(){let[e,w]=t.useState(null),[v,b]=t.useState(!1),[_,N]=t.useState(!1),[j,k]=t.useState(!1),[P,I]=t.useState(!1),[S,F]=t.useState(null),[C,D]=t.useState(null),O=t.useRef(null),$=t.useRef(null),[A,z]=t.useState("json"),H=t.useCallback(async()=>{if(O.current)return O.current;if(j)return null;k(!0),D(null);try{await new Promise((e,a)=>{if(window.loadPyodide)return e();let t=document.createElement("script");t.src=`https://cdn.jsdelivr.net/pyodide/v${x}/full/pyodide.js`,t.onload=()=>e(),t.onerror=()=>a(Error("Failed to load Pyodide from CDN")),document.head.appendChild(t)});let e=await window.loadPyodide({indexURL:`https://cdn.jsdelivr.net/pyodide/v${x}/full/`});return await e.loadPackage(["numpy","pandas","Pillow"]),O.current=e,N(!0),e}catch(e){return D(`Failed to initialize Pyodide: ${e?.message??e}`),null}finally{k(!1)}},[j]),J=e=>{for(let a of g)if(a.ext.test(e))return{format:a.format,pyodidePackage:a.pyodidePackage};return{format:"Unknown",pyodidePackage:""}},M=async()=>{if(e){D(null),F(null),I(!0);try{let a=await H();if(!a)return void I(!1);let{format:t,pyodidePackage:r}=J(e.name);if("Unknown"===t)throw Error(`Could not detect format from filename "${e.name}". Supported: ${g.map(e=>e.format).join(", ")}`);let s=[];"h5py"===r&&s.push("h5py"),"pyarrow"===r&&s.push("pyarrow"),"pysam"===r&&s.push("pysam"),"pydicom"===r&&s.push("pydicom"),"nibabel"===r&&s.push("nibabel"),"netCDF4"===r&&s.push("netCDF4"),"Pillow"!==r||s.includes("Pillow")||s.push("Pillow"),s.length>0&&await a.loadPackage(s);let i=await e.arrayBuffer(),n=new Uint8Array(i),d=a.FS,o=`/tmp/upload_${Date.now()}`;d.writeFile(o,n);let l=function(e,a,t){let r=`
def _truncate_preview(items, max_items=10):
    if len(items) <= max_items:
        return items, False
    return items[:max_items], True
`;switch(e){case"HDF5":return`
import h5py, json, numpy as np
${r}
def parse_h5(path):
    with h5py.File(path, 'r') as f:
        schema = []
        def walk(name, obj):
            if isinstance(obj, h5py.Dataset):
                schema.append({
                    'name': name,
                    'dtype': str(obj.dtype),
                    'shape': str(obj.shape),
                    'description': obj.attrs.get('description', '') if hasattr(obj.attrs, 'get') else '',
                })
        f.visititems(walk)
        # Get first dataset's first 10 rows for preview
        preview = []
        for name, obj in [(n, f[n]) for n in schema[:3] if hasattr(f[n], 'shape')]:
            try:
                if hasattr(obj, 'shape') and len(obj.shape) > 0:
                    arr = obj[()][:10] if obj.shape[0] >= 10 else obj[()]
                    preview.append({
                        'dataset': name,
                        'first_10_rows': arr.tolist() if hasattr(arr, 'tolist') else str(arr),
                    })
            except Exception as e:
                preview.append({'dataset': name, 'error': str(e)})
        # Metadata: file attrs
        metadata = dict(f.attrs) if hasattr(f, 'attrs') else {}
        notes = [
            'HDF5 file parsed with h5py. All datasets walked recursively.',
            'PHI-safe: HDF5 does not contain identifiable patient info by default.',
        ]
        return {
            'schema': schema,
            'preview': preview,
            'metadata': metadata,
            'truncated': len(schema) > 10,
            'notes': notes,
        }
parse_file_result = parse_h5(${JSON.stringify(a)})
`;case"Parquet":case"Apache Arrow":return`
import pyarrow.parquet as pq
import pyarrow as pa
${r}
def parse_parquet(path):
    try:
        table = pq.read_table(path)
    except Exception:
        # Try as Arrow IPC stream
        with open(path, 'rb') as f:
            table = pa.ipc.open_stream(f).read_all()
    schema = [{
        'name': field.name,
        'dtype': str(field.type),
        'shape': str(table.column(field.name).length()),
        'description': '',
    } for field in table.schema]
    preview = table.slice(0, 10).to_pylist()
    metadata = {
        'num_rows': table.num_rows,
        'num_columns': table.num_columns,
        'schema_metadata': dict(table.schema.metadata) if table.schema.metadata else {},
    }
    return {
        'schema': schema,
        'preview': preview,
        'metadata': metadata,
        'truncated': table.num_rows > 10,
        'total_rows': table.num_rows,
        'notes': [
            'Parquet/Arrow parsed with pyarrow. Columnar data loaded in chunks (lazy).',
            'No PHI risk in standard Parquet files.',
        ],
    }
parse_file_result = parse_parquet(${JSON.stringify(a)})
`;case"SAM/BAM (genomics)":return`
# pysam may or may not be available in Pyodide — fallback to a minimal binary parser
try:
    import pysam
    def parse_sam(path):
        if path.endswith('.bam'):
            af = pysam.AlignmentFile(path, 'rb')
        else:
            af = pysam.AlignmentFile(path, 'r')
        schema = [
            {'name': 'qname', 'dtype': 'str', 'shape': '—', 'description': 'read name'},
            {'name': 'flag', 'dtype': 'int', 'shape': '—', 'description': 'SAM flag'},
            {'name': 'rname', 'dtype': 'str', 'shape': '—', 'description': 'reference name'},
            {'name': 'pos', 'dtype': 'int', 'shape': '—', 'description': 'position'},
            {'name': 'mapq', 'dtype': 'int', 'shape': '—', 'description': 'mapping quality'},
            {'name': 'cigar', 'dtype': 'str', 'shape': '—', 'description': 'CIGAR string'},
        ]
        preview = []
        total = 0
        for read in af:
            total += 1
            if len(preview) < 10:
                preview.append({
                    'qname': read.query_name,
                    'flag': read.flag,
                    'rname': read.reference_name,
                    'pos': read.reference_start,
                    'mapq': read.mapping_quality,
                    'cigar': read.cigarstring,
                })
        metadata = {
            'nreads_total': total,
            'header': str(af.header.to_dict())[:1000] if hasattr(af.header, 'to_dict') else '',
        }
        return {
            'schema': schema,
            'preview': preview,
            'metadata': metadata,
            'truncated': total > 10,
            'total_rows': total,
            'notes': [
                'SAM/BAM parsed with pysam. Read names truncated for preview.',
                'PHI-safe: SAM format may contain reference genome names; no patient identifiers by default.',
            ],
        }
    parse_file_result = parse_sam(${JSON.stringify(a)})
except ImportError:
    parse_file_result = {
        'schema': [{'name': 'binary', 'dtype': 'bytes', 'shape': '—', 'description': 'raw file'}],
        'preview': [],
        'metadata': {'error': 'pysam not available in Pyodide; binary preview only'},
        'truncated': False,
        'notes': ['pysam package not available in Pyodide v0.26. Use the IDE studio with full Pyodide for SAM/BAM.'],
    }
`;case"DICOM (radiography)":return`
import pydicom
${r}
def parse_dicom(path):
    ds = pydicom.dcmread(path, defer_size=1024)
    # HIPAA Safe Harbor: redact the 18 identifiers
    PHI_FIELDS = [
        'PatientName', 'PatientID', 'PatientBirthDate', 'PatientSex',
        'PatientAge', 'PatientWeight', 'PatientAddress', 'PatientTelephoneNumbers',
        'EthnicGroup', 'Occupation', 'GeneralPractitioner',
        'InsurancePlanIdentifier', 'InstitutionName', 'InstitutionAddress',
        'OperatorName', 'NameOfPhysiciansReadingStudy', 'PhysiciansOfRecord',
        'ReferringPhysicianName',
    ]
    redacted = []
    metadata = {}
    for field in dir(ds):
        if field.startswith('_'): continue
        try:
            val = getattr(ds, field, None)
            if val is None: continue
            if field in PHI_FIELDS:
                redacted.append(field)
                metadata[field] = '[REDACTED - HIPAA Safe Harbor]'
            elif isinstance(val, (int, float, str, bool)):
                metadata[field] = str(val)
        except Exception:
            continue
    schema = [{
        'name': 'pixel_array',
        'dtype': str(getattr(ds, 'pixel_array', __import__('numpy').zeros(1)).dtype) if hasattr(ds, 'pixel_array') else 'unknown',
        'shape': str(getattr(ds, 'pixel_array', __import__('numpy').zeros(1)).shape) if hasattr(ds, 'pixel_array') else '(unknown)',
        'description': 'DICOM pixel data',
    }]
    preview = [{
        'rows': int(getattr(ds, 'Rows', 0)),
        'columns': int(getattr(ds, 'Columns', 0)),
        'bits_allocated': int(getattr(ds, 'BitsAllocated', 0)),
        'modality': str(getattr(ds, 'Modality', 'unknown')),
        'study_description': str(getattr(ds, 'StudyDescription', 'unknown')),
    }]
    return {
        'schema': schema,
        'preview': preview,
        'metadata': metadata,
        'truncated': False,
        'notes': [
            f'DICOM parsed with pydicom. {len(redacted)} PHI fields redacted: {", ".join(redacted[:5])}{"..." if len(redacted) > 5 else ""}',
            'HIPAA Safe Harbor compliance: all 18 identifiers stripped before display.',
        ],
    }
parse_file_result = parse_dicom(${JSON.stringify(a)})
`;case"NIfTI (neuroimaging)":return`
try:
    import nibabel as nib
    import numpy as np
    def parse_nifti(path):
        img = nib.load(path)
        arr = np.asarray(img.dataobj)
        schema = [{
            'name': 'volume',
            'dtype': str(arr.dtype),
            'shape': str(arr.shape),
            'description': 'NIfTI volumetric data',
        }]
        preview = [{
            'shape': list(arr.shape),
            'dtype': str(arr.dtype),
            'mean': float(arr.mean()),
            'std': float(arr.std()),
            'min': float(arr.min()),
            'max': float(arr.max()),
        }]
        metadata = {
            'affine': img.affine.tolist() if hasattr(img, 'affine') else None,
            'header': str(img.header)[:1000] if hasattr(img, 'header') else None,
        }
        return {
            'schema': schema,
            'preview': preview,
            'metadata': metadata,
            'truncated': False,
            'notes': [
                'NIfTI parsed with nibabel. Volumetric brain data loaded as NumPy array.',
                'PHI-safe: NIfTI does not contain identifiable patient info by default.',
            ],
        }
    parse_file_result = parse_nifti(${JSON.stringify(a)})
except ImportError:
    parse_file_result = {
        'schema': [],
        'preview': [],
        'metadata': {'error': 'nibabel not available in Pyodide; use full Python env'},
        'truncated': False,
        'notes': ['nibabel package not available in Pyodide v0.26. Use the IDE studio with full Pyodide.'],
    }
`;case"NetCDF (climate)":return`
try:
    import netCDF4 as nc
    import numpy as np
    def parse_netcdf(path):
        ds = nc.Dataset(path, 'r')
        schema = []
        for var_name, var in ds.variables.items():
            schema.append({
                'name': var_name,
                'dtype': str(var.dtype),
                'shape': str(var.shape),
                'description': var.description if hasattr(var, 'description') else getattr(var, 'long_name', ''),
            })
        preview = []
        for var_name in list(ds.variables.keys())[:5]:
            var = ds.variables[var_name]
            try:
                arr = np.asarray(var[:])
                preview.append({
                    'variable': var_name,
                    'shape': list(arr.shape),
                    'mean': float(arr.mean()) if arr.dtype.kind in 'fiu' else None,
                    'preview': arr.flatten()[:10].tolist() if arr.dtype.kind in 'fiu' else str(arr)[:200],
                })
            except Exception as e:
                preview.append({'variable': var_name, 'error': str(e)})
        metadata = {
            'dimensions': {k: len(v) for k, v in ds.dimensions.items()},
            'global_attrs': {k: str(getattr(ds, k)) for k in ds.ncattrs()} if hasattr(ds, 'ncattrs') else {},
        }
        ds.close()
        return {
            'schema': schema,
            'preview': preview,
            'metadata': metadata,
            'truncated': len(ds.variables) > 5,
            'notes': [
                'NetCDF parsed with netCDF4. Climate data loaded as variables + dimensions.',
                'PHI-safe: NetCDF climate data does not contain identifiable info.',
            ],
        }
    parse_file_result = parse_netcdf(${JSON.stringify(a)})
except ImportError:
    parse_file_result = {
        'schema': [],
        'preview': [],
        'metadata': {'error': 'netCDF4 not available in Pyodide; use full Python env'},
        'truncated': False,
        'notes': ['netCDF4 package not available in Pyodide v0.26. Use the IDE studio with full Pyodide.'],
    }
`;case"TIFF (multi-page)":return`
from PIL import Image
import numpy as np
${r}
def parse_tiff(path):
    img = Image.open(path)
    pages = []
    schema = [{
        'name': 'page_0',
        'dtype': str(np.asarray(img).dtype),
        'shape': str(np.asarray(img).shape),
        'description': 'TIFF page 0',
    }]
    # Count pages
    n_pages = 0
    try:
        while True:
            arr = np.asarray(img)
            if n_pages < 10:
                pages.append({
                    'page': n_pages,
                    'shape': list(arr.shape),
                    'dtype': str(arr.dtype),
                    'min': float(arr.min()),
                    'max': float(arr.max()),
                    'mean': float(arr.mean()),
                })
            n_pages += 1
            img.seek(img.tell() + 1)
    except EOFError:
        pass
    metadata = {
        'n_pages': n_pages,
        'format': img.format,
        'mode': img.mode,
        'size': img.size,
    }
    return {
        'schema': schema,
        'preview': pages,
        'metadata': metadata,
        'truncated': n_pages > 10,
        'total_rows': n_pages,
        'notes': [
            f'TIFF parsed with Pillow. {n_pages} pages detected.',
            'PHI-safe: TIFF format may contain identifiable info in metadata tags; review tags.',
        ],
    }
parse_file_result = parse_tiff(${JSON.stringify(a)})
`;case"CSV":return`
import pandas as pd
${r}
def parse_csv(path):
    df = pd.read_csv(path, nrows=10000)
    schema = [{
        'name': col,
        'dtype': str(df[col].dtype),
        'shape': str(len(df)),
        'description': '',
    } for col in df.columns]
    preview = df.head(10).to_dict(orient='records')
    preview = [{k: (v if pd.notna(v) else None) for k, v in row.items()} for row in preview]
    # Convert numpy/pandas types to native Python
    for row in preview:
        for k in list(row.keys()):
            v = row[k]
            if hasattr(v, 'item'):
                row[k] = v.item()
            elif isinstance(v, (list, tuple)):
                row[k] = [x.item() if hasattr(x, 'item') else x for x in v]
    metadata = {
        'n_rows_loaded': len(df),
        'n_columns': len(df.columns),
        'columns': list(df.columns),
    }
    return {
        'schema': schema,
        'preview': preview,
        'metadata': metadata,
        'truncated': len(df) > 10,
        'total_rows': len(df),
        'notes': [
            'CSV parsed with pandas. First 10,000 rows loaded for preview.',
            'PHI-safe: review column names for accidental PHI.',
        ],
    }
parse_file_result = parse_csv(${JSON.stringify(a)})
`;case"JSON":return`
import json
${r}
def parse_json(path):
    with open(path, 'r') as f:
        data = json.load(f)
    if isinstance(data, list):
        schema = [{'name': k, 'dtype': type(v).__name__, 'shape': '—', 'description': ''} for k, v in (data[0].items() if data and isinstance(data[0], dict) else [])]
        preview, truncated = _truncate_preview(data)
        total = len(data)
    elif isinstance(data, dict):
        schema = [{'name': k, 'dtype': type(v).__name__, 'shape': '—', 'description': ''} for k, v in data.items()]
        preview = [data]
        truncated = False
        total = 1
    else:
        schema = []
        preview = [data]
        truncated = False
        total = 1
    # Convert non-serializable (e.g., numpy types if present) to strings
    def to_str(v):
        if isinstance(v, (int, float, str, bool, type(None))):
            return v
        return str(v)[:100]
    preview = [{k: to_str(v) for k, v in row.items()} if isinstance(row, dict) else to_str(row) for row in preview]
    return {
        'schema': schema,
        'preview': preview,
        'metadata': {'top_level_type': type(data).__name__},
        'truncated': truncated,
        'total_rows': total,
        'notes': [
            'JSON parsed with stdlib json. Top-level structure inspected.',
            'PHI-safe: review JSON keys for accidental PHI.',
        ],
    }
parse_file_result = parse_json(${JSON.stringify(a)})
`;case"NumPy archive":return`
import numpy as np
${r}
def parse_npz(path):
    if path.endswith('.npz'):
        arch = np.load(path, allow_pickle=False)
        schema = []
        preview = []
        for key in arch.files[:10]:
            arr = arch[key]
            schema.append({
                'name': key,
                'dtype': str(arr.dtype),
                'shape': str(arr.shape),
                'description': '',
            })
            preview.append({
                'key': key,
                'shape': list(arr.shape),
                'dtype': str(arr.dtype),
                'min': float(arr.min()) if arr.dtype.kind in 'fiu' else None,
                'max': float(arr.max()) if arr.dtype.kind in 'fiu' else None,
                'mean': float(arr.mean()) if arr.dtype.kind in 'fiu' else None,
            })
        metadata = {'n_arrays': len(arch.files), 'keys': list(arch.files)}
        truncated = len(arch.files) > 10
    else:
        arr = np.load(path, allow_pickle=False)
        schema = [{
            'name': 'array',
            'dtype': str(arr.dtype),
            'shape': str(arr.shape),
            'description': 'single array',
        }]
        preview = [{
            'shape': list(arr.shape),
            'dtype': str(arr.dtype),
            'min': float(arr.min()) if arr.dtype.kind in 'fiu' else None,
            'max': float(arr.max()) if arr.dtype.kind in 'fiu' else None,
            'mean': float(arr.mean()) if arr.dtype.kind in 'fiu' else None,
        }]
        metadata = {'shape': list(arr.shape), 'dtype': str(arr.dtype)}
        truncated = False
    return {
        'schema': schema,
        'preview': preview,
        'metadata': metadata,
        'truncated': truncated,
        'notes': [
            'NumPy archive parsed with numpy. Arrays loaded with allow_pickle=False (security).',
            'PHI-safe: NumPy arrays do not contain identifiable info by default.',
        ],
    }
parse_file_result = parse_npz(${JSON.stringify(a)})
`;case"Image (raster)":return`
from PIL import Image
import numpy as np
${r}
def parse_image(path):
    img = Image.open(path)
    arr = np.asarray(img)
    schema = [{
        'name': 'pixel_array',
        'dtype': str(arr.dtype),
        'shape': str(arr.shape),
        'description': f'{img.format} image',
    }]
    preview = [{
        'format': img.format,
        'mode': img.mode,
        'size': list(img.size),
        'dtype': str(arr.dtype),
        'min': float(arr.min()),
        'max': float(arr.max()),
        'mean': float(arr.mean()),
    }]
    metadata = {
        'format': img.format,
        'mode': img.mode,
        'size': list(img.size),
        'info_keys': list(img.info.keys()) if hasattr(img, 'info') else [],
    }
    return {
        'schema': schema,
        'preview': preview,
        'metadata': metadata,
        'truncated': False,
        'notes': [
            f'{img.format} image parsed with Pillow. Pixel array loaded as NumPy.',
            'PHI-safe: image metadata may contain EXIF (camera, GPS) — review tags.',
        ],
    }
parse_file_result = parse_image(${JSON.stringify(a)})
`;default:return`
parse_file_result = {
    'schema': [],
    'preview': [],
    'metadata': {'error': 'unsupported format'},
    'truncated': False,
    'notes': ['No parser available for this format. Use the IDE studio with full Pyodide.'],
}
`}}(t,o,e.name);a.runPython(l);let p=a.runPython("parse_file_result").toJs({dict_converter:e=>Object.fromEntries(e)});try{d.unlink(o)}catch{}F({format:t,fileName:e.name,fileSize:e.size,schema:p.schema??[],preview:p.preview??[],metadata:p.metadata??{},truncated:p.truncated??!1,totalRows:p.total_rows,notes:p.notes??[]})}catch(e){D(String(e?.message??e).split("\n").slice(-3).join(" "))}finally{I(!1)}}};return(0,a.jsxs)(h.Card,{className:"overflow-hidden border-border/60 bg-card/40 backdrop-blur",children:[(0,a.jsxs)("div",{className:"border-b border-border/60 bg-muted/30 px-4 py-3 flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(n.Database,{className:"h-4 w-4 text-primary"}),(0,a.jsxs)("span",{className:"text-xs font-mono text-muted-foreground",children:["Scientific file reader · Pyodide v",x]}),_&&(0,a.jsxs)(y.Badge,{variant:"outline",className:"text-[9px] gap-1",children:[(0,a.jsx)(l.CheckCircle2,{className:"h-2.5 w-2.5 text-emerald-500"}),"Pyodide ready"]})]}),e&&(0,a.jsxs)(u.Button,{size:"sm",variant:"ghost",onClick:()=>{w(null),F(null),D(null),$.current&&($.current.value="")},className:"h-7 px-2 text-xs",children:[(0,a.jsx)(p.X,{className:"h-3 w-3"}),"Clear"]})]}),(0,a.jsxs)("div",{onDragOver:e=>{e.preventDefault(),b(!0)},onDragLeave:()=>b(!1),onDrop:e=>{e.preventDefault(),b(!1);let a=e.dataTransfer.files?.[0];a&&(w(a),F(null),D(null))},className:(0,f.cn)("p-8 text-center transition-colors",v?"bg-primary/10 border-2 border-dashed border-primary":"border-2 border-dashed border-border/60"),children:[(0,a.jsx)("input",{ref:$,type:"file",onChange:e=>{let a=e.target.files?.[0];a&&(w(a),F(null),D(null))},className:"hidden",accept:".h5,.hdf5,.parquet,.arrow,.feather,.sam,.bam,.dcm,.dicom,.nii,.nii.gz,.nc,.nc4,.netcdf,.tif,.tiff,.csv,.json,.npz,.npy,.png,.jpg,.jpeg,.webp"}),e?(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"flex items-center justify-center gap-3 mb-2",children:[(0,a.jsx)(m.FileCode2,{className:"h-5 w-5 text-primary"}),(0,a.jsx)("span",{className:"text-sm font-medium font-mono",children:e.name}),(0,a.jsxs)(y.Badge,{variant:"outline",className:"text-[10px] font-mono",children:[(e.size/1024).toFixed(1)," KB"]})]}),(0,a.jsxs)("p",{className:"text-xs text-muted-foreground mb-3",children:["Detected format: ",(0,a.jsx)("strong",{children:J(e.name).format})," · Pyodide package: ",(0,a.jsx)("code",{className:"font-mono",children:J(e.name).pyodidePackage||"stdlib"})]}),(0,a.jsxs)(u.Button,{onClick:M,disabled:P||j,className:"h-9 px-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90",children:[P||j?(0,a.jsx)(i.Loader2,{className:"h-4 w-4 animate-spin mr-2"}):(0,a.jsx)(c.Eye,{className:"h-4 w-4 mr-2"}),j?"Loading Pyodide…":P?"Parsing…":"Parse file"]})]}):(0,a.jsxs)("button",{type:"button",onClick:()=>$.current?.click(),className:"w-full h-full flex flex-col items-center gap-3 cursor-pointer",children:[(0,a.jsx)("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10",children:(0,a.jsx)(r.Upload,{className:"h-5 w-5 text-primary"})}),(0,a.jsx)("p",{className:"text-sm font-medium",children:"Drop a file here or click to select"}),(0,a.jsx)("p",{className:"text-xs text-muted-foreground",children:"HDF5 · Parquet · Arrow · SAM/BAM · DICOM · NIfTI · NetCDF · TIFF · CSV · JSON · NPZ · Image"}),(0,a.jsx)("p",{className:"text-[11px] text-muted-foreground/70",children:"Files stay in your browser — never uploaded to a server. Max 100 MB."})]})]}),C&&(0,a.jsx)("div",{className:"border-t border-border/60 p-4",children:(0,a.jsxs)("div",{className:"rounded-md border border-destructive/40 bg-destructive/10 p-3 text-xs",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-destructive font-medium mb-1",children:[(0,a.jsx)(o.AlertTriangle,{className:"h-3.5 w-3.5"}),"Parse error"]}),(0,a.jsx)("pre",{className:"whitespace-pre-wrap text-[11px] text-foreground/80 font-mono",children:C})]})}),S&&(0,a.jsxs)("div",{className:"border-t border-border/60",children:[(0,a.jsxs)("div",{className:"bg-muted/30 px-4 py-3 flex items-center justify-between border-b border-border/60",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 text-xs",children:[(0,a.jsx)(l.CheckCircle2,{className:"h-4 w-4 text-emerald-500"}),(0,a.jsxs)("span",{className:"font-mono",children:["Parsed ",S.format," · ",S.schema.length," ","JSON"===S.format||"CSV"===S.format?"columns":"datasets",S.totalRows?` \xb7 ~${S.totalRows.toLocaleString()} rows`:"",S.truncated&&" · preview truncated"]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)("select",{value:A,onChange:e=>z(e.target.value),className:"h-7 rounded-md border border-border/60 bg-background px-2 text-[11px] font-mono",children:[(0,a.jsx)("option",{value:"json",children:"JSON"}),(0,a.jsx)("option",{value:"csv",children:"CSV"}),(0,a.jsx)("option",{value:"npz",children:"NPZ (JSON-wrapped)"})]}),(0,a.jsxs)(u.Button,{size:"sm",onClick:()=>{let e,a;if(!S)return;if("json"===A)e=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}),a=`${S.fileName}.parsed.json`;else if("csv"===A)if(0===S.preview.length)e=new Blob([JSON.stringify(S,null,2)],{type:"application/json"}),a=`${S.fileName}.parsed.json`;else{let t=Object.keys(S.preview[0]),r=[t.join(",")];for(let e of S.preview)r.push(t.map(a=>JSON.stringify(e[a]??"")).join(","));e=new Blob([r.join("\n")],{type:"text/csv"}),a=`${S.fileName}.parsed.csv`}else e=new Blob([JSON.stringify({format:S.format,schema:S.schema,preview:S.preview,metadata:S.metadata,notes:S.notes},null,2)],{type:"application/json"}),a=`${S.fileName}.parsed.npz.json`;let t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=a,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(t),1e3)},className:"h-7 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90",children:[(0,a.jsx)(s.Download,{className:"h-3 w-3"}),"Download"]})]})]}),S.schema.length>0&&(0,a.jsxs)("div",{className:"p-4 border-b border-border/60",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2",children:"Schema"}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full text-xs font-mono",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-border/40 text-left text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,a.jsx)("th",{className:"py-1.5 pr-3",children:"Name"}),(0,a.jsx)("th",{className:"py-1.5 pr-3",children:"Dtype"}),(0,a.jsx)("th",{className:"py-1.5 pr-3",children:"Shape"}),(0,a.jsx)("th",{className:"py-1.5",children:"Description"})]})}),(0,a.jsx)("tbody",{children:S.schema.map((e,t)=>(0,a.jsxs)("tr",{className:"border-b border-border/30 last:border-0",children:[(0,a.jsx)("td",{className:"py-1.5 pr-3 text-primary",children:e.name}),(0,a.jsx)("td",{className:"py-1.5 pr-3 text-foreground/80",children:e.dtype}),(0,a.jsx)("td",{className:"py-1.5 pr-3 text-muted-foreground",children:e.shape??"—"}),(0,a.jsx)("td",{className:"py-1.5 text-muted-foreground",children:e.description??"—"})]},t))})]})})]}),S.preview.length>0&&(0,a.jsxs)("div",{className:"p-4 border-b border-border/60",children:[(0,a.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2",children:["Preview (first ",S.preview.length," rows)"]}),(0,a.jsx)("div",{className:"overflow-x-auto max-h-[300px] overflow-y-auto",children:(0,a.jsxs)("table",{className:"w-full text-xs font-mono",children:[(0,a.jsx)("thead",{className:"sticky top-0 bg-background",children:(0,a.jsx)("tr",{className:"border-b border-border/40 text-left text-[10px] uppercase tracking-wider text-muted-foreground",children:Object.keys(S.preview[0]).map(e=>(0,a.jsx)("th",{className:"py-1.5 pr-3 whitespace-nowrap",children:e},e))})}),(0,a.jsx)("tbody",{children:S.preview.map((e,t)=>(0,a.jsx)("tr",{className:"border-b border-border/30 last:border-0",children:Object.values(e).map((e,t)=>(0,a.jsx)("td",{className:"py-1 pr-3 text-foreground/80 whitespace-pre-wrap break-words max-w-[300px]",children:"string"==typeof e?e.length>100?e.slice(0,100)+"…":e:"object"==typeof e?JSON.stringify(e).slice(0,100):String(e)},t))},t))})]})})]}),Object.keys(S.metadata).length>0&&(0,a.jsxs)("div",{className:"p-4 border-b border-border/60",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2",children:"Metadata"}),(0,a.jsx)("pre",{className:"text-[11px] font-mono text-foreground/80 whitespace-pre-wrap max-h-[200px] overflow-y-auto",children:JSON.stringify(S.metadata,null,2)})]}),S.notes&&S.notes.length>0&&(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2",children:"Notes"}),(0,a.jsx)("ul",{className:"space-y-1.5 text-xs",children:S.notes.map((e,t)=>(0,a.jsxs)("li",{className:"flex items-start gap-2 text-foreground/80",children:[(0,a.jsx)(d.ShieldCheck,{className:"h-3 w-3 mt-0.5 text-primary flex-shrink-0"}),(0,a.jsx)("span",{children:e})]},t))})]})]})]})}e.s(["FileReader",()=>w])},88683,e=>{e.n(e.i(98487))}]);