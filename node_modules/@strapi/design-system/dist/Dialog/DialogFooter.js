import { jsx as t, jsxs as e } from "react/jsx-runtime";
import i from "styled-components";
import { Box as n } from "../Box/Box.js";
import { Flex as p } from "../Flex/Flex.js";
const l = i(n)`
  border-top: 1px solid ${({ theme: o }) => o.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`, x = ({ startAction: o, endAction: r }) => t(l, { padding: 4, children: e(p, { gap: 2, children: [o, r] }) });
export {
  x as DialogFooter
};
