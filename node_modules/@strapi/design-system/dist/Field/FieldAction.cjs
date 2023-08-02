"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),n=require("react"),i=require("styled-components"),l=require("../Flex/Flex.cjs"),d=require("../VisuallyHidden/VisuallyHidden.cjs"),u=e=>e&&e.__esModule?e:{default:e},a=u(i),c=a.default(l.Flex)`
  font-size: 1.6rem;
  padding: 0;
`,f=n.forwardRef(({label:e,children:r,...s},o)=>t.jsxs(c,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...s,as:"button",ref:o,children:[t.jsx(d.VisuallyHidden,{as:"span",children:e}),n.cloneElement(r,{"aria-hidden":!0,focusable:!1})]}));exports.FieldAction=f;
