"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),r=require("styled-components"),o=require("./MainNavContext.cjs"),a=require("../../Flex/Flex.cjs"),i=e=>e&&e.__esModule?e:{default:e},s=i(r),l=s.default(a.Flex)`
  width: ${({condensed:e})=>e?"max-content":`${224/16}rem`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`,u=({condensed:e=!1,...n})=>t.jsx(o.MainNavContext.Provider,{value:e,children:t.jsx(l,{alignItems:"normal",as:"nav",background:"neutral0",condensed:e,direction:"column",height:"100vh",position:"sticky",top:0,zIndex:2,...n})});exports.MainNav=u;
