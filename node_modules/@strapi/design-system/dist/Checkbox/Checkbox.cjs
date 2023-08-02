"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),d=require("styled-components"),a=require("../hooks/useId.cjs"),u=require("../Field/FieldContext.cjs"),x=require("../Typography/Typography.cjs"),h=require("../Field/Field.cjs"),b=require("../Flex/Flex.cjs"),f=require("../Box/Box.cjs"),p=require("../Field/FieldHint.cjs"),q=require("../Field/FieldError.cjs"),j=require("../BaseCheckbox/BaseCheckbox.cjs"),y=e=>e&&e.__esModule?e:{default:e},F=y(d),g=F.default(x.Typography)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  }
`,C=e=>{const{id:t}=u.useField();return r.jsx(j.BaseCheckbox,{id:t,...e})},k=({children:e,disabled:t=!1,id:l,hint:o,error:n,...c})=>{const i=a.useId(l);let s;return n?s=`${i}-error`:o&&(s=`${i}-hint`),r.jsx(h.Field,{id:i,hint:o,error:n,children:r.jsxs(b.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[r.jsxs(g,{as:"label",textColor:"neutral800",disabled:t,children:[r.jsx(C,{disabled:t,"aria-describedby":s,...c}),r.jsx(f.Box,{paddingLeft:2,children:e})]}),r.jsx(p.FieldHint,{}),r.jsx(q.FieldError,{})]})})};exports.Checkbox=k;
