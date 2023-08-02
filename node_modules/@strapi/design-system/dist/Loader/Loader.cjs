"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react/jsx-runtime"),s=require("react"),o=require("styled-components"),i=require("./assets/loader.svg.cjs"),l=require("../VisuallyHidden/VisuallyHidden.cjs"),c=e=>e&&e.__esModule?e:{default:e};function d(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}return t.default=e,Object.freeze(t)}const u=d(s),f=c(o),m=o.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,g=f.default.img`
  animation: ${m} 1s infinite linear;
  will-change: transform;
  ${({small:e,theme:t})=>e&&`width: ${t.spaces[6]}; height: ${t.spaces[6]};`}
`,p=u.forwardRef(({children:e,small:t=!1,...r},n)=>a.jsxs("div",{role:"alert","aria-live":"assertive",ref:n,...r,children:[a.jsx(l.VisuallyHidden,{children:e}),a.jsx(g,{src:i,"aria-hidden":!0,small:t})]}));exports.Loader=p;
