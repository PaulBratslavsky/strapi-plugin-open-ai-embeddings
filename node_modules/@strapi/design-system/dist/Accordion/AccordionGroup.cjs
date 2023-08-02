"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),p=require("react"),b=require("styled-components"),x=require("../KeyboardNavigable/KeyboardNavigable.cjs"),s=require("../Box/Box.cjs"),f=require("../Flex/Flex.cjs"),n=require("../Typography/Typography.cjs"),g=r=>r&&r.__esModule?r:{default:r};function y(r){if(r&&r.__esModule)return r;const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const t in r)if(t!=="default"){const d=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,d.get?d:{enumerable:!0,get:()=>r[t]})}}return e.default=r,Object.freeze(e)}const l=y(p),a=g(b),$=a.default(s.Box)`
  border-bottom: 1px solid ${({theme:r})=>r.colors.neutral200};
  border-right: 1px solid ${({theme:r})=>r.colors.neutral200};
  border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
`,h=a.default(s.Box)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-bottom: 1px solid ${({theme:r})=>r.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-radius: ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius} 0 0;
    & > * {
      border-radius: ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({theme:r})=>r.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({theme:r})=>r.colors.primary600};
  }

  ${({theme:r,footer:e})=>`
    &:not(${e}) {
      & > *:last-of-type {
        border-radius: 0 0 ${r.borderRadius} ${r.borderRadius};
      }
    }
  `}
`,j=a.default(s.Box)`
  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,m=({children:r,footer:e,label:t,labelAction:d,error:i})=>{const u=l.Children.toArray(r).map(c=>l.cloneElement(c,{hasErrorMessage:!1}));return o.jsxs(x.KeyboardNavigable,{attributeName:"data-strapi-accordion-toggle",children:[t&&o.jsxs(f.Flex,{paddingBottom:1,children:[o.jsx(n.Typography,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold",children:t}),d&&o.jsx(j,{paddingLeft:1,children:d})]}),o.jsx(h,{footer:e,children:u}),e&&o.jsx($,{children:e}),i&&o.jsx(s.Box,{paddingTop:1,children:o.jsx(n.Typography,{variant:"pi",textColor:"danger600",children:i})})]})};exports.AccordionGroup=m;
