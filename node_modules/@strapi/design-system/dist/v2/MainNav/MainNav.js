import { jsx as o } from "react/jsx-runtime";
import n from "styled-components";
import { MainNavContext as e } from "./MainNavContext.js";
import { Flex as i } from "../../Flex/Flex.js";
const a = n(i)`
  width: ${({ condensed: r }) => r ? "max-content" : `${224 / 16}rem`};
  border-right: 1px solid ${({ theme: r }) => r.colors.neutral150};
`, c = ({ condensed: r = !1, ...t }) => o(e.Provider, { value: r, children: o(a, { alignItems: "normal", as: "nav", background: "neutral0", condensed: r, direction: "column", height: "100vh", position: "sticky", top: 0, zIndex: 2, ...t }) });
export {
  c as MainNav
};
