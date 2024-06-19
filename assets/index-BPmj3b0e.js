import{r as o,s as v,T as _,j as C}from"./index-CqjM6Q1z.js";import{c as z,u as g,a as B,b as I,P as y,_ as x}from"./index.module-DUwaVSJf.js";import{a as F,b as $}from"./index.esm-Clsv25rg.js";import"./iconBase-DdHah4Uy.js";const[oe,q]=z("Label",{id:void 0,controlRef:{current:null}}),A=e=>{const t=q("LabelConsumer"),{controlRef:n}=t;return o.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id};function L(e){const[t,n]=o.useState(void 0);return o.useEffect(()=>{if(e){const a=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let u,i;if("borderBoxSize"in c){const r=c.borderBoxSize,l=Array.isArray(r)?r[0]:r;u=l.inlineSize,i=l.blockSize}else{const r=e.getBoundingClientRect();u=r.width,i=r.height}n({width:u,height:i})});return a.observe(e,{box:"border-box"}),()=>a.unobserve(e)}n(void 0)},[e]),t}function M(e){const t=o.useRef({value:e,previous:e});return o.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function O({prop:e,defaultProp:t,onChange:n=()=>{}}){const[a,s]=function({defaultProp:r,onChange:l}){const d=o.useState(r),[h]=d,f=o.useRef(h),b=g(l);return o.useEffect(()=>{f.current!==h&&(b(h),f.current=h)},[h,f,b]),d}({defaultProp:t,onChange:n}),c=e!==void 0,u=c?e:a,i=g(n);return[u,o.useCallback(r=>{if(c){const l=r,d=typeof r=="function"?l(e):r;d!==e&&i(d)}else s(r)},[c,e,s,i])]}function X(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}const[D,ae]=B("Switch"),[H,G]=D("Switch"),J=o.forwardRef((e,t)=>{const{__scopeSwitch:n,"aria-labelledby":a,name:s,checked:c,defaultChecked:u,required:i,disabled:r,value:l="on",onCheckedChange:d,...h}=e,[f,b]=o.useState(null),E=I(t,m=>b(m)),R=A(f),P=a||R,k=o.useRef(!1),S=!f||!!f.closest("form"),[p=!1,T]=O({prop:c,defaultProp:u,onChange:d});return o.createElement(H,{scope:n,checked:p,disabled:r},o.createElement(y.button,x({type:"button",role:"switch","aria-checked":p,"aria-labelledby":P,"aria-required":i,"data-state":w(p),"data-disabled":r?"":void 0,disabled:r,value:l},h,{ref:E,onClick:X(e.onClick,m=>{T(j=>!j),S&&(k.current=m.isPropagationStopped(),k.current||m.stopPropagation())})})),S&&o.createElement(N,{control:f,bubbles:!k.current,name:s,value:l,checked:p,required:i,disabled:r,style:{transform:"translateX(-100%)"}}))}),K=o.forwardRef((e,t)=>{const{__scopeSwitch:n,...a}=e,s=G("SwitchThumb",n);return o.createElement(y.span,x({"data-state":w(s.checked),"data-disabled":s.disabled?"":void 0},a,{ref:t}))}),N=e=>{const{control:t,checked:n,bubbles:a=!0,...s}=e,c=o.useRef(null),u=M(n),i=L(t);return o.useEffect(()=>{const r=c.current,l=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(l,"checked").set;if(u!==n&&d){const h=new Event("click",{bubbles:a});d.call(r,n),r.dispatchEvent(h)}},[u,n,a]),o.createElement("input",x({type:"checkbox","aria-hidden":!0,defaultChecked:n},s,{tabIndex:-1,ref:c,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function w(e){return e?"checked":"unchecked"}const Q=J,U=K,V=v(Q,{all:"unset",width:"3rem",height:"1.5rem",backgroundColor:"$hiContrast",borderRadius:"9999px",position:"relative",display:"flex",alignItems:"center"}),W=v(U,{display:"flex",alignItems:"center",justifyContent:"center",width:"1.5rem",height:"1.5rem",border:"solid 1px $loContrast2",backgroundColor:"$loContrast",borderRadius:"9999px",transition:"transform 100ms",transform:"translateX(-1px)",willChange:"transform",'&[data-state="checked"]':{transform:"translateX(1.5rem)"},"&:hover":{filter:"brightness(0.9)"}}),Y=v(F,{color:"$hiContrast"}),Z=v($,{color:"$hiContrast"});function se(){const{theme:e,applyTheme:t,getPreferredTheme:n}=o.useContext(_),a=s=>t(s?"dark":"light");return C.jsx(V,{id:"theme","aria-label":"Theme",onCheckedChange:a,defaultChecked:n()==="dark",children:C.jsx(W,{children:e==="dark"?C.jsx(Y,{}):C.jsx(Z,{})})})}export{se as default};