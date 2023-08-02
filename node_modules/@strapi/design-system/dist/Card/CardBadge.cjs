"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),d=require("styled-components"),r=require("../Badge/Badge.cjs"),s=e=>e&&e.__esModule?e:{default:e},a=s(d),n=a.default.div`
  margin-left: auto;
  flex-shrink: 0;
`,o=a.default(r.Badge)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`,i=e=>t.jsx(n,{children:t.jsx(o,{...e})});exports.CardBadge=i;
