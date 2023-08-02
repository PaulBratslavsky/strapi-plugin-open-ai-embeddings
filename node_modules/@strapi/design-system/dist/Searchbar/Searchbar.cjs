"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),i=require("react"),l=require("@strapi/icons"),m=require("styled-components"),F=require("../hooks/useComposeRefs.cjs"),R=require("../themes/utils.cjs"),t=require("../Field/FieldInput.cjs"),S=require("../Field/FieldAction.cjs"),y=require("../Field/Field.cjs"),$=require("../VisuallyHidden/VisuallyHidden.cjs"),C=require("../Field/FieldLabel.cjs"),I=e=>e&&e.__esModule?e:{default:e},s=I(m),w=s.default(l.Cross)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,c=s.default(l.Search)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,_=s.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${c} {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${t.InputWrapper} {
    border: 1px solid transparent;
  }

  ${R.inputFocusStyle(t.InputWrapper)}
`,g=i.forwardRef(({name:e,size:a="M",children:u,value:n="",onClear:d,clearLabel:f,...p},h)=>{const o=i.useRef(null),b=n.length>0,q=j=>{d(j),o.current.focus()},x=F.composeRefs(h,o);return r.jsx(_,{children:r.jsxs(y.Field,{name:e,children:[r.jsx($.VisuallyHidden,{children:r.jsx(C.FieldLabel,{children:u})}),r.jsx(t.FieldInput,{ref:x,value:n,startAction:r.jsx(c,{"aria-hidden":!0}),size:a,endAction:b?r.jsx(S.FieldAction,{label:f,onClick:q,children:r.jsx(w,{})}):void 0,...p})]})})});exports.Searchbar=g;
