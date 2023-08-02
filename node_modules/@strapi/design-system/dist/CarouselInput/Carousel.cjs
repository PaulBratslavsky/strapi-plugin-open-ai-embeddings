"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),_=require("react"),g=require("@strapi/icons"),T=require("styled-components"),x=require("../helpers/keyboardKeys.cjs"),k=require("../Tooltip/Tooltip.cjs"),i=require("../Box/Box.cjs"),j=require("../Flex/Flex.cjs"),y=require("../Icon/Icon.cjs"),w=require("../Typography/Typography.cjs"),A=e=>e&&e.__esModule?e:{default:e};function K(e){if(e&&e.__esModule)return e;const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}return n.default=e,Object.freeze(n)}const s=K(_),p=A(T),B=p.default(i.Box)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,D=p.default(j.Flex)`
  grid-area: slides;
`,b=p.default(i.Box)`
  grid-area: ${({area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,O=({actions:e,children:n,label:r,nextLabel:a,onNext:h,onPrevious:f,previousLabel:C,secondaryLabel:l,selectedSlide:m,...R})=>{const c=s.useRef(null),u=s.useRef(null),d=s.Children.map(n,(o,q)=>s.cloneElement(o,{selected:q===m})),v=o=>{switch(o.key){case x.KeyboardKeys.RIGHT:{o.preventDefault(),u?.current&&u.current.focus(),h();break}case x.KeyboardKeys.LEFT:{o.preventDefault(),c?.current&&c.current.focus(),f();break}}};return t.jsx(i.Box,{...R,onKeyDown:v,children:t.jsxs(i.Box,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[t.jsxs(B,{as:"section","aria-roledescription":"carousel","aria-label":r,display:"grid",position:"relative",children:[d&&d.length>1&&t.jsxs(t.Fragment,{children:[t.jsx(b,{as:"button",onClick:f,area:"startAction",ref:c,"aria-label":C,type:"button",children:t.jsx(y.Icon,{as:g.ChevronLeft,"aria-hidden":!0,width:"6px",height:"10px",color:"neutral600"})}),t.jsx(b,{as:"button",onClick:h,area:"endAction",ref:u,"aria-label":a,type:"button",children:t.jsx(y.Icon,{as:g.ChevronRight,"aria-hidden":!0,width:"6px",height:"10px",color:"neutral600"})})]}),t.jsx(D,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:d}),e]}),l&&t.jsx(i.Box,{paddingTop:2,paddingLeft:4,paddingRight:4,children:t.jsx(k.Tooltip,{label:l,children:t.jsx(j.Flex,{justifyContent:"center",children:t.jsx(w.Typography,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:l})})})})]})})};exports.Carousel=O;
