"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),p=require("react"),g=require("styled-components"),f=require("./MainNavContext.cjs"),c=require("../../BaseLink/BaseLink.cjs"),d=require("../../Box/Box.cjs"),s=require("../../VisuallyHidden/VisuallyHidden.cjs"),j=require("../../Flex/Flex.cjs"),o=require("../../Typography/Typography.cjs"),u=e=>e&&e.__esModule?e:{default:e},y=u(p),h=u(g),l=h.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};

  svg,
  img {
    height: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
    width: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
  }
`,B=h.default(c.BaseLink)`
  text-decoration: unset;
  color: inherit;
`,m=y.default.forwardRef(({workplace:e,title:t,icon:i,...r},a)=>{const x=f.useMainNav();return r.to=r?.to??"/",x?n.jsx(c.BaseLink,{ref:a,...r,children:n.jsx(d.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:n.jsxs(l,{condensed:!0,children:[i,n.jsxs(s.VisuallyHidden,{children:[n.jsx("span",{children:t}),n.jsx("span",{children:e})]})]})})}):n.jsx(B,{ref:a,...r,children:n.jsx(d.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:n.jsxs(j.Flex,{children:[n.jsx(l,{"aria-hidden":!0,tabIndex:-1,children:i}),n.jsxs(d.Box,{paddingLeft:2,children:[n.jsxs(o.Typography,{fontWeight:"bold",textColor:"neutral800",as:"span",children:[t,n.jsx(s.VisuallyHidden,{as:"span",children:e})]}),n.jsx(o.Typography,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0,children:e})]})]})})})});exports.NavBrand=m;
