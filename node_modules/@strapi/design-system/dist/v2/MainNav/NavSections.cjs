"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),l=require("react"),c=require("styled-components"),d=require("../../Box/Box.cjs"),u=require("../../Flex/Flex.cjs"),a=e=>e&&e.__esModule?e:{default:e},g=a(c),x=g.default(d.Box)`
  flex-grow: 1;
  overflow-y: auto;
`,f=({children:e,spacing:r=4,horizontal:o=!1,...n})=>t.jsx(x,{paddingLeft:3,paddingRight:2,paddingTop:3,paddingBottom:8,children:t.jsx(u.Flex,{as:"ul",gap:r,direction:o?"row":"column",alignItems:o?"center":"stretch",...n,children:l.Children.map(e,(i,s)=>t.jsx("li",{children:i},s))})});exports.NavSections=f;
