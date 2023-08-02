"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),n=require("styled-components"),s=require("../../BaseLink/BaseLink.cjs"),i=e=>e&&e.__esModule?e:{default:e},l=i(n),u=l.default(s.BaseLink)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,o=({children:e,...r})=>t.jsx(u,{...r,children:e});o.displayName="CrumbLink";exports.CrumbLink=o;
