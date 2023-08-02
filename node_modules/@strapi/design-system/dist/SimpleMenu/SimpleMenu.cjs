"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),r=require("react"),N=require("@strapi/icons"),C=require("@strapi/ui-primitives"),F=require("react-router-dom"),W=require("styled-components"),R=require("./utils.cjs"),s=require("../helpers/keyboardKeys.cjs"),H=require("../hooks/useId.cjs"),U=require("../Link/Link.cjs"),M=require("../Button/Button.cjs"),z=require("../Popover/Popover.cjs"),E=require("../Box/Box.cjs"),D=require("../Typography/Typography.cjs"),G=require("../Flex/Flex.cjs"),w=e=>e&&e.__esModule?e:{default:e},K=w(r),m=w(W),J=m.default.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${R.getOptionStyle}
`,Q=m.default(F.NavLink)`
  text-decoration: none;
  ${R.getOptionStyle}
`,X=m.default(U.Link)`
  /* Removing Link hover effect */
  &:hover {
    color: currentColor;
  }

  &:focus-visible {
    /* Removing Link focus-visible after properties and reset to global outline */
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
    &:after {
      content: none;
    }
  }

  ${R.getOptionStyle}
`,Y=m.default.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`,Z=m.default(M.Button)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[3]}`};
`,ee=({children:e,onClick:h=()=>{},to:i,isFocused:u=!1,href:c,...j})=>{const a=r.useRef();r.useEffect(()=>{u&&a.current&&a.current.focus()},[u]);const l={tabIndex:u?0:-1,ref:a,role:"menuitem",...j},d=x=>{(x.key===s.KeyboardKeys.SPACE||x.key===s.KeyboardKeys.ENTER)&&h()};return i&&!c?o.jsx(Q,{to:i,...l,children:o.jsx(E.Box,{padding:2,children:o.jsx(D.Typography,{children:e})})}):c&&!i?o.jsx(X,{isExternal:!0,href:c,...l,children:o.jsx(E.Box,{padding:2,children:o.jsx(D.Typography,{children:e})})}):o.jsx(J,{onKeyDown:d,onMouseDown:h,type:"button",...l,children:o.jsx(E.Box,{padding:2,children:o.jsx(D.Typography,{children:e})})})},ne=({label:e,children:h,id:i,as:u,onOpen:c=()=>{},onClose:j=()=>{},size:a="M",popoverPlacement:l="bottom-start",onReachEnd:d,...x})=>{const f=r.useRef(void 0),k=H.useId(i),b=r.useRef(!1),[p,y]=r.useState(!1),[I,v]=r.useState(0),g=r.Children.toArray(h),P=a==="S"?Z:M.Button,T=u||P,q=!!d&&typeof d=="function";r.useEffect(()=>{if(["string","number"].includes(typeof e)){const n=g.findIndex(t=>K.default.isValidElement(t)&&t.props.children===e||t===e);n!==-1&&v(n)}},[e]);const S=C.useCallbackRef(c),B=C.useCallbackRef(j);r.useEffect(()=>{b?.current?p?S():B():b.current=!0},[b,B,S,p]),r.useEffect(()=>{K.default.isValidElement(e)&&I===-1&&f.current.focus()},[e,I]);const O=n=>{p&&(n.key===s.KeyboardKeys.ESCAPE&&(n.stopPropagation(),y(!1),f.current.focus()),n.key===s.KeyboardKeys.DOWN&&v(t=>t===g.length-1?0:t+1),n.key===s.KeyboardKeys.UP&&v(t=>t===0?g.length-1:t-1))},$=n=>{(n.key===s.KeyboardKeys.ENTER||n.key===s.KeyboardKeys.SPACE)&&y(t=>!t)},L=n=>{n.preventDefault(),n.currentTarget.contains(n.relatedTarget)||y(!1)},_=n=>{n.preventDefault(),y(t=>!t)},A=()=>{q&&d()},V=g.map((n,t)=>o.jsx(G.Flex,{as:"li",justifyContent:"center",role:"menuitem",children:K.default.isValidElement(n)?r.cloneElement(n,{onClick(){n.props.onClick(),y(!1),f.current.focus()},isFocused:I===t}):n},t));return o.jsxs("div",{onKeyDown:O,children:[o.jsx(T,{label:K.default.isValidElement(e)?null:e,"aria-haspopup":!0,"aria-expanded":p,"aria-controls":k,onKeyDown:$,onMouseDown:_,ref:f,type:"button",variant:"ghost",endIcon:o.jsx(Y,{children:o.jsx(N.CarretDown,{"aria-hidden":!0})}),...x,children:e}),p&&o.jsx(z.Popover,{onBlur:L,placement:l,source:f,onReachEnd:A,intersectionId:q?`popover-${k}`:void 0,spacing:4,children:o.jsx(E.Box,{role:"menu",as:"ul",padding:1,id:k,children:V})})]})};exports.MenuItem=ee;exports.SimpleMenu=ne;
