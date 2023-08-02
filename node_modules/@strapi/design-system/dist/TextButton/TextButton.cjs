"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),y=require("react"),g=require("@strapi/icons"),l=require("styled-components"),b=require("../themes/utils.cjs"),m=require("../Flex/Flex.cjs"),x=require("../Typography/Typography.cjs"),h=e=>e&&e.__esModule?e:{default:e};function j(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const _=j(y),u=h(l),T=l.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,q=u.default.div`
  animation: ${T} 2s infinite linear;
  will-change: transform;
`,v=u.default(m.Flex)`
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }

  ${b.buttonFocusStyle}
`,c=_.forwardRef(({children:e,startIcon:r,endIcon:t,onClick:n,disabled:a=!1,loading:s=!1,...d},f)=>{const p=n&&!a?n:void 0,i=a||s;return o.jsxs(v,{ref:f,"aria-disabled":i,onClick:p,as:"button",type:"button",background:"transparent",gap:2,...d,children:[s?o.jsx(q,{"aria-hidden":!0,children:o.jsx(g.Loader,{})}):r,o.jsx(x.Typography,{variant:"pi",textColor:i?"neutral600":"primary600",children:e}),t]})});c.displayName="TextButton";exports.TextButton=c;
