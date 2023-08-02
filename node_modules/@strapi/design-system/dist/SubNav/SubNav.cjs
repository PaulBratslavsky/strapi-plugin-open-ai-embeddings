"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),s=require("styled-components"),u=require("../Grid/Grid.cjs"),a=t=>t&&t.__esModule?t:{default:t},i=a(s),e=`${232/16}rem`,n=i.default(u.Grid)`
  width: ${e};
  background: ${({theme:t})=>t.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
  z-index: 1;
`,l=({ariaLabel:t,...r})=>o.jsx(n,{"aria-label":t,as:"nav",...r});exports.SubNav=l;exports.subNavWidth=e;
