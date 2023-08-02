"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),s=require("react"),h=require("styled-components"),x=require("./SubNavSectionLabel.cjs"),S=require("../../hooks/useId.cjs"),l=require("../../Box/Box.cjs"),f=require("../../Flex/Flex.cjs"),j=require("../../Badge/Badge.cjs"),b=e=>e&&e.__esModule?e:{default:e},m=b(h),q=m.default(l.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,v=({collapsable:e=!1,label:a,badgeLabel:n,children:c,id:d})=>{const[i,u]=s.useState(!0),o=S.useId(d),p=()=>{u(r=>!r)};return t.jsxs(f.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[t.jsx(q,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:t.jsxs(l.Box,{position:"relative",paddingRight:n?6:0,children:[t.jsx(x.SubNavSectionLabel,{onClick:p,ariaExpanded:i,ariaControls:o,collapsable:e,label:a}),n&&t.jsx(j.Badge,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:n})]})}),(!e||i)&&t.jsx("ol",{id:o,children:s.Children.map(c,(r,g)=>t.jsx("li",{children:r},g))})]})};exports.SubNavSection=v;
