"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),c=require("@strapi/icons"),u=require("styled-components"),x=require("../Flex/Flex.cjs"),o=require("../Box/Box.cjs"),a=require("../Typography/Typography.cjs"),g=e=>e&&e.__esModule?e:{default:e},s=g(u),i=s.default(x.Flex)`
  border: none;
  padding: 0;
  background: transparent;
`,p=s.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,h=({collapsable:e=!1,label:t,onClick:d=()=>{},ariaExpanded:n,ariaControls:l})=>e?r.jsxs(i,{as:"button",onClick:d,"aria-expanded":n,"aria-controls":l,textAlign:"left",children:[r.jsx(o.Box,{paddingRight:1,children:r.jsx(a.Typography,{variant:"sigma",textColor:"neutral600",children:t})}),e&&r.jsx(p,{rotated:n,children:r.jsx(c.CarretDown,{"aria-hidden":!0})})]}):r.jsx(i,{children:r.jsx(o.Box,{paddingRight:1,children:r.jsx(a.Typography,{variant:"sigma",textColor:"neutral600",children:t})})});exports.SubNavSectionLabel=h;
