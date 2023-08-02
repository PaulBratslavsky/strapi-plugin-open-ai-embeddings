import { jsx as t } from "react/jsx-runtime";
import n from "styled-components";
import { Box as i } from "../Box/Box.js";
const o = n(i)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({ unsetMargin: r }) => r ? "margin: 0;" : ""}
`, d = ({ unsetMargin: r = !0, ...e }) => t(o, { ...e, background: "neutral150", as: "hr", unsetMargin: r });
export {
  d as Divider
};
