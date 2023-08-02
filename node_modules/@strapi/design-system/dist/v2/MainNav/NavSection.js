import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { Children as s } from "react";
import { useMainNav as p } from "./MainNavContext.js";
import { Flex as e } from "../../Flex/Flex.js";
import { Box as l } from "../../Box/Box.js";
import { Divider as u } from "../../Divider/Divider.js";
import { VisuallyHidden as g } from "../../VisuallyHidden/VisuallyHidden.js";
import { Typography as h } from "../../Typography/Typography.js";
const k = ({ label: o, children: a, horizontal: n = !1, spacing: c = 2, ...m }) => p() ? d(e, { direction: "column", alignItems: "stretch", gap: 2, children: [d(l, { paddingTop: 1, paddingBottom: 1, background: "neutral0", hasRadius: !0, as: "span", children: [r(u, {}), r(g, { children: r("span", { children: o }) })] }), r(e, { as: "ul", gap: c, direction: n ? "row" : "column", alignItems: n ? "center" : "stretch", ...m, children: s.map(a, (i, t) => r("li", { children: i }, t)) })] }) : d(e, { direction: "column", alignItems: "stretch", gap: 2, children: [r(l, { paddingTop: 1, paddingBottom: 1, background: "neutral0", paddingRight: 3, paddingLeft: 3, hasRadius: !0, as: "span", children: r(h, { variant: "sigma", textColor: "neutral600", children: o }) }), r(e, { as: "ul", gap: c, direction: n ? "row" : "column", alignItems: n ? "center" : "stretch", ...m, children: s.map(a, (i, t) => r("li", { children: i }, t)) })] });
export {
  k as NavSection
};
