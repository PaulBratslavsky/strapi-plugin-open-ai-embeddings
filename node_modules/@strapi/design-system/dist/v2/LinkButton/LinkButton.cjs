"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),b=require("react"),x=require("styled-components"),t=require("../../Button/utils.cjs"),B=require("../../BaseButton/BaseButton.cjs"),s=require("../../BaseLink/BaseLink.cjs"),l=require("../../Flex/Flex.cjs"),S=require("../../Typography/Typography.cjs"),c=e=>e&&e.__esModule?e:{default:e},v=c(b),k=c(x),q=k.default(B.BaseButtonWrapper)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${t.getDisabledStyle}
    &:active {
      ${t.getDisabledStyle}
    }
  }

  &:hover {
    ${t.getHoverStyle}
  }

  &:active {
    ${t.getActiveStyle}
  }

  ${t.getVariantStyle}
`,p=v.default.forwardRef(({variant:e="default",startIcon:i,endIcon:a,disabled:o=!1,children:g,size:r="S",as:f=s.BaseLink,...y},h)=>{const d=r==="S"?2:"10px",u=4;return n.jsxs(q,{ref:h,"aria-disabled":o,size:r,variant:e,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:d,paddingLeft:u,paddingRight:u,paddingTop:d,pointerEvents:o?"none":void 0,...y,as:f||s.BaseLink,children:[i&&n.jsx(l.Flex,{"aria-hidden":!0,children:i}),n.jsx(S.Typography,{variant:r==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:g}),a&&n.jsx(l.Flex,{"aria-hidden":!0,children:a})]})});p.displayName="LinkButton";exports.LinkButton=p;
