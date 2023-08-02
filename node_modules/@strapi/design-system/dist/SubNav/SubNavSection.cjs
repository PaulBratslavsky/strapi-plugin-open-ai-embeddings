"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),x=require("react"),S=require("styled-components"),f=require("./SubNavSectionLabel.cjs"),j=require("../hooks/useId.cjs"),l=require("../Box/Box.cjs"),b=require("../Flex/Flex.cjs"),m=require("../Badge/Badge.cjs"),a=e=>e&&e.__esModule?e:{default:e},s=a(x),q=a(S),v=q.default(l.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,_=({collapsable:e=!1,label:c,badgeLabel:n,children:d,id:u})=>{const[r,p]=s.default.useState(!0),i=j.useId(u),g=()=>{p(o=>!o)};return t.jsxs(b.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[t.jsx(v,{paddingLeft:6,paddingTop:1,paddingBottom:1,paddingRight:4,children:t.jsxs(l.Box,{position:"relative",paddingRight:n?6:0,children:[t.jsx(f.SubNavSectionLabel,{onClick:g,ariaExpanded:r,ariaControls:i,collapsable:e,label:c}),n&&t.jsx(m.Badge,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:n})]})}),(!e||r)&&t.jsx("ol",{id:i,children:s.default.Children.map(d,(o,h)=>t.jsx("li",{children:o},h))})]})};exports.SubNavSection=_;
