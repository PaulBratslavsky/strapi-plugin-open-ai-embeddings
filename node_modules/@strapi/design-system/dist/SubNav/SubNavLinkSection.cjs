"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),h=require("react"),g=require("@strapi/icons"),f=require("styled-components"),j=require("../hooks/useId.cjs"),i=require("../Box/Box.cjs"),y=require("../Flex/Flex.cjs"),S=require("../Typography/Typography.cjs"),d=e=>e&&e.__esModule?e:{default:e},a=d(h),o=d(f),b=o.default(i.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,m=o.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,k=o.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,q=({label:e,children:l,id:c})=>{const[n,u]=a.default.useState(!0),s=j.useId(c),p=()=>{u(r=>!r)};return t.jsxs(i.Box,{children:[t.jsx(b,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:t.jsx(y.Flex,{justifyContent:"space-between",children:t.jsxs(m,{onClick:p,"aria-expanded":n,"aria-controls":s,children:[t.jsx(k,{rotated:n,children:t.jsx(g.CarretDown,{"aria-hidden":!0})}),t.jsx(i.Box,{paddingLeft:2,children:t.jsx(S.Typography,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),n&&t.jsx("ul",{id:s,children:a.default.Children.map(l,(r,x)=>t.jsx("li",{children:r},x))})]})};exports.SubNavLinkSection=q;
