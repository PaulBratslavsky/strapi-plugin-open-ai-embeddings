"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),g=require("react"),x=require("@strapi/icons"),y=require("styled-components"),t=require("../../Box/Box.cjs"),n=require("../../Typography/Typography.cjs"),i=require("../../Flex/Flex.cjs"),h=require("../../BaseLink/BaseLink.cjs"),a=e=>e&&e.__esModule?e:{default:e},$=a(g),s=a(y),j=s.default(t.Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${n.Typography} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,l=s.default(x.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:o})=>o?e.colors.primary600:e.colors.neutral600};
  }
`,v=s.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,b=$.default.forwardRef(({children:e,icon:o=null,withBullet:c=!1,as:u=h.BaseLink,isSubSectionChild:d=!1,...p},f)=>r.jsxs(j,{as:u,icon:o,background:"neutral100",paddingLeft:d?9:7,paddingBottom:2,paddingTop:2,ref:f,...p,children:[r.jsxs(i.Flex,{children:[o?r.jsx(v,{children:o}):r.jsx(l,{}),r.jsx(t.Box,{paddingLeft:2,children:r.jsx(n.Typography,{as:"span",children:e})})]}),c&&r.jsx(t.Box,{as:i.Flex,paddingRight:4,children:r.jsx(l,{$active:!0})})]}));exports.SubNavLink=b;
