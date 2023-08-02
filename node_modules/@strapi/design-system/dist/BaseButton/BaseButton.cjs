"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("react/jsx-runtime"),l=require("react"),c=require("styled-components"),i=require("../themes/utils.cjs"),d=require("../Flex/Flex.cjs"),p=e=>e&&e.__esModule?e:{default:e};function f(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const b=f(l),g=p(c),o=g.default(d.Flex)`
  > svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${i.buttonFocusStyle}
`,a=b.forwardRef(({disabled:e,children:r,background:t="neutral0",...n},s)=>u.jsx(o,{ref:s,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:t,borderColor:"neutral200",cursor:"pointer",...n,children:r}));a.displayName="BaseButton";exports.BaseButton=a;exports.BaseButtonWrapper=o;
