"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),n=require("styled-components"),t=require("../Box/Box.cjs"),s=require("../Divider/Divider.cjs"),a=require("../Flex/Flex.cjs"),l=require("../Typography/Typography.cjs"),c=e=>e&&e.__esModule?e:{default:e},i=c(n),u=i.default(t.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,h=i.default(t.Box)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,x=({children:e,icon:o,...d})=>r.jsxs("div",{children:[r.jsx(s.Divider,{}),r.jsx(h,{as:"button",background:"primary100",padding:5,...d,children:r.jsxs(a.Flex,{children:[r.jsx(u,{"aria-hidden":!0,background:"primary200",children:o}),r.jsx(t.Box,{paddingLeft:3,children:r.jsx(l.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:e})})]})})]});exports.TFooter=x;
