"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("styled-components"),n=require("../Stack/Stack.cjs"),s=t=>t&&t.__esModule?t:{default:t},o=s(r),a=o.default(n.Stack).attrs({horizontal:!0,spacing:2})`
  position: absolute;
  top: ${({theme:t})=>t.spaces[3]};
  right: ${({position:t,theme:e})=>{if(t==="end")return e.spaces[3]}};
  left: ${({position:t,theme:e})=>{if(t==="start")return e.spaces[3]}};
`;exports.CardAction=a;
