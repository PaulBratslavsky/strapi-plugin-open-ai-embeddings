"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react/jsx-runtime"),d=require("@strapi/icons"),p=require("react-router-dom"),g=require("styled-components"),t=require("../Box/Box.cjs"),n=require("../Typography/Typography.cjs"),i=require("../Flex/Flex.cjs"),f=r=>r&&r.__esModule?r:{default:r},s=f(g),x=s.default(t.Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:r})=>r.colors.neutral800};
  svg > * {
    fill: ${({theme:r})=>r.colors.neutral600};
  }

  &.active {
    ${({theme:r})=>`
      background-color: ${r.colors.primary100};
      border-right: 2px solid ${r.colors.primary600};
      svg > * {
        fill: ${r.colors.primary700};
      }
      ${n.Typography} {
        color: ${r.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,l=s.default(d.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:r,$active:o})=>o?r.colors.primary600:r.colors.neutral600};
  }
`,y=s.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,h=({children:r,icon:o,withBullet:a=!1,isSubSectionChild:c=!1,...u})=>e.jsxs(x,{as:p.NavLink,icon:o,background:"neutral100",paddingLeft:c?9:7,paddingBottom:2,paddingTop:2,...u,children:[e.jsxs(i.Flex,{children:[o?e.jsx(y,{children:o}):e.jsx(l,{}),e.jsx(t.Box,{paddingLeft:2,children:e.jsx(n.Typography,{as:"span",children:r})})]}),a&&e.jsx(t.Box,{as:i.Flex,paddingRight:4,children:e.jsx(l,{$active:!0})})]});exports.SubNavLink=h;
