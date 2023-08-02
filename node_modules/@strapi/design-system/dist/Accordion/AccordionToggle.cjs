"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),A=require("@strapi/icons"),F=require("styled-components"),M=require("./Accordion.cjs"),B=require("./AccordionContext.cjs"),R=require("./utils.cjs"),z=require("../TextButton/TextButton.cjs"),I=require("../Icon/Icon.cjs"),d=require("../Flex/Flex.cjs"),S=require("../Typography/Typography.cjs"),_=e=>e&&e.__esModule?e:{default:e},m=_(F),D=m.default(z.TextButton)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:e,expanded:t})=>t?e.colors.primary600:e.colors.neutral500};
    }
  }
`,W=m.default(d.Flex)`
  min-height: ${({theme:e,size:t})=>e.sizes.accordions[t]};
  border-radius: ${({theme:e,expanded:t})=>t?`${e.borderRadius} ${e.borderRadius} 0 0`:e.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }
`,P=({title:e,description:t,as:y="span",togglePosition:s="right",action:u,...$})=>{const{onToggle:c,toggle:p,expanded:r,id:l,size:n,variant:j,disabled:i}=B.useAccordion(),w=`accordion-content-${l}`,g=`accordion-label-${l}`,T=`accordion-desc-${l}`,a=n==="M"?6:4,h=n==="M"?a:a-2,C=R.getBackground({expanded:r,disabled:i,variant:j}),q={as:y,fontWeight:n==="S"?"bold":void 0,id:g,textColor:r?"primary600":"neutral700",ellipsis:!0,variant:n==="M"?"delta":void 0},k=r?"primary600":"neutral600",v=r?"primary200":"neutral200",x=n==="M"?`${32/16}rem`:`${24/16}rem`,f=()=>{i||(p&&!c?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),p()):c&&c())},b=o.jsx(d.Flex,{justifyContent:"center",borderRadius:"50%",height:x,width:x,transform:r?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:v,cursor:i?"not-allowed":"pointer",onClick:f,shrink:0,children:o.jsx(I.Icon,{as:A.CarretDown,width:n==="M"?`${11/16}rem`:`${8/16}rem`,color:r?"primary600":"neutral600"})});return o.jsx(W,{paddingBottom:h,paddingLeft:a,paddingRight:a,paddingTop:h,background:C,expanded:r,size:n,justifyContent:"space-between",cursor:i?"not-allowed":"",children:o.jsxs(d.Flex,{gap:3,flex:1,maxWidth:"100%",children:[s==="left"&&b,o.jsx(D,{onClick:f,"aria-disabled":i,"aria-expanded":r,"aria-controls":w,"aria-labelledby":g,"data-strapi-accordion-toggle":!0,expanded:r,type:"button",flex:1,minWidth:0,...$,children:o.jsxs(o.Fragment,{children:[o.jsx(M.AccordionTypography,{...q,children:e}),t&&o.jsx(S.Typography,{as:"p",id:T,textColor:k,children:t})]})}),s==="right"&&o.jsxs(d.Flex,{gap:3,children:[b,u]}),s==="left"&&u]})})};exports.AccordionToggle=P;
