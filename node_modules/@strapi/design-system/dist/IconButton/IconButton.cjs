"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),v=require("react"),j=require("styled-components"),y=require("../VisuallyHidden/VisuallyHidden.cjs"),_=require("../Tooltip/Tooltip.cjs"),B=require("../BaseButton/BaseButton.cjs"),m=require("../Flex/Flex.cjs"),R=e=>e&&e.__esModule?e:{default:e};function q(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}return t.default=e,Object.freeze(t)}const u=q(v),c=R(j),x=u.forwardRef(({label:e,background:t,borderWidth:r,noBorder:o=!1,children:d,icon:f,disabled:l=!1,onClick:a,"aria-label":p,...b},g)=>{const $=h=>{!l&&a&&a(h)},s=n.jsxs(i,{"aria-disabled":l,background:l?"neutral150":t,borderWidth:o?0:r,justifyContent:"center",height:"2rem",width:"2rem",...b,ref:g,onClick:$,children:[n.jsx(y.VisuallyHidden,{as:"span",children:e??p}),u.cloneElement(f||d,{"aria-hidden":!0,focusable:!1})]});return e?n.jsx(_.Tooltip,{label:e,children:s}):s}),i=c.default(B.BaseButton)`
  svg {
    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,O=c.default(m.Flex)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${i} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`;exports.IconButton=x;exports.IconButtonGroup=O;
