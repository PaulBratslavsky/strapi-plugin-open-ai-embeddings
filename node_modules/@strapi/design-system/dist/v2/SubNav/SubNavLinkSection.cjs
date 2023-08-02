"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),d=require("react"),x=require("@strapi/icons"),h=require("styled-components"),g=require("../../hooks/useId.cjs"),i=require("../../Box/Box.cjs"),f=require("../../Flex/Flex.cjs"),j=require("../../Typography/Typography.cjs"),y=e=>e&&e.__esModule?e:{default:e},o=y(h),S=o.default(i.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,b=o.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,m=o.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,k=({label:e,children:a,id:l})=>{const[n,c]=d.useState(!0),s=g.useId(l),u=()=>{c(r=>!r)};return t.jsxs(i.Box,{children:[t.jsx(S,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:t.jsx(f.Flex,{justifyContent:"space-between",children:t.jsxs(b,{onClick:u,"aria-expanded":n,"aria-controls":s,children:[t.jsx(m,{rotated:n,children:t.jsx(x.CarretDown,{"aria-hidden":!0})}),t.jsx(i.Box,{paddingLeft:2,children:t.jsx(j.Typography,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),n&&t.jsx("ul",{id:s,children:d.Children.map(a,(r,p)=>t.jsx("li",{children:r},p))})]})};exports.SubNavLinkSection=k;
