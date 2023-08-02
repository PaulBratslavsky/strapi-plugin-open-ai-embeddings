"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),r=require("styled-components"),n=require("../Box/Box.cjs"),l=require("../Flex/Flex.cjs"),s=e=>e&&e.__esModule?e:{default:e},i=s(r),u=i.default(n.Box)`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`,d=({startAction:e,endAction:o})=>t.jsx(u,{padding:4,children:t.jsxs(l.Flex,{gap:2,children:[e,o]})});exports.DialogFooter=d;
