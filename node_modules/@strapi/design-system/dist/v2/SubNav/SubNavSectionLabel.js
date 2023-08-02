import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { CarretDown as m } from "@strapi/icons";
import d from "styled-components";
import { Flex as s } from "../../Flex/Flex.js";
import { Box as o } from "../../Box/Box.js";
import { Typography as i } from "../../Typography/Typography.js";
const a = d(s)`
  border: none;
  padding: 0;
  background: transparent;
`, g = d.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, y = ({ collapsable: t = !1, label: e, onClick: l = () => {
}, ariaExpanded: n, ariaControls: p }) => t ? c(a, { as: "button", onClick: l, "aria-expanded": n, "aria-controls": p, textAlign: "left", children: [r(o, { paddingRight: 1, children: r(i, { variant: "sigma", textColor: "neutral600", children: e }) }), t && r(g, { rotated: n, children: r(m, { "aria-hidden": !0 }) })] }) : r(a, { children: r(o, { paddingRight: 1, children: r(i, { variant: "sigma", textColor: "neutral600", children: e }) }) });
export {
  y as SubNavSectionLabel
};
