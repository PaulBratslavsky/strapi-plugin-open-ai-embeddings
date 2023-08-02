"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),a=require("styled-components"),o=require("../Flex/Flex.cjs"),n=e=>e&&e.__esModule?e:{default:e},s=n(a),d=s.default.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`,c={S:88,M:164},l=s.default.div`
  display: flex;
  justify-content: center;
  height: ${({size:e})=>c[e]/16}rem;
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`,u=({size:e="M",children:i,...r})=>t.jsx(l,{size:e,children:i?t.jsx(o.Flex,{children:i}):t.jsx(d,{...r,"aria-hidden":!0})});exports.CardAsset=u;
