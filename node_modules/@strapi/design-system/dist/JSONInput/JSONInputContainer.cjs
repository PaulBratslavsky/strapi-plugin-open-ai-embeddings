"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("styled-components"),o=require("../themes/utils.cjs"),s=require("../Flex/Flex.cjs"),n=e=>e&&e.__esModule?e:{default:e},c=n(r),l=c.default(s.Flex)`
  line-height: ${({theme:e})=>e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
  }

  .cm-scroller {
    border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${o.inputFocusStyle()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`;exports.JSONInputContainer=l;
