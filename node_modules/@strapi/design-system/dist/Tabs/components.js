import t from "styled-components";
import { Box as n } from "../Box/Box.js";
import { Flex as l } from "../Flex/Flex.js";
const u = t(n)`
  border-bottom: 2px solid
    ${({ theme: r, selected: o, hasError: d }) => o ? d ? r.colors.danger600 : r.colors.primary600 : "transparent"};
`, e = t(n)`
  border-bottom: 1px solid ${({ theme: r, selected: o }) => o ? r.colors.neutral0 : r.colors.neutral150};
`, a = t.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${e} {
    border-left: 1px solid ${({ theme: r }) => r.colors.neutral150};
  }

  ${e} {
    border-right: ${({ theme: r, showRightBorder: o }) => o ? `1px solid ${r.colors.neutral150}` : "none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, $ = t(l)`
  & > * {
    flex: 1;
  }

  & ${a}:first-of-type ${e} {
    border-radius: ${({ theme: r }) => `${r.borderRadius} 0 0 0`};
  }

  & ${a}:last-of-type ${e} {
    border-radius: ${({ theme: r }) => `0 ${r.borderRadius} 0 0`};
  }

  & ${a}[aria-selected="true"] ${e} {
    border-radius: ${({ theme: r }) => `${r.borderRadius} ${r.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`;
export {
  e as DefaultTabBox,
  a as DefaultTabButton,
  $ as DefaultTabsRow,
  u as SimpleTabBox
};
