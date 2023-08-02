"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),R=require("react"),k=require("styled-components"),m=require("../themes/utils.cjs"),_=require("../Box/Box.cjs"),S=require("../Flex/Flex.cjs"),B=require("../Field/FieldContext.cjs"),F=require("../VisuallyHidden/VisuallyHidden.cjs"),f=require("../Typography/Typography.cjs"),x=e=>e&&e.__esModule?e:{default:e},L=x(R),a=x(k),W=a.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,z=a.default(_.Box)`
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${m.inputFocusStyle()}
`,h=a.default(S.Flex).attrs({hasRadius:!0})`
  background-color: ${({theme:e,checked:o,disabled:l})=>o?l?e.colors.neutral200:e.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:e,checked:o,disabled:l})=>o&&o!==null?l?e.colors.neutral300:e.colors.neutral200:l?e.colors.neutral150:e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
`,M=a.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,g=L.default.forwardRef(({size:e="M",onLabel:o,offLabel:l,children:b,checked:r=!1,disabled:t=!1,onChange:u,...y},C)=>{const{error:d,hint:w,id:c,name:j,required:q}=B.useField(),p="neutral600";let T=!r&&r!==null?"danger700":p,$=r?"primary600":p;const v=s=>{t||u&&u(s)};let i;return d?i=`${c}-error`:w&&(i=`${c}-hint`),n.jsxs(W,{children:[n.jsx(F.VisuallyHidden,{children:b}),n.jsxs(z,{hasRadius:!0,disabled:t,padding:1,display:"flex",background:t?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",hasError:!!d,children:[n.jsx(h,{size:e,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:r===null?!1:!r,disabled:t,children:n.jsx(f.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:t?"neutral700":T,children:l})}),n.jsx(h,{size:e,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:r===null?!1:r,disabled:t,children:n.jsx(f.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:t?"neutral700":$,children:o})}),n.jsx(M,{type:"checkbox","aria-disabled":t,"aria-describedby":i,onChange:s=>v(s),name:j,ref:C,"aria-required":q,...y,checked:!(r===null||!r)})]})]})});g.displayName="ToggleCheckbox";exports.ToggleCheckbox=g;
