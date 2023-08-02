"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),p=require("react"),g=require("styled-components"),j=require("../hooks/useId.cjs"),b=require("../themes/utils.cjs"),d=require("../Box/Box.cjs"),m=require("../Field/FieldContext.cjs"),y=require("../Field/Field.cjs"),R=require("../Flex/Flex.cjs"),_=require("../Field/FieldLabel.cjs"),$=require("../Field/FieldHint.cjs"),E=require("../Field/FieldError.cjs"),c=e=>e&&e.__esModule?e:{default:e},f=c(p),x=c(g),I=x.default(d.Box)`
  ${b.inputFocusStyle()}
`,S=x.default(d.Box)`
  border: none;
  resize: none;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    font-size: ${({theme:e})=>e.fontSizes[2]};
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,T=f.default.forwardRef(({disabled:e,...a},s)=>{const{id:t,error:i,hint:l,required:u}=m.useField(),n=!!i;let o=l?`${t}-hint`:void 0;return i&&(o=`${t}-error`),r.jsx(I,{borderColor:n?"danger600":"neutral200",hasError:n,hasRadius:!0,children:r.jsx(S,{"aria-describedby":o,"aria-invalid":n,"aria-required":u,as:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,height:`${105/16}rem`,id:t,ref:s,lineHeight:4,padding:4,width:"100%",...a})})}),w=f.default.forwardRef(({name:e,hint:a,error:s,label:t,labelAction:i,id:l,required:u=!1,children:n,value:o,...h},q)=>{const F=j.useId(l);return r.jsx(y.Field,{name:e,hint:a,error:s,id:F,required:u,children:r.jsxs(R.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[t&&r.jsx(_.FieldLabel,{action:i,children:t}),r.jsx(T,{ref:q,value:n??o,...h}),r.jsx($.FieldHint,{}),r.jsx(E.FieldError,{})]})})});exports.Textarea=w;
