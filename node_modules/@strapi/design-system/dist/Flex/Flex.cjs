"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("styled-components"),o=require("../helpers/handleResponsiveValues.cjs"),l=require("../Box/Box.cjs"),i=e=>e&&e.__esModule?e:{default:e},r=i(n),s={direction:!0},u=r.default(l.Box).withConfig({shouldForwardProp:(e,t)=>!s[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>o("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`;exports.Flex=u;
