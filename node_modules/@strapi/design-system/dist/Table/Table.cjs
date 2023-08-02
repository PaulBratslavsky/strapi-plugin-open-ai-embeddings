"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),n=require("react"),f=require("styled-components"),h=require("../RawTable/RawTable.cjs"),s=require("../Box/Box.cjs"),b=t=>t&&t.__esModule?t:{default:t},a=b(f),g=a.default(s.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
`,w=a.default(h.RawTable)`
  width: 100%;
  white-space: nowrap;
`,p=a.default(s.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:t})=>t==="both"||t==="left"?"''":void 0};
    box-shadow: ${({theme:t})=>t.shadows.tableShadow};
    width: ${({theme:t})=>t.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:t})=>t==="both"||t==="right"?"''":void 0};
    box-shadow: ${({theme:t})=>t.shadows.tableShadow};
    width: ${({theme:t})=>t.spaces[2]};
    right: 0;
    top: 0;
  }
`,x=a.default(s.Box)`
  overflow-x: auto;
`,S=({footer:t,...i})=>{const l=n.useRef(null),[d,o]=n.useState(),c=e=>{const u=e.target.scrollWidth-e.target.clientWidth;if(e.target.scrollLeft===0){o("right");return}if(e.target.scrollLeft===u){o("left");return}e.target.scrollLeft>0&&o("both")};return n.useEffect(()=>{l.current.scrollWidth>l.current.clientWidth&&o("right")},[]),r.jsxs(g,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[r.jsx(p,{overflowing:d,position:"relative",children:r.jsx(x,{ref:l,onScroll:c,paddingLeft:6,paddingRight:6,children:r.jsx(w,{...i})})}),t]})};exports.Table=S;
