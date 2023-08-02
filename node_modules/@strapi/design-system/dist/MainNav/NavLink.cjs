"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),h=require("react-router-dom"),g=require("styled-components"),$=require("./MainNavContext.cjs"),y=require("../Box/Box.cjs"),o=require("../Typography/Typography.cjs"),p=require("../Flex/Flex.cjs"),x=require("../Badge/Badge.cjs"),f=require("../Tooltip/Tooltip.cjs"),v=e=>e&&e.__esModule?e:{default:e},t=v(g),l=t.default(y.Box)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`,c=t.default(h.NavLink)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};

  ${o.Typography} {
    color: ${({theme:e})=>e.colors.neutral600};
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};

    ${o.Typography} {
      color: ${({theme:e})=>e.colors.neutral700};
    }

    svg path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &.active {
    background: ${({theme:e})=>e.colors.primary100};

    svg path {
      fill: ${({theme:e})=>e.colors.primary600};
    }

    ${o.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: 500;
    }
  }
`,d=t.default(p.Flex)`
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
`,u=t.default(x.Badge)`
  ${({theme:e,condensed:s})=>s&&`
	  position: absolute;
    // Values based on visual aspect 
    top: -${e.spaces[3]};
    right:  -${e.spaces[1]};
  `}

  ${o.Typography} {
    //find a solution to remove !important
    color: ${({theme:e})=>e.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({theme:e})=>e.spaces[6]};
  height: ${({theme:e})=>e.spaces[5]};
  padding: ${({theme:e})=>`0 ${e.spaces[2]}`};
  border-radius: ${({theme:e})=>e.spaces[10]};
  background: ${({theme:e})=>e.colors.primary600};
`,j=({children:e,icon:s,badgeContent:a,badgeAriaLabel:n,...i})=>$.useMainNav()?r.jsx(f.Tooltip,{position:"right",label:e,children:r.jsx(c,{...i,children:r.jsxs(d,{as:"span",children:[r.jsx(l,{"aria-hidden":!0,paddingRight:0,as:"span",children:s}),a&&r.jsx(u,{condensed:!0,"aria-label":n,children:a})]})})}):r.jsx(c,{...i,children:r.jsxs(d,{as:"span",justifyContent:"space-between",children:[r.jsxs(p.Flex,{children:[r.jsx(l,{"aria-hidden":!0,paddingRight:3,as:"span",children:s}),r.jsx(o.Typography,{children:e})]}),a&&r.jsx(u,{justifyContent:"center","aria-label":n,children:a})]})});exports.NavLink=j;
