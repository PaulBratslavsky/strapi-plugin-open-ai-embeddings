"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),d=require("styled-components"),u=require("../Flex/Flex.cjs"),c=require("../Typography/Typography.cjs"),p=r=>r&&r.__esModule?r:{default:r},i=p(d),g=({children:r,icon:e,disabled:t=!1,onClick:a,...l})=>{const n=s=>{t||!a||a(s)};return o.jsxs(h,{as:"button",background:t?"neutral200":"primary100",color:t?"neutral700":"primary600",paddingLeft:3,paddingRight:3,onClick:n,"aria-disabled":t,disabled:t,borderWidth:"1px",borderStyle:"solid",borderColor:t?"neutral300":"primary200",hasRadius:!0,height:`${32/16}rem`,gap:2,...l,children:[o.jsx(y,{$disabled:t,variant:"pi",fontWeight:"bold",as:"span",children:r}),e]})},h=i.default(u.Flex)`
  & > svg {
    height: ${8/16}rem;
    width: ${8/16}rem;
  }

  & > svg path {
    fill: ${({theme:r,...e})=>e["aria-disabled"]?r.colors.neutral600:r.colors.primary600};
  }
`,y=i.default(c.Typography)`
  color: inherit;
  border-right: 1px solid ${({theme:r,$disabled:e})=>e?r.colors.neutral300:r.colors.primary200};
  padding-right: ${({theme:r})=>r.spaces[2]};
`;exports.Tag=g;
