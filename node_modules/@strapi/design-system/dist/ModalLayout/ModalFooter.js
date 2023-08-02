import { jsx as o, jsxs as t } from "react/jsx-runtime";
import i from "styled-components";
import { Box as n } from "../Box/Box.js";
import { Flex as d } from "../Flex/Flex.js";
const p = i(n)`
  border-radius: 0 0 ${({ theme: r }) => r.borderRadius} ${({ theme: r }) => r.borderRadius};
  border-top: 1px solid ${({ theme: r }) => r.colors.neutral150};
`, m = ({ startActions: r, endActions: e }) => o(p, { paddingTop: 4, paddingBottom: 4, paddingLeft: 5, paddingRight: 5, background: "neutral100", children: t(d, { justifyContent: "space-between", children: [o(d, { gap: 2, children: r }), o(d, { gap: 2, children: e })] }) });
export {
  m as ModalFooter
};
