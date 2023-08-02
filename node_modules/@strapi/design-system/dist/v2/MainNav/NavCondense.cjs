"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),o=require("@strapi/icons"),s=require("styled-components"),i=require("./MainNavContext.cjs"),d=require("../../Flex/Flex.cjs"),a=require("../../Icon/Icon.cjs"),u=require("../../VisuallyHidden/VisuallyHidden.cjs"),l=e=>e&&e.__esModule?e:{default:e},c=l(s),h=c.default(d.Flex).attrs(e=>({justifyContent:"center",...e}))`
  background: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
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
`,g=({children:e,...t})=>{const r=i.useMainNav();return n.jsxs(h,{as:"button",condensed:r,...t,children:[n.jsx(a.Icon,{as:r?o.ChevronRight:o.ChevronLeft,"aria-hidden":!0,color:"neutral600"}),n.jsx(u.VisuallyHidden,{children:e})]})};exports.NavCondense=g;
