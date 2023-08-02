"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),b=require("react"),m=require("styled-components"),j=require("./AccordionContext.cjs"),_=require("../hooks/useId.cjs"),s=require("../Typography/Typography.cjs"),h=require("../Flex/Flex.cjs"),p=require("../Box/Box.cjs"),q=r=>r&&r.__esModule?r:{default:r};function T(r){if(r&&r.__esModule)return r;const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const e in r)if(e!=="default"){const t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(o,e,t.get?t:{enumerable:!0,get:()=>r[e]})}}return o.default=r,Object.freeze(o)}const A=T(b),y=q(m),M=({theme:r,expanded:o,variant:e,disabled:t,error:c})=>c?`1px solid ${r.colors.danger600} !important`:t?`1px solid ${r.colors.neutral150}`:o?`1px solid ${r.colors.primary600}`:e==="primary"?`1px solid ${r.colors.neutral0}`:`1px solid ${r.colors.neutral100}`,f=y.default(s.Typography)``,O=y.default(p.Box)`
  border: ${M};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:r})=>r.colors.primary600};

    ${f} {
      color: ${({theme:r,expanded:o})=>o?void 0:r.colors.primary700};
    }

    ${s.Typography} {
      color: ${({theme:r,expanded:o})=>o?void 0:r.colors.primary600};
    }

    & > ${h.Flex} {
      background: ${({theme:r})=>r.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:r})=>r.colors.primary200};
    }
  }
`,v=({children:r,disabled:o=!1,error:e,expanded:t=!1,hasErrorMessage:c=!0,id:x,onToggle:a,toggle:d,size:u="M",variant:i="primary",shadow:g})=>{const l=_.useId(x),$=A.useMemo(()=>({expanded:t,onToggle:a,toggle:d,id:l,size:u,variant:i,disabled:o}),[o,t,l,a,u,d,i]);return n.jsxs(j.AccordionContext.Provider,{value:$,children:[n.jsx(O,{"data-strapi-expanded":t,disabled:o,"aria-disabled":o,expanded:t,hasRadius:!0,variant:i,error:e,shadow:g,children:r}),e&&c&&n.jsx(p.Box,{paddingTop:1,children:n.jsx(s.Typography,{variant:"pi",textColor:"danger600",children:e})})]})};exports.Accordion=v;exports.AccordionTypography=f;
