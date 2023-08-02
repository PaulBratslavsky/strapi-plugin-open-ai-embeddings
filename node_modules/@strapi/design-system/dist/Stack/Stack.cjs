"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react/jsx-runtime"),u=require("react"),m=require("styled-components"),s=require("../helpers/theme.cjs"),o=require("../Flex/Flex.cjs"),f=e=>e&&e.__esModule?e:{default:e},c=f(m),l={size:!0,spacing:!0},g=c.default(o.Flex).withConfig({shouldForwardProp:(e,t)=>!l[e]&&t(e)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:e,spacing:t})=>s.extractStyleFromTheme(e.spaces,t,void 0)};
  }
`,h=c.default(o.Flex).withConfig({shouldForwardProp:(e,t)=>!l[e]&&t(e)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:e,spacing:t})=>s.extractStyleFromTheme(e.spaces,t,void 0)};
  }
`,d=u.forwardRef(({horizontal:e=!1,spacing:t,size:r,...n},a)=>(r&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),e?i.jsx(h,{ref:a,spacing:t||r,...n}):i.jsx(g,{direction:"column",alignItems:"stretch",ref:a,spacing:t||r,...n})));d.displayName="Stack";exports.Stack=d;
