"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),n=require("styled-components"),i=require("../Box/Box.cjs"),o=e=>e&&e.__esModule?e:{default:e},s=o(n),u=s.default(i.Box)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,a=({unsetMargin:e=!0,...t})=>r.jsx(u,{...t,background:"neutral150",as:"hr",unsetMargin:e});exports.Divider=a;
