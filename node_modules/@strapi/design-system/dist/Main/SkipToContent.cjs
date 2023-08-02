"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react/jsx-runtime"),o=require("styled-components"),n=require("../Box/Box.cjs"),s=t=>t&&t.__esModule?t:{default:t},r=s(o),a=r.default(n.Box)`
  text-decoration: none;

  &:focus {
    left: ${({theme:t})=>t.spaces[3]};
    top: ${({theme:t})=>t.spaces[3]};
  }
`,u=({children:t})=>e.jsx(a,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:t});exports.SkipToContent=u;
