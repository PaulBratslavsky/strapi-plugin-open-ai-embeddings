"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),$=require("react"),y=require("styled-components"),f=require("./MainNavContext.cjs"),x=require("../../Box/Box.cjs"),j=require("../../BaseLink/BaseLink.cjs"),s=require("../../Typography/Typography.cjs"),h=require("../../Flex/Flex.cjs"),v=require("../../Badge/Badge.cjs"),m=require("../../Tooltip/Tooltip.cjs"),g=e=>e&&e.__esModule?e:{default:e},b=g($),a=g(y),c=a.default(x.Box)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`,d=a.default(j.BaseLink)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};

  ${s.Typography} {
    color: ${({theme:e})=>e.colors.neutral600};
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};

    ${s.Typography} {
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

    ${s.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: 500;
    }
  }
`,u=a.default(h.Flex)`
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
`,p=a.default(v.Badge)`
  ${({theme:e,condensed:o})=>o&&`
	  position: absolute;
    // Values based on visual aspect 
    top: -${e.spaces[3]};
    right:  -${e.spaces[1]};
  `}

  ${s.Typography} {
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
`,k=b.default.forwardRef(({children:e,icon:o,badgeContent:t,badgeAriaLabel:n,...i},l)=>f.useMainNav()?r.jsx(d,{ref:l,...i,children:r.jsx(m.Tooltip,{position:"right",label:e,children:r.jsxs(u,{as:"span",justifyContent:"center",children:[r.jsx(c,{"aria-hidden":!0,paddingRight:0,as:"span",children:o}),t&&r.jsx(p,{condensed:!0,"aria-label":n,children:t})]})})}):r.jsx(d,{ref:l,...i,children:r.jsxs(u,{as:"span",justifyContent:"space-between",children:[r.jsxs(h.Flex,{children:[r.jsx(c,{"aria-hidden":!0,paddingRight:3,as:"span",children:o}),r.jsx(s.Typography,{children:e})]}),t&&r.jsx(p,{justifyContent:"center","aria-label":n,children:t})]})}));exports.NavLink=k;
