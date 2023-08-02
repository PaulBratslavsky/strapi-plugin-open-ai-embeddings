"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),u=require("@strapi/icons"),v=require("react-router-dom"),y=require("styled-components"),d=require("./PaginationContext.cjs"),b=require("../themes/utils.cjs"),o=require("../VisuallyHidden/VisuallyHidden.cjs"),c=require("../Typography/Typography.cjs"),P=require("../Box/Box.cjs"),j=e=>e&&e.__esModule?e:{default:e},l=j(y),k={active:!0},h=l.default(v.NavLink).withConfig({shouldForwardProp:(e,i)=>!k[e]&&i(e)})`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({active:e,theme:i})=>e?i.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${b.buttonFocusStyle}
`,L=l.default(h)`
  color: ${({theme:e,active:i})=>i?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,active:i})=>i?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,g=l.default(h)`
  font-size: ${11/16}rem;

  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`,x=({children:e,to:i,...r})=>{const{activePage:a}=d.usePagination(),t=a===1;return n.jsxs(g,{to:t?"#":i,"aria-disabled":t,tabIndex:t?-1:void 0,...r,children:[n.jsx(o.VisuallyHidden,{children:e}),n.jsx(u.ChevronLeft,{"aria-hidden":!0})]})};x.displayName="PreviousLink";const f=({children:e,to:i,...r})=>{const{activePage:a,pageCount:t}=d.usePagination(),s=a===t;return n.jsxs(g,{to:s?"#":i,"aria-disabled":s,tabIndex:s?-1:void 0,...r,children:[n.jsx(o.VisuallyHidden,{children:e}),n.jsx(u.ChevronRight,{"aria-hidden":!0})]})};f.displayName="NextLink";const p=({number:e,children:i,...r})=>{const{activePage:a}=d.usePagination(),t=a===e;return n.jsxs(L,{...r,active:t,children:[n.jsx(o.VisuallyHidden,{children:i}),n.jsx(c.Typography,{"aria-hidden":!0,fontWeight:t?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})};p.displayName="PageLink";const $=({children:e,...i})=>n.jsxs(P.Box,{...i,children:[n.jsx(o.VisuallyHidden,{children:e}),n.jsx(c.Typography,{"aria-hidden":!0,lineHeight:"revert",textColor:"neutral800",variant:"pi",children:"…"})]});exports.Dots=$;exports.NextLink=f;exports.PageLink=p;exports.PreviousLink=x;
