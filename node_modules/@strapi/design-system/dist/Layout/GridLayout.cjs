"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("styled-components"),a=t=>t&&t.__esModule?t:{default:t},d=a(e),i=d.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:t})=>t.spaces[4]};
`;exports.GridLayout=i;
