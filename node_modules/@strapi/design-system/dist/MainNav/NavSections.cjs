"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),c=require("react"),d=require("styled-components"),a=require("../Box/Box.cjs"),u=require("../Flex/Flex.cjs"),n=e=>e&&e.__esModule?e:{default:e},f=n(c),g=n(d),x=g.default(a.Box)`
  flex-grow: 1;
  overflow-y: auto;
`,p=({children:e,spacing:r=4,horizontal:o=!1,...s})=>t.jsx(x,{paddingLeft:3,paddingRight:2,paddingTop:3,paddingBottom:8,children:t.jsx(u.Flex,{as:"ul",gap:r,direction:o?"row":"column",alignItems:o?"center":"stretch",...s,children:f.default.Children.map(e,(i,l)=>t.jsx("li",{children:i},l))})});exports.NavSections=p;
