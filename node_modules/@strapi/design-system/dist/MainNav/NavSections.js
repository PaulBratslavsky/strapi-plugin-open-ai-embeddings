import { jsx as o } from "react/jsx-runtime";
import m from "react";
import l from "styled-components";
import { Box as p } from "../Box/Box.js";
import { Flex as a } from "../Flex/Flex.js";
const c = l(p)`
  flex-grow: 1;
  overflow-y: auto;
`, h = ({ children: t, spacing: e = 4, horizontal: r = !1, ...i }) => o(c, { paddingLeft: 3, paddingRight: 2, paddingTop: 3, paddingBottom: 8, children: o(a, { as: "ul", gap: e, direction: r ? "row" : "column", alignItems: r ? "center" : "stretch", ...i, children: m.Children.map(t, (n, d) => o("li", { children: n }, d)) }) });
export {
  h as NavSections
};
