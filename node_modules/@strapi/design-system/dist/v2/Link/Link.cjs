"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),p=require("react"),d=require("@strapi/icons"),f=require("styled-components"),y=require("../../themes/utils.cjs"),m=require("../../BaseLink/BaseLink.cjs"),x=require("../../Typography/Typography.cjs"),i=e=>e&&e.__esModule?e:{default:e},g=i(p),k=i(f),q=k.default(m.BaseLink)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:r})=>e?r.colors.neutral600:r.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${y.buttonFocusStyle};
`,l=g.default.forwardRef(({children:e,href:r,disabled:o=!1,startIcon:a,endIcon:n,isExternal:s=!0,...c},u)=>t.jsxs(q,{ref:u,href:r,disabled:o,isExternal:s,...c,children:[a,t.jsx(x.Typography,{textColor:o?"neutral600":"primary600",children:e}),n,r&&!n&&s&&t.jsx(d.ExternalLink,{})]}));l.displayName="Link";exports.Link=l;
