"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),d=require("styled-components"),n=require("../Box/Box.cjs"),r=require("../Flex/Flex.cjs"),s=e=>e&&e.__esModule?e:{default:e},l=s(d),a=l.default(n.Box)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,i=({startActions:e,endActions:t})=>o.jsx(a,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100",children:o.jsxs(r.Flex,{justifyContent:"space-between",children:[o.jsx(r.Flex,{gap:2,children:e}),o.jsx(r.Flex,{gap:2,children:t})]})});exports.ModalFooter=i;
