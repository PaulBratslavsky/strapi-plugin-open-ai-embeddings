"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),o=require("@strapi/icons"),s=require("styled-components"),i=require("./MainNavContext.cjs"),d=require("../Icon/Icon.cjs"),a=require("../VisuallyHidden/VisuallyHidden.cjs"),u=e=>e&&e.__esModule?e:{default:e},l=u(s),c=l.default.button`
  background: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${(9+4)/16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({theme:e,condensed:t})=>t?0:e.spaces[5]};
  transform: ${({condensed:e})=>e?"translateX(50%)":void 0};
  z-index: 2;
  width: ${18/16}rem;
  height: ${25/16}rem;

  svg {
    width: ${6/16}rem;
    height: ${9/16}rem;
  }
`,h=({children:e,...t})=>{const r=i.useMainNav();return n.jsxs(c,{as:"button",condensed:r,...t,children:[n.jsx(d.Icon,{as:r?o.ChevronRight:o.ChevronLeft,"aria-hidden":!0,color:"neutral600"}),n.jsx(a.VisuallyHidden,{children:e})]})};exports.NavCondense=h;
