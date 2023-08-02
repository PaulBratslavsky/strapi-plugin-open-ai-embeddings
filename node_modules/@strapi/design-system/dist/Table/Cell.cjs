"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),c=require("styled-components"),r=require("../RawTable/RawCell.cjs"),i=require("../Flex/Flex.cjs"),a=e=>e&&e.__esModule?e:{default:e},n=a(c),s=n.default(r.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:e})=>e.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,u=n.default.span`
  svg {
    height: ${4/16}rem;
  }
`,d=({children:e,action:l,...o})=>t.jsx(s,{as:r.RawTh,...o,children:t.jsxs(i.Flex,{children:[e,t.jsx(u,{children:l})]})}),h=({children:e,...l})=>t.jsx(s,{...l,children:e});exports.Td=h;exports.Th=d;
