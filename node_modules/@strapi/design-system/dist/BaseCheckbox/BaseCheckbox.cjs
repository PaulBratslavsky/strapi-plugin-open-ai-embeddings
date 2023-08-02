"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react/jsx-runtime"),b=require("react"),p=require("styled-components"),f=require("./assets/checkmark-black.svg.cjs"),k=require("./assets/checkmark.svg.cjs"),l=require("./utils.cjs"),h=require("../Box/Box.cjs"),g=e=>e&&e.__esModule?e:{default:e};function x(e){if(e&&e.__esModule)return e;const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,t.get?t:{enumerable:!0,get:()=>e[r]})}}return o.default=e,Object.freeze(o)}const s=x(b),m=g(p),$=m.default.input`
  height: ${l.getCheckboxSize};
  min-width: ${l.getCheckboxSize};
  margin: 0;
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:e})=>e.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:e})=>e.colors.primary600};
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${k}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${f}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.neutral200};
    border: 1px solid ${({theme:e})=>e.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:e})=>e.colors.primary600};
    border: 1px solid ${({theme:e})=>e.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:e})=>e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:e})=>e.colors.neutral200};
      border: 1px solid ${({theme:e})=>e.colors.neutral300};
      &:after {
        background-color: ${({theme:e})=>e.colors.neutral500};
      }
    }
  }
`,i=({indeterminate:e=!1,size:o="M",name:r,value:t=!1,onValueChange:n,...u})=>{const c=s.useRef(null);s.useEffect(()=>{c.current&&e?c.current.indeterminate=e:c.current.indeterminate=!1},[e]);const d=()=>{n&&n(!t)};return a.jsx(h.Box,{children:a.jsx($,{size:o,checked:t,onChange:d,type:"checkbox",ref:c,name:r,...u})})};i.displayName="BaseCheckbox";exports.BaseCheckbox=i;
