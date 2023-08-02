"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("styled-components"),l=require("../Box/Box.cjs"),u=require("../Flex/Flex.cjs"),s=o=>o&&o.__esModule?o:{default:o},a=s(n),i=a.default(l.Box)`
  border-bottom: 2px solid
    ${({theme:o,selected:e,hasError:d})=>e?d?o.colors.danger600:o.colors.primary600:"transparent"};
`,r=a.default(l.Box)`
  border-bottom: 1px solid ${({theme:o,selected:e})=>e?o.colors.neutral0:o.colors.neutral150};
`,t=a.default.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${r} {
    border-left: 1px solid ${({theme:o})=>o.colors.neutral150};
  }

  ${r} {
    border-right: ${({theme:o,showRightBorder:e})=>e?`1px solid ${o.colors.neutral150}`:"none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,b=a.default(u.Flex)`
  & > * {
    flex: 1;
  }

  & ${t}:first-of-type ${r} {
    border-radius: ${({theme:o})=>`${o.borderRadius} 0 0 0`};
  }

  & ${t}:last-of-type ${r} {
    border-radius: ${({theme:o})=>`0 ${o.borderRadius} 0 0`};
  }

  & ${t}[aria-selected="true"] ${r} {
    border-radius: ${({theme:o})=>`${o.borderRadius} ${o.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`;exports.DefaultTabBox=r;exports.DefaultTabButton=t;exports.DefaultTabsRow=b;exports.SimpleTabBox=i;
