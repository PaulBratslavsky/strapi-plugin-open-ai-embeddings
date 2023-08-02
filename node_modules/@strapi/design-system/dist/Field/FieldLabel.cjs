"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),u=require("react"),p=require("styled-components"),h=require("./FieldContext.cjs"),f=require("../helpers/deprecations.cjs"),o=require("../Typography/Typography.cjs"),g=require("../Flex/Flex.cjs"),y=e=>e&&e.__esModule?e:{default:e},t=y(p),q=f.once(console.warn),x=u.forwardRef(({children:e,action:n,required:i,...l},s)=>{const{id:a,required:d}=h.useField(),c=d||i;return i!==void 0&&q('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),r.jsxs(F,{ref:s,variant:"pi",textColor:"neutral800",htmlFor:a,fontWeight:"bold",as:"label",...l,children:[e,c&&r.jsx(m,{textColor:"danger600",children:"*"}),n&&r.jsx(b,{marginLeft:1,children:n})]})}),F=t.default(o.Typography)`
  display: flex;
  align-items: center;
`,m=t.default(o.Typography)`
  line-height: 0;
`,b=t.default(g.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;exports.FieldLabel=x;
