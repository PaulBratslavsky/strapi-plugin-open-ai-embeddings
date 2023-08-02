"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),i=require("styled-components"),d=require("../helpers/handleResponsiveValues.cjs"),l=require("../Box/Box.cjs"),n=e=>e&&e.__esModule?e:{default:e},u=n(i),a=u.default(l.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:e})=>e}, 1fr);
  ${({theme:e,gap:t})=>d("gap",t,e)}
`,c=e=>{const{gap:t="0",gridCols:r=12,...s}=e;return o.jsx(a,{gap:t,gridCols:r,...s})};exports.Grid=c;
