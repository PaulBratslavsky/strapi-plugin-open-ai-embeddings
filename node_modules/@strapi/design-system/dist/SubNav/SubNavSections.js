import { jsx as r } from "react/jsx-runtime";
import c from "react";
import { Box as d } from "../Box/Box.js";
import { Flex as l } from "../Flex/Flex.js";
const u = ({ children: o, spacing: t = 2, horizontal: e = !1, ...i }) => r(d, { paddingTop: 2, paddingBottom: 4, children: r(l, { as: "ol", gap: t, direction: e ? "row" : "column", alignItems: e ? "center" : "stretch", ...i, children: c.Children.map(o, (n, m) => r("li", { children: n }, m)) }) });
export {
  u as SubNavSections
};
