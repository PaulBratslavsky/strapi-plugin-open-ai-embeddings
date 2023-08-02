"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),o=require("styled-components"),i=require("../Box/Box.cjs"),a=e=>e&&e.__esModule?e:{default:e},l=a(o),s=l.default(i.Box)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,u=({labelledBy:e="main-content-title",...t})=>n.jsx(s,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...t});exports.Main=u;
