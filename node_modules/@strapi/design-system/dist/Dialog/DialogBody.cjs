"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),d=require("styled-components"),n=require("../Box/Box.cjs"),s=require("../Flex/Flex.cjs"),i=e=>e&&e.__esModule?e:{default:e},r=i(d),l=r.default(n.Box)`
  svg {
    width: ${({theme:e})=>e.spaces[6]};
    height: ${({theme:e})=>e.spaces[6]};

    path {
      fill: ${({theme:e})=>e.colors.danger600};
    }
  }
`,a=({children:e,icon:o})=>t.jsxs(n.Box,{paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,children:[o&&t.jsx(l,{paddingBottom:2,children:t.jsx(s.Flex,{justifyContent:"center",children:o})}),e]});exports.DialogBody=a;
