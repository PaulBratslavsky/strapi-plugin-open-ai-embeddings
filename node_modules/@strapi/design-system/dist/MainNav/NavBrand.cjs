"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),i=require("react-router-dom"),u=require("styled-components"),p=require("./MainNavContext.cjs"),d=require("../Box/Box.cjs"),a=require("../VisuallyHidden/VisuallyHidden.cjs"),h=require("../Flex/Flex.cjs"),o=require("../Typography/Typography.cjs"),x=e=>e&&e.__esModule?e:{default:e},l=x(u),c=l.default.div`
  svg,
  img {
    border-radius: ${({theme:e})=>e.borderRadius};
    object-fit: contain;
    height: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
    width: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
  }
`,g=l.default(i.NavLink)`
  text-decoration: unset;
  color: inherit;
`,j=({workplace:e,title:t,icon:s,to:r="/"})=>p.useMainNav()?n.jsx(d.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:n.jsx(c,{condensed:!0,children:n.jsxs(i.NavLink,{to:r,children:[s,n.jsxs(a.VisuallyHidden,{children:[n.jsx("span",{children:t}),n.jsx("span",{children:e})]})]})})}):n.jsx(d.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:n.jsxs(h.Flex,{children:[n.jsx(c,{as:i.NavLink,to:r,"aria-hidden":!0,tabIndex:-1,children:s}),n.jsxs(d.Box,{paddingLeft:2,children:[n.jsx(o.Typography,{fontWeight:"bold",textColor:"neutral800",as:"span",children:n.jsxs(g,{to:r,children:[t,n.jsx(a.VisuallyHidden,{as:"span",children:e})]})}),n.jsx(o.Typography,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0,children:e})]})]})});exports.NavBrand=j;
