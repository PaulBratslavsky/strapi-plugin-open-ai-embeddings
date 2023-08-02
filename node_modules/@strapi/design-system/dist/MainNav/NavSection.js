import { jsxs as d, jsx as r } from "react/jsx-runtime";
import l from "react";
import { useMainNav as p } from "./MainNavContext.js";
import { Divider as u } from "../Divider/Divider.js";
import { Flex as n } from "../Flex/Flex.js";
import { Box as s } from "../Box/Box.js";
import { VisuallyHidden as g } from "../VisuallyHidden/VisuallyHidden.js";
import { Typography as h } from "../Typography/Typography.js";
const j = ({ label: a, children: o, spacing: c = 2, horizontal: e = !1, ...m }) => p() ? d(n, { direction: "column", alignItems: "stretch", gap: 2, children: [d(s, { paddingTop: 1, paddingBottom: 1, background: "neutral0", hasRadius: !0, as: "span", children: [r(u, {}), r(g, { children: r("span", { children: a }) })] }), r(n, { as: "ul", gap: c, direction: e ? "row" : "column", alignItems: e ? "center" : "stretch", ...m, children: l.Children.map(o, (i, t) => r("li", { children: i }, t)) })] }) : d(n, { direction: "column", alignItems: "stretch", gap: 2, children: [r(s, { paddingTop: 1, paddingBottom: 1, background: "neutral0", paddingRight: 3, paddingLeft: 3, hasRadius: !0, as: "span", children: r(h, { variant: "sigma", textColor: "neutral600", children: a }) }), r(n, { as: "ul", gap: c, direction: e ? "row" : "column", alignItems: e ? "center" : "stretch", ...m, children: l.Children.map(o, (i, t) => r("li", { children: i }, t)) })] });
export {
  j as NavSection
};
