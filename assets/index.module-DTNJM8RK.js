import{r}from"./index-C-PWaNx6.js";function C(...e){return o=>e.forEach(t=>function(n,c){typeof n=="function"?n(c):n!=null&&(n.current=c)}(t,o))}function S(...e){return r.useCallback(C(...e),e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(null,arguments)}const E=r.forwardRef((e,o)=>{const{children:t,...n}=e;return r.Children.toArray(t).some(h)?r.createElement(r.Fragment,null,r.Children.map(t,c=>h(c)?r.createElement(v,f({},n,{ref:o}),c.props.children):c)):r.createElement(v,f({},n,{ref:o}),t)});E.displayName="Slot";const v=r.forwardRef((e,o)=>{const{children:t,...n}=e;return r.isValidElement(t)?r.cloneElement(t,{...y(n,t.props),ref:C(o,t.ref)}):r.Children.count(t)>1?r.Children.only(null):null});v.displayName="SlotClone";const w=({children:e})=>r.createElement(r.Fragment,null,e);function h(e){return r.isValidElement(e)&&e.type===w}function y(e,o){const t={...o};for(const n in o){const c=e[n],s=o[n];/^on[A-Z]/.test(n)?t[n]=(...u)=>{s==null||s(...u),c==null||c(...u)}:n==="style"?t[n]={...c,...s}:n==="className"&&(t[n]=[c,s].filter(Boolean).join(" "))}return{...e,...t}}const _=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce((e,o)=>({...e,[o]:r.forwardRef((t,n)=>{const{asChild:c,...s}=t,u=c?E:o;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(u,f({},s,{ref:n}))})}),{});function P(e,o){const t=r.createContext(o);function n(c){const{children:s,...u}=c,l=r.useMemo(()=>u,Object.values(u));return r.createElement(t.Provider,{value:l},s)}return n.displayName=e+"Provider",[n,function(c){const s=r.useContext(t);if(s)return s;if(o!==void 0)return o;throw new Error(`\`${c}\` must be used within \`${e}\``)}]}function R(e,o=[]){let t=[];const n=()=>{const c=t.map(s=>r.createContext(s));return function(s){const u=(s==null?void 0:s[e])||c;return r.useMemo(()=>({[`__scope${e}`]:{...s,[e]:u}}),[s,u])}};return n.scopeName=e,[function(c,s){const u=r.createContext(s),l=t.length;function m(d){const{scope:a,children:p,...i}=d,b=(a==null?void 0:a[e][l])||u,g=r.useMemo(()=>i,Object.values(i));return r.createElement(b.Provider,{value:g},p)}return t=[...t,s],m.displayName=c+"Provider",[m,function(d,a){const p=(a==null?void 0:a[e][l])||u,i=r.useContext(p);if(i)return i;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${c}\``)}]},N(n,...o)]}function N(...e){const o=e[0];if(e.length===1)return o;const t=()=>{const n=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(c){const s=n.reduce((u,{useScope:l,scopeName:m})=>({...u,...l(c)[`__scope${m}`]}),{});return r.useMemo(()=>({[`__scope${o.scopeName}`]:s}),[s])}};return t.scopeName=o.scopeName,t}function $(e){const o=r.useRef(e);return r.useEffect(()=>{o.current=e}),r.useMemo(()=>(...t)=>{var n;return(n=o.current)===null||n===void 0?void 0:n.call(o,...t)},[])}export{_ as P,f as _,R as a,S as b,P as c,$ as u};
