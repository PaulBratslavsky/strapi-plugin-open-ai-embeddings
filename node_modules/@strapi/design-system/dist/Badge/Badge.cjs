"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),u=require("styled-components"),l=require("../Flex/Flex.cjs"),c=require("../Typography/Typography.cjs"),g=e=>e&&e.__esModule?e:{default:e},p=g(u),y=p.default(l.Flex)`
  border-radius: ${({theme:e,size:t})=>t==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:t})=>t.sizes.badge[e]};
`,f=({active:e=!1,size:t="M",textColor:i="neutral600",backgroundColor:a="neutral150",children:d,minWidth:s=5,...o})=>{const r=t==="S"?1:2;return n.jsx(y,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:s,paddingLeft:r,paddingRight:r,background:e?"primary200":a,size:t,...o,children:n.jsx(c.Typography,{variant:"sigma",textColor:e?"primary600":i,children:d})})};exports.Badge=f;
