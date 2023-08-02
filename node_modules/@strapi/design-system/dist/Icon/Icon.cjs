"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("react/jsx-runtime"),s=require("react"),u=require("styled-components"),a=require("../helpers/theme.cjs"),d=require("../Box/Box.cjs"),o=e=>e&&e.__esModule?e:{default:e},i=o(s),f=o(u),m=f.default(d.Box)`
  path {
    fill: ${({color:e,theme:t})=>a.extractStyleFromTheme(t.colors,e,void 0)};
  }
  ${({theme:e,colors:t})=>t(e)}
`,r=i.default.forwardRef(({color:e="neutral600",colors:t=()=>"",...c},n)=>l.jsx(m,{ref:n,color:e,colors:t,...c}));r.displayName="Icon";exports.Icon=r;
