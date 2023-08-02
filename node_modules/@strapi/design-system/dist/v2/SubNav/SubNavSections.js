import { jsx as r } from "react/jsx-runtime";
import { Children as p } from "react";
import { Box as c } from "../../Box/Box.js";
import { Flex as d } from "../../Flex/Flex.js";
const g = ({ children: e, spacing: t = 2, horizontal: o = !1, ...i }) => r(c, { paddingTop: 2, paddingBottom: 4, children: r(d, { as: "ol", gap: t, direction: o ? "row" : "column", alignItems: o ? "center" : "stretch", ...i, children: p.map(e, (n, m) => r("li", { children: n }, m)) }) });
export {
  g as SubNavSections
};
