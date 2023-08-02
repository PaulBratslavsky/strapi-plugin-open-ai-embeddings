"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),h=require("react"),f=require("styled-components"),p=require("../Flex/Flex.cjs"),b=require("../Box/Box.cjs"),i=e=>e&&e.__esModule?e:{default:e},g=i(h),c=i(f),n=c.default.div`
  background: ${({theme:e})=>e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:e})=>e?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:e})=>e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:e})=>e.spaces[1]};
    top: ${({theme:e})=>e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,x=c.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${n} {
    background: ${({theme:e})=>e.colors.success500};
  }

  &[aria-checked='true'] ${n}:before {
    transform: translateX(1rem);
  }
`,m=g.default.forwardRef(({label:e,onChange:d,onLabel:o="On",offLabel:s="Off",selected:t,visibleLabels:a=!1,...u},l)=>r.jsx(x,{ref:l,role:"switch","aria-checked":t,"aria-label":e,onClick:d,visibleLabels:a,type:"button",...u,children:r.jsxs(p.Flex,{children:[r.jsxs(n,{children:[r.jsx("span",{children:o}),r.jsx("span",{children:s})]}),a&&r.jsx(b.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:t?"success600":"danger600",children:t?o:s})]})}));exports.Switch=m;
