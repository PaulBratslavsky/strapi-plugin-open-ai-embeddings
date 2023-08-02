"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("styled-components"),o=require("../helpers/handleResponsiveValues.cjs"),r=require("../helpers/theme.cjs"),a=e=>e&&e.__esModule?e:{default:e},m=a(n),d={color:!0,cursor:!0,height:!0,width:!0},l=m.default.div.withConfig({shouldForwardProp:(e,t)=>!d[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>r.extractStyleFromTheme(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>r.extractStyleFromTheme(e.colors,t,t)};
  color: ${({theme:e,color:t})=>r.extractStyleFromTheme(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>o("padding",t,e)}
  ${({theme:e,paddingTop:t})=>o("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>o("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>o("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>o("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>o("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>o("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>o("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>o("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:s})=>t?e.borderRadius:s};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>r.extractStyleFromTheme(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:s,borderWidth:i})=>{if(t&&!s&&typeof i>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>r.extractStyleFromTheme(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>r.extractStyleFromTheme(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>r.extractStyleFromTheme(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`;exports.Box=l;
