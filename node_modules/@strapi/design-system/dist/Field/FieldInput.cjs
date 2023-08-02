"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),j=require("react"),c=require("styled-components"),m=require("./FieldContext.cjs"),F=require("../themes/utils.cjs"),l=require("../Box/Box.cjs"),I=require("../Flex/Flex.cjs"),w=e=>e&&e.__esModule?e:{default:e},p=w(c),u={S:6.5,M:10.5},B=j.forwardRef(({endAction:e,startAction:r,disabled:o=!1,onChange:a,size:g="M",...$},b)=>{const{id:i,error:d,hint:h,name:x,required:y}=m.useField();let t;d?t=`${i}-error`:h&&(t=`${i}-hint`);const s=!!d,q=R=>{!o&&a&&a(R)};return n.jsxs(f,{justifyContent:"space-between",hasError:s,disabled:o,children:[r?n.jsx(l.Box,{paddingLeft:3,paddingRight:2,children:r}):null,n.jsx(_,{id:i,name:x,ref:b,"aria-describedby":t,"aria-invalid":s,"aria-disabled":o,disabled:o,"data-disabled":o?"":void 0,hasLeftAction:!!r,hasRightAction:!!e,onChange:q,"aria-required":y,$size:g,...$}),e?n.jsx(l.Box,{paddingLeft:2,paddingRight:3,children:e}):null]})}),_=p.default.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${u[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:r})=>r?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:r})=>r?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${u[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,f=p.default(I.Flex)`
  border: 1px solid ${({theme:e,hasError:r})=>r?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${F.inputFocusStyle()}

  ${({theme:e,disabled:r})=>r?c.css`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`;exports.FieldInput=B;exports.InputWrapper=f;
