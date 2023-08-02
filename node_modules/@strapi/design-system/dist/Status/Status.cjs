"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),p=require("styled-components"),b=require("../Box/Box.cjs"),x=require("../Typography/Typography.cjs"),$=require("../Flex/Flex.cjs"),h=o=>o&&o.__esModule?o:{default:o},u=h(p),y=u.default.div`
  margin-right: ${({theme:o})=>o.spaces[3]};
  width: ${6/16}rem;
  height: ${6/16}rem;
  border-radius: 50%;
  background: ${({theme:o,backgroundColor:t})=>o.colors[t]};
`,f=u.default(b.Box)`
  ${x.Typography} {
    color: ${({theme:o,textColor:t})=>o.colors[t]};
  }
`,m=({variant:o="primary",showBullet:t=!0,size:e="M",children:s,...l})=>{const c=`${o}100`,a=`${o}200`,i=`${o}600`,g=`${o}600`,d=e==="S"?2:5,n=e==="S"?1:4;return r.jsx(f,{borderColor:a,textColor:g,background:c,hasRadius:!0,paddingTop:n,paddingBottom:n,paddingLeft:d,paddingRight:d,...l,children:t?r.jsxs($.Flex,{children:[r.jsx(y,{backgroundColor:i}),s]}):s})};exports.Status=m;
