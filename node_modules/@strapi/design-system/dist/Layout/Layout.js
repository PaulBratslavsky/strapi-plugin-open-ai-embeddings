import { jsxs as i, jsx as n } from "react/jsx-runtime";
import r from "styled-components";
import { Box as t } from "../Box/Box.js";
const d = r(t)`
  display: grid;
  grid-template-columns: ${({ hasSideNav: o }) => o ? "auto 1fr" : "1fr"};
`, m = r(t)`
  overflow-x: hidden;
`, f = ({ sideNav: o, children: e }) => i(d, { hasSideNav: !!o, children: [o, n(m, { paddingBottom: 10, children: e })] });
export {
  f as Layout
};
