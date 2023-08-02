"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),S=require("react"),v=require("@strapi/icons"),c=require("styled-components"),l=require("./constants.cjs"),r=require("./utils.cjs"),j=require("../BaseButton/BaseButton.cjs"),_=require("../Box/Box.cjs"),$=require("../Typography/Typography.cjs"),T=require("../Flex/Flex.cjs"),f=e=>e&&e.__esModule?e:{default:e},D=f(S),g=f(c),R=c.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,w=g.default(v.Loader)`
  animation: ${R} 2s infinite linear;
  will-change: transform;
`,y=g.default(j.BaseButton)`
  height: ${({theme:e,size:n})=>e.sizes.button[n]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${r.getDisabledStyle}

    &:active {
      ${r.getDisabledStyle}
    }
  }

  &:hover {
    ${r.getHoverStyle}
  }

  &:active {
    ${r.getActiveStyle}
  }

  ${r.getVariantStyle}
`,h=D.default.forwardRef(({variant:e=l.DEFAULT,startIcon:n,endIcon:s,disabled:b=!1,children:p,onClick:d,size:u=l.BUTTON_SIZES[0],loading:i=!1,fullWidth:a=!1,...m},B)=>{const o=b||i,x=q=>{!o&&d&&d(q)};return t.jsxs(y,{ref:B,"aria-disabled":o,disabled:o,size:u,variant:e,onClick:x,fullWidth:a,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:a,justifyContent:a?"center":void 0,paddingLeft:4,paddingRight:4,width:a?"100%":void 0,...m,children:[(n||i)&&t.jsx(_.Box,{"aria-hidden":!0,children:i?t.jsx(w,{}):n}),t.jsx($.Typography,{variant:u==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:p}),s&&t.jsx(T.Flex,{"aria-hidden":!0,children:s})]})});h.displayName="Button";exports.Button=h;exports.ButtonWrapper=y;
