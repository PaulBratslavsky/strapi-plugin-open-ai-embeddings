"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react/jsx-runtime"),i=require("styled-components"),r=require("../Box/Box.cjs"),s=require("../Flex/Flex.cjs"),l=require("../Typography/Typography.cjs"),u=t=>t&&t.__esModule?t:{default:t},c=u(i),p=c.default(r.Box)`
  svg {
    height: ${88/16}rem;
  }
`,y=({icon:t,content:o,action:n,hasRadius:a=!0,shadow:d="tableShadow"})=>e.jsxs(s.Flex,{alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:a,shadow:d,children:[e.jsx(p,{paddingBottom:6,"aria-hidden":!0,children:t}),e.jsx(r.Box,{paddingBottom:4,children:e.jsx(l.Typography,{variant:"delta",as:"p",textAlign:"center",textColor:"neutral600",children:o})}),n]});exports.EmptyStateLayout=y;
