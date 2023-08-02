"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),R=require("react"),d=require("@strapi/icons"),o=require("@strapi/ui-primitives"),p=require("styled-components"),j=require("../hooks/useComposeRefs.cjs"),c=require("../Flex/Flex.cjs"),f=require("../Box/Box.cjs"),u=require("../themes/utils.cjs"),g=require("../Typography/Typography.cjs"),I=e=>e&&e.__esModule?e:{default:e};function T(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const s in e)if(s!=="default"){const n=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,n.get?n:{enumerable:!0,get:()=>e[s]})}}return t.default=e,Object.freeze(t)}const a=T(R),l=I(p),v=a.forwardRef(({onClear:e,clearLabel:t="Clear",startIcon:s,disabled:n,hasError:h,size:m="M",children:x,...b},$)=>{const i=a.useRef(null),S=y=>{e&&!n&&(e(y),i.current.focus())},w=j.useComposedRefs(i,$);return r.jsx(o.Select.Trigger,{asChild:!0,children:r.jsxs(q,{"aria-disabled":n,$hasError:h,$size:m,ref:w,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:n?"neutral150":"neutral0",paddingLeft:3,paddingRight:3,gap:4,cursor:"default",width:"100%",...b,children:[r.jsxs(c.Flex,{flex:"1",as:"span",gap:3,children:[s&&r.jsx(f.Box,{as:"span","aria-hidden":!0,children:s}),x]}),r.jsxs(c.Flex,{as:"span",gap:3,children:[e?r.jsx(C,{as:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:S,"aria-disabled":n,"aria-label":t,title:t,cursor:"pointer",children:r.jsx(d.Cross,{})}):null,r.jsx(k,{children:r.jsx(d.CarretDown,{})})]})]})})}),C=l.default(f.Box)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,q=l.default(c.Flex)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  min-height: ${({theme:e,$size:t})=>u.getThemeSize("input")({theme:e,size:t})};

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral600};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>u.inputFocusStyle()({theme:e,hasError:t})};
`,k=l.default(o.Select.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }
`,V=a.forwardRef(({children:e,placeholder:t,...s},n)=>r.jsx(_,{ref:n,ellipsis:!0,...s,children:r.jsx(P,{placeholder:t,children:e})})),_=l.default(g.Typography)`
  flex: 1;
`,P=l.default(o.Select.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,z=l.default(o.Select.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices[1]};
`,F=l.default(o.Select.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,O=a.forwardRef((e,t)=>r.jsx(B,{ref:t,...e})),M=p.css`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>`${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  white-space: nowrap;
  user-select: none;

  &:focus-visible {
    outline: none;
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,B=l.default(o.Select.Item)`
  ${M}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
  }

  &[data-state='checked'] {
    ${g.Typography} {
      font-weight: bold;
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,D=o.Select.Root,G=v,E=V,N=o.Select.Portal,A=z,H=F,J=O,K=o.Select.ItemIndicator,L=o.Select.ItemText,Q=o.Select.Group;exports.Content=A;exports.Group=Q;exports.Item=J;exports.ItemIndicator=K;exports.ItemText=L;exports.Portal=N;exports.Root=D;exports.Trigger=G;exports.Value=E;exports.Viewport=H;
