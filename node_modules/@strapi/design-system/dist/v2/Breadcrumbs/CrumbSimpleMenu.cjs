"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),o=require("styled-components"),s=require("../SimpleMenu/SimpleMenu.cjs"),l=require("../../Button/Button.cjs"),r=e=>e&&e.__esModule?e:{default:e},i=r(o),c=i.default(l.Button)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,t=({children:e,...u})=>n.jsx(s.SimpleMenu,{endIcon:null,as:c,size:"S",...u,children:e});t.displayName="CrumbSimpleMenu";exports.CrumbSimpleMenu=t;
