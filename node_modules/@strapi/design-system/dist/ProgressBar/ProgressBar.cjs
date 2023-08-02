"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("react/jsx-runtime"),i=require("styled-components"),l=require("../Box/Box.cjs"),n=r=>r&&r.__esModule?r:{default:r},d=n(i),c=d.default(l.Box)`
  &:before {
    background-color: ${({theme:r})=>r.colors.neutral0};
    border-radius: ${({theme:r})=>r.borderRadius};
    bottom: 0;
    content: '';
    position: absolute;
    top: 0;
    width: ${({value:r})=>`${r}%`};
  }
`,b=({min:r=0,max:t=100,value:e=0,children:a,size:o="M",...s})=>u.jsx(c,{background:"neutral600",hasRadius:!0,"aria-label":a,"aria-valuemax":t,"aria-valuemin":r,"aria-valuenow":e,height:o==="S"?1:2,position:"relative",role:"progressbar",value:e,width:o==="S"?"78px":"102px",...s});exports.ProgressBar=b;
