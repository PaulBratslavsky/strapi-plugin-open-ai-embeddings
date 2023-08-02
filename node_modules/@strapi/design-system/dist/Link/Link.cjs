"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),g=require("react"),y=require("@strapi/icons"),m=require("react-router-dom"),x=require("styled-components"),j=require("../themes/utils.cjs"),c=require("../Typography/Typography.cjs"),_=require("../Box/Box.cjs"),h=e=>e&&e.__esModule?e:{default:e};function b(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const q=b(g),l=h(x),v=l.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:e})=>e?"none":void 0};
  color: ${({disabled:e,theme:r})=>e?r.colors.neutral600:r.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${c.Typography} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${j.buttonFocusStyle};
`,i=l.default(_.Box)`
  display: flex;
`,k=q.forwardRef(({children:e,href:r,to:t,disabled:n=!1,startIcon:a,endIcon:s,...u},d)=>{const p=r?"_blank":void 0,f=r?"noreferrer noopener":void 0;return o.jsxs(v,{as:t&&!n?m.NavLink:"a",target:p,rel:f,to:n?void 0:t,href:n?"#":r,disabled:n,ref:d,...u,children:[a&&o.jsx(i,{as:"span","aria-hidden":!0,paddingRight:2,children:a}),o.jsx(c.Typography,{children:e}),s&&!r&&o.jsx(i,{as:"span","aria-hidden":!0,paddingLeft:2,children:s}),r&&o.jsx(i,{as:"span","aria-hidden":!0,paddingLeft:2,children:o.jsx(y.ExternalLink,{})})]})});exports.Link=k;
