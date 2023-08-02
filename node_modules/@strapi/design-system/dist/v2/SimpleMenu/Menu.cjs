"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),s=require("react"),y=require("@radix-ui/react-dropdown-menu"),d=require("@strapi/icons"),c=require("styled-components"),S=require("../../helpers/theme.cjs"),w=require("../Link/Link.cjs"),j=require("../../Button/Button.cjs"),m=require("../../Box/Box.cjs"),u=require("../../Flex/Flex.cjs"),a=require("../../Typography/Typography.cjs"),T=e=>e&&e.__esModule?e:{default:e};function C(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const i=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,i.get?i:{enumerable:!0,get:()=>e[o]})}}return r.default=e,Object.freeze(r)}const n=C(y),l=T(c),R=n.Root,v=s.forwardRef(({size:e,endIcon:r=t.jsx(d.CarretDown,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...o},i)=>t.jsx(n.Trigger,{asChild:!0,children:t.jsx(j.Button,{ref:i,type:"button",variant:"ghost",endIcon:r,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...o})})),$=s.forwardRef(({children:e,intersectionId:r,popoverPlacement:o="bottom-start",...i},f)=>{const[p,x]=o.split("-");return t.jsx(n.Portal,{children:t.jsx(n.Content,{align:x,side:p,loop:!0,asChild:!0,children:t.jsxs(h,{ref:f,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...i,children:[e,t.jsx(m.Box,{id:r,width:"100%",height:"1px"})]})})})}),h=l.default(u.Flex)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,k=({onSelect:e,disabled:r=!1,...o})=>t.jsx(n.Item,{asChild:!0,onSelect:e,disabled:r,children:o.isLink||o.isExternal?t.jsx(M,{color:"neutral800",...o,isExternal:o.isExternal??!1,children:t.jsx(a.Typography,{children:o.children})}):t.jsx(b,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...o,children:t.jsx(a.Typography,{children:o.children})})}),g=({theme:e})=>c.css`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${a.Typography} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${a.Typography} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,b=l.default(u.Flex)`
  ${g}
`,M=l.default(w.Link)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:r})=>S.extractStyleFromTheme(e.colors,r,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${g}
`,q=s.forwardRef((e,r)=>t.jsx(n.Label,{asChild:!0,children:t.jsx(L,{ref:r,variant:"sigma",textColor:"neutral600",...e})})),L=l.default(a.Typography)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,O=n.Sub,_=s.forwardRef(({disabled:e=!1,...r},o)=>t.jsx(n.SubTrigger,{asChild:!0,disabled:e,children:t.jsxs(B,{ref:o,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...r,children:[t.jsx(a.Typography,{children:r.children}),t.jsx(I,{height:12,width:12})]})})),B=l.default(b)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,I=l.default(d.ChevronRight)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,D=s.forwardRef((e,r)=>t.jsx(n.Portal,{children:t.jsx(n.SubContent,{sideOffset:8,asChild:!0,children:t.jsx(h,{ref:r,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),P=R,F=v,E=$,W=k,H=q,A=O,N=_,V=D;exports.Content=E;exports.Item=W;exports.Label=H;exports.Root=P;exports.SubContent=V;exports.SubRoot=A;exports.SubTrigger=N;exports.Trigger=F;
