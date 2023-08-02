"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),p=require("react"),c=require("@strapi/icons"),v=require("styled-components"),d=require("./PaginationContext.cjs"),y=require("../../themes/utils.cjs"),b=require("../../BaseLink/BaseLink.cjs"),s=require("../../VisuallyHidden/VisuallyHidden.cjs"),h=require("../../Typography/Typography.cjs"),P=require("../../Box/Box.cjs"),f=e=>e&&e.__esModule?e:{default:e},l=f(p),u=f(v),j={active:!0},g=u.default(b.BaseLink).withConfig({shouldForwardProp:(e,i)=>!j[e]&&i(e)})`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({active:e,theme:i})=>e?i.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${y.buttonFocusStyle}
`,k=u.default(g)`
  color: ${({theme:e,active:i})=>i?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,active:i})=>i?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,x=u.default(g)`
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
`,L=l.default.forwardRef(({children:e,...i},t)=>{const{activePage:a}=d.usePagination(),r=a===1;return n.jsxs(x,{ref:t,"aria-disabled":r,tabIndex:r?-1:void 0,...i,children:[n.jsx(s.VisuallyHidden,{children:e}),n.jsx(c.ChevronLeft,{"aria-hidden":!0})]})}),w=l.default.forwardRef(({children:e,...i},t)=>{const{activePage:a,pageCount:r}=d.usePagination(),o=a===r;return n.jsxs(x,{ref:t,"aria-disabled":o,tabIndex:o?-1:void 0,...i,children:[n.jsx(s.VisuallyHidden,{children:e}),n.jsx(c.ChevronRight,{"aria-hidden":!0})]})}),$=l.default.forwardRef(({number:e,children:i,...t},a)=>{const{activePage:r}=d.usePagination(),o=r===e;return n.jsxs(k,{ref:a,...t,active:o,children:[n.jsx(s.VisuallyHidden,{children:i}),n.jsx(h.Typography,{"aria-hidden":!0,fontWeight:o?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})}),q=({children:e,...i})=>n.jsxs(P.Box,{...i,children:[n.jsx(s.VisuallyHidden,{children:e}),n.jsx(h.Typography,{"aria-hidden":!0,lineHeight:"revert",textColor:"neutral800",variant:"pi",children:"…"})]});exports.Dots=q;exports.NextLink=w;exports.PageLink=$;exports.PreviousLink=L;
