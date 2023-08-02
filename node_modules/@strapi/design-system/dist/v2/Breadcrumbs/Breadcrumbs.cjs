"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),i=require("react"),u=require("styled-components"),h=require("./Divider.cjs"),s=require("../../Flex/Flex.cjs"),m=require("../../Box/Box.cjs"),b=e=>e&&e.__esModule?e:{default:e},f=b(u),x=f.default(s.Flex)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,n=({label:e,children:a,...l})=>{const r=i.Children.toArray(a);return t.jsx(m.Box,{"aria-label":e,...l,children:t.jsx(x,{as:"ol",children:i.Children.map(r,(o,c)=>{const d=r.length>1&&c+1<r.length;return t.jsxs(s.Flex,{inline:!0,as:"li",children:[o,d&&t.jsx(h.Divider,{})]})})})})};n.displayName="Breadcrumbs";exports.Breadcrumbs=n;
