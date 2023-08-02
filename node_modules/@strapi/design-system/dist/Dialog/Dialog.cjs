"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),c=require("styled-components"),p=require("../DismissibleLayer/index.cjs"),x=require("../helpers/setOpacity.cjs"),g=require("../hooks/useId.cjs"),h=require("../hooks/useLockScroll.cjs"),y=require("../FocusTrap/FocusTrap.cjs"),o=require("../Box/Box.cjs"),b=require("../Flex/Flex.cjs"),f=require("../Portal/Portal.cjs"),j=require("../Typography/Typography.cjs"),q=e=>e&&e.__esModule?e:{default:e},t=q(c),m=t.default(o.Box)`
  inset: 0;
  background: ${({theme:e})=>x.setOpacity(e.colors.neutral800,.2)};
`,D=t.default(o.Box)`
  max-width: ${412/16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`,w=t.default(b.Flex)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,B=({onClose:e,title:i,as:s="h2",isOpen:n,id:l,...d})=>{const u=g.useId(l);if(h(n),!n)return null;const a=`${u}-label`;return r.jsx(f.Portal,{children:r.jsx(m,{padding:8,position:"fixed",zIndex:4,children:r.jsx(y.FocusTrap,{children:r.jsx(p.DismissibleLayer,{onEscapeKeyDown:e,onPointerDownOutside:e,children:r.jsxs(D,{"aria-labelledby":a,"aria-modal":!0,background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog",children:[r.jsx(w,{padding:6,justifyContent:"center",children:r.jsx(j.Typography,{variant:"beta",as:s,id:a,children:i})}),r.jsx(o.Box,{...d})]})})})})})};exports.Dialog=B;
