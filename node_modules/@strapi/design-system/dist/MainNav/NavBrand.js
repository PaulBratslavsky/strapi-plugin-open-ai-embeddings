import { jsx as n, jsxs as d } from "react/jsx-runtime";
import { NavLink as t } from "react-router-dom";
import c from "styled-components";
import { useMainNav as m } from "./MainNavContext.js";
import { Box as e } from "../Box/Box.js";
import { VisuallyHidden as p } from "../VisuallyHidden/VisuallyHidden.js";
import { Flex as l } from "../Flex/Flex.js";
import { Typography as s } from "../Typography/Typography.js";
const h = c.div`
  svg,
  img {
    border-radius: ${({ theme: r }) => r.borderRadius};
    object-fit: contain;
    height: ${({ condensed: r }) => r ? `${40 / 16}rem` : `${32 / 16}rem`};
    width: ${({ condensed: r }) => r ? `${40 / 16}rem` : `${32 / 16}rem`};
  }
`, g = c(t)`
  text-decoration: unset;
  color: inherit;
`, N = ({ workplace: r, title: o, icon: a, to: i = "/" }) => m() ? n(e, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: n(h, { condensed: !0, children: d(t, { to: i, children: [a, d(p, { children: [n("span", { children: o }), n("span", { children: r })] })] }) }) }) : n(e, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: d(l, { children: [n(h, { as: t, to: i, "aria-hidden": !0, tabIndex: -1, children: a }), d(e, { paddingLeft: 2, children: [n(s, { fontWeight: "bold", textColor: "neutral800", as: "span", children: d(g, { to: i, children: [o, n(p, { as: "span", children: r })] }) }), n(s, { variant: "pi", as: "p", textColor: "neutral600", "aria-hidden": !0, children: r })] })] }) });
export {
  N as NavBrand
};
