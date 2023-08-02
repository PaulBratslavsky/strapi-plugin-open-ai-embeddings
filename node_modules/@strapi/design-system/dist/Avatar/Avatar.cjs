"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react/jsx-runtime"),c=require("react"),d=require("styled-components"),t=require("./constants.cjs"),u=require("../Box/Box.cjs"),p=require("../Flex/Flex.cjs"),f=require("../Typography/Typography.cjs"),x=e=>e&&e.__esModule?e:{default:e};function h(e){if(e&&e.__esModule)return e;const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(a,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}return a.default=e,Object.freeze(a)}const g=h(c),o=x(d),v=o.default.img`
  border-radius: 50%;
  object-fit: cover;
  display: block;
  position: relative;
`,b=o.default.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  transform: translate(-${(t.previewSize-t.avatarSize)/2}px, -100%);
  margin-top: -${({theme:e})=>e.spaces[1]};
`,S=o.default(u.Box)`
  opacity: 0.4;
`,y=({src:e,alt:a,preview:r})=>{const[n,l]=g.useState(!1),s=!!(r&&n);return i.jsxs("span",{children:[s?i.jsx(b,{"aria-hidden":!0,alt:"",width:`${t.previewSize}px`,height:`${t.previewSize}px`,src:r===!0?e:typeof r=="string"?r:""}):null,i.jsxs(u.Box,{zIndex:s?1:void 0,position:"relative",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),width:`${t.avatarSize}px`,height:`${t.avatarSize}px`,children:[s?i.jsx(S,{background:"neutral0",borderRadius:"50%",position:"absolute",width:`${t.avatarSize}px`,height:`${t.avatarSize}px`,zIndex:1}):null,i.jsx(v,{src:e,alt:a,width:`${t.avatarSize}px`,height:`${t.avatarSize}px`})]})]})},j=o.default(p.Flex)`
  span {
    line-height: 0;
  }
`,z=({children:e,background:a="primary600",textColor:r="buttonNeutral0"})=>i.jsx(j,{background:a,borderRadius:"50%",width:`${t.avatarSize}px`,height:`${t.avatarSize}px`,justifyContent:"center",children:i.jsx(f.Typography,{fontSize:0,fontWeight:"bold",textColor:r,textTransform:"uppercase",children:e})});exports.Avatar=y;exports.Initials=z;
