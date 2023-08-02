"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("styled-components"),i=require("../Box/Box.cjs"),o=e=>e&&e.__esModule?e:{default:e},d=o(t),r=d.default(i.Box)`
  grid-column: span ${({col:e})=>e};
  max-width: 100%;

  ${({theme:e})=>e.mediaQueries.tablet} {
    grid-column: span ${({s:e})=>e};
  }

  ${({theme:e})=>e.mediaQueries.mobile} {
    grid-column: span ${({xs:e})=>e};
  }
`;exports.GridItem=r;
