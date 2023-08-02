"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react/jsx-runtime"),r=require("styled-components"),o=require("../RawTable/RawTr.cjs"),s=t=>t&&t.__esModule?t:{default:t},d=s(r),i=d.default(o.RawTr)`
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:t})=>t.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:t})=>t.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,n=t=>e.jsx(i,{...t});exports.Tr=n;
