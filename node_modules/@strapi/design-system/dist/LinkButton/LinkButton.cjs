"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react/jsx-runtime"),S=require("react"),h=require("react-router-dom"),v=require("styled-components"),o=require("../Button/utils.cjs"),_=require("../BaseButton/BaseButton.cjs"),c=require("../Flex/Flex.cjs"),j=require("../Typography/Typography.cjs"),m=e=>e&&e.__esModule?e:{default:e};function x(e){if(e&&e.__esModule)return e;const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}return n.default=e,Object.freeze(n)}const q=x(S),k=m(v),B=k.default(_.BaseButtonWrapper)`
  &[aria-disabled='true'] {
    ${o.getDisabledStyle}
    &:active {
      ${o.getDisabledStyle}
    }
  }
  &:hover {
    ${o.getHoverStyle}
  }
  &:active {
    ${o.getActiveStyle}
  }
  ${o.getVariantStyle}
`,R=q.forwardRef(({variant:e="default",startIcon:n,endIcon:r,disabled:t=!1,children:p,size:i="S",href:u,to:d,...f},g)=>{const y=u?"_blank":void 0,b=u?"noreferrer noopener":void 0,l=i==="S"?2:"10px",s=4;return a.jsxs(B,{ref:g,"aria-disabled":t,size:i,variant:e,target:y,rel:b,to:t?void 0:d,href:t?"#":u,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:l,paddingLeft:s,paddingRight:s,paddingTop:l,pointerEvents:t?"none":void 0,...f,as:d&&!t?h.NavLink:"a",children:[n&&a.jsx(c.Flex,{"aria-hidden":!0,children:n}),a.jsx(j.Typography,{variant:i==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:p}),r&&a.jsx(c.Flex,{"aria-hidden":!0,children:r})]})});exports.LinkButton=R;
