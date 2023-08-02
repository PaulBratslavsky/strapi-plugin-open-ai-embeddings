"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),d=require("@strapi/icons"),u=require("styled-components"),c=require("../VisuallyHidden/VisuallyHidden.cjs"),t=require("../Flex/Flex.cjs"),i=require("../Box/Box.cjs"),s=require("../Typography/Typography.cjs"),h=e=>e&&e.__esModule?e:{default:e},p=h(u),y=p.default(t.Flex)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
  :last-of-type ${i.Box} {
    display: none;
  }
  :last-of-type ${s.Typography} {
    color: ${({theme:e})=>e.colors.neutral800};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
  }
`,l=({children:e})=>r.jsxs(y,{inline:!0,as:"li",children:[r.jsx(s.Typography,{variant:"pi",textColor:"neutral600",children:e}),r.jsx(i.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:r.jsx(d.ChevronRight,{})})]});l.displayName="Crumb";const n=({children:e,label:o,...a})=>r.jsxs(t.Flex,{...a,children:[r.jsx(c.VisuallyHidden,{children:o}),r.jsx("ol",{"aria-hidden":!0,children:e})]});n.displayName="Breadcrumbs";exports.Breadcrumbs=n;exports.Crumb=l;
