"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react/jsx-runtime"),d=require("styled-components"),o=require("../Box/Box.cjs"),l=t=>t&&t.__esModule?t:{default:t},r=l(d),s=r.default(o.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:t})=>t?"auto 1fr":"1fr"};
`,i=r.default(o.Box)`
  overflow-x: hidden;
`,u=({sideNav:t,children:n})=>e.jsxs(s,{hasSideNav:!!t,children:[t,e.jsx(i,{paddingBottom:10,children:n})]});exports.Layout=u;
