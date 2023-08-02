"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),n=require("@strapi/icons"),p=require("styled-components"),l=require("./utils.cjs"),f=require("../themes/utils.cjs"),u=require("../Box/Box.cjs"),a=require("../Flex/Flex.cjs"),d=require("../Typography/Typography.cjs"),C=e=>e&&e.__esModule?e:{default:e},i=C(p),j=i.default(u.Box)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }

  ${f.buttonFocusStyle};
`,b=i.default(a.Flex)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${l.handleIconColor};
    }
  }
`,m=({variant:e,...o})=>e==="success"?r.jsx(n.CheckCircle,{...o}):e==="danger"||e==="warning"?r.jsx(n.ExclamationMarkCircle,{...o}):r.jsx(n.Information,{...o}),y=i.default(u.Box)`
  & a > span {
    color: ${l.handleIconColor};
  }

  svg path {
    fill: ${l.handleIconColor};
  }
`,w=({title:e,children:o,variant:t="default",onClose:c,closeLabel:h,titleAs:g="p",action:s,...x})=>r.jsxs(a.Flex,{alignItems:"flex-start",background:l.handleBackgroundColor(t),borderColor:l.handleBorderColor(t),boxShadow:"filterShadow",gap:3,hasRadius:!0,padding:5,paddingRight:6,variant:t,...x,children:[r.jsx(b,{height:`${20/16}rem`,shrink:0,variant:t,width:`${20/16}rem`,children:r.jsx(m,{"aria-hidden":!0,variant:t})}),r.jsxs(a.Flex,{alignItems:"start",gap:s?2:1,wrap:"wrap",role:t==="danger"?"alert":"status",width:"100%",children:[r.jsx(d.Typography,{fontWeight:"bold",textColor:"neutral800",as:g,children:e}),r.jsx(d.Typography,{as:"p",textColor:"neutral800",children:o}),s&&r.jsx(y,{variant:t,children:s})]}),r.jsx(j,{as:"button",background:"transparent",borderColor:void 0,height:`${12/16}rem`,marginTop:1,onClick:c,width:`${12/16}rem`,"aria-label":h,children:r.jsx(n.Cross,{"aria-hidden":!0})})]});exports.Alert=w;
