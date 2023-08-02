"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("react/jsx-runtime"),d=require("react"),g=require("styled-components"),R=require("./context.cjs"),t=require("./utils.cjs"),y=require("../hooks/useId.cjs"),r=e=>e&&e.__esModule?e:{default:e},m=r(d),h=r(g),S=h.default.input`
  margin: 0;
  padding: 0;
  background-color: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 50%;
  height: ${({size:e})=>typeof e=="number"?e:t.getRadioSize(e)};
  width: ${({size:e})=>typeof e=="number"?e:t.getRadioSize(e)};
  -webkit-appearance: none;

  &:after {
    border-radius: 50%;
    content: '';
    position: relative;
    z-index: 1;
    display: block;
    height: ${({size:e})=>typeof e=="number"?e:t.getSelectedRadioSize(e)};
    width: ${({size:e})=>typeof e=="number"?e:t.getSelectedRadioSize(e)};
    left: ${t.getSelectedRadioPosition};
    top: ${t.getSelectedRadioPosition};
  }

  &:checked:after {
    background: ${({theme:e})=>e.colors.primary600};
  }

  &:disabled {
    border: 1px solid ${({theme:e})=>e.colors.neutral300};
    background: ${({theme:e})=>e.colors.neutral200};
  }
`,a=m.default.forwardRef(({value:e,disabled:n=!1,...i},c)=>{const s=y.useId(),{onChange:l,selected:u,name:p,size:b}=d.useContext(R.RadioContext),o=u===e;return f.jsx(S,{ref:c,type:"radio",name:p,value:e,tabIndex:o?0:-1,"aria-checked":o,checked:o,disabled:n,id:s,size:b,onChange:l,...i})});a.displayName="Radio";exports.BaseRadio=a;
