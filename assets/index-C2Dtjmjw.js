import{r as e,s as f,j as g}from"./index-C-PWaNx6.js";import{a as x,P as h,_ as v,u as A}from"./index.module-DTNJM8RK.js";const C=globalThis!=null&&globalThis.document?e.useLayoutEffect:()=>{},[E,B]=x("Avatar"),[I,b]=E("Avatar"),j=e.forwardRef((a,r)=>{const{__scopeAvatar:o,...t}=a,[i,l]=e.useState("idle");return e.createElement(I,{scope:o,imageLoadingStatus:i,onImageLoadingStatusChange:l},e.createElement(h.span,v({},t,{ref:r})))}),_=e.forwardRef((a,r)=>{const{__scopeAvatar:o,src:t,onLoadingStatusChange:i=()=>{},...l}=a,d=b("AvatarImage",o),n=function(s){const[y,u]=e.useState("idle");return e.useEffect(()=>{if(!s)return void u("error");let p=!0;const m=new window.Image,w=S=>()=>{p&&u(S)};return u("loading"),m.onload=w("loaded"),m.onerror=w("error"),m.src=s,()=>{p=!1}},[s]),y}(t),c=A(s=>{i(s),d.onImageLoadingStatusChange(s)});return C(()=>{n!=="idle"&&c(n)},[n,c]),n==="loaded"?e.createElement(h.img,v({},l,{ref:r,src:t})):null}),k=e.forwardRef((a,r)=>{const{__scopeAvatar:o,delayMs:t,...i}=a,l=b("AvatarFallback",o),[d,n]=e.useState(t===void 0);return e.useEffect(()=>{if(t!==void 0){const c=window.setTimeout(()=>n(!0),t);return()=>window.clearTimeout(c)}},[t]),d&&l.imageLoadingStatus!=="loaded"?e.createElement(h.span,v({},i,{ref:r})):null}),L=j,R=_,F=k,T=f(L,{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"middle",overflow:"hidden",userSelect:"none",width:"13rem",height:"13rem",borderRadius:"100%",backgroundColor:"$hiContrast",border:"4px solid $loContrast",outline:"4px solid $primary",transition:"border 0.2s","@md":{width:"12rem",height:"12rem"},"@sm":{width:"9rem",height:"9rem"}}),$=f(R,{width:"100%",height:"100%",objectFit:"cover"}),M=f(F,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"white",color:"$primary",fontSize:16,lineHeight:1,fontWeight:500});function H({image:a,alt:r,fallback:o,fallbackDelay:t=500}){return g.jsxs(T,{children:[g.jsx($,{src:a,alt:r}),g.jsx(M,{delayMs:t,children:o})]})}export{H as default};
