import { jsxs as l, Fragment as x, jsx as o } from "react/jsx-runtime";
import * as y from "react";
import g from "styled-components";
import { useTooltipHandlers as T } from "./hooks/useTooltipHandlers.js";
import { useTooltipLayout as v } from "./hooks/useTooltipLayout.js";
import { useId as d } from "../hooks/useId.js";
import { Portal as I } from "../Portal/Portal.js";
import { Box as R } from "../Box/Box.js";
import { VisuallyHidden as H } from "../VisuallyHidden/VisuallyHidden.js";
import { Typography as W } from "../Typography/Typography.js";
const j = g(R)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({ visible: e }) => e ? "revert" : "none"};
`, S = ({ children: e, label: n, description: r, delay: s = 500, position: p = "top", id: a, ...m }) => {
  const t = d(a), c = d(), { visible: i, ...f } = T(s), { tooltipWrapperRef: u, toggleSourceRef: b } = v(i, p), h = y.cloneElement(e, {
    tabIndex: 0,
    "aria-labelledby": n ? t : void 0,
    "aria-describedby": r ? t : void 0,
    ...f
  });
  return l(x, { children: [o(I, { children: l(j, { id: t, background: "neutral900", hasRadius: !0, padding: 2, role: "tooltip", ref: u, visible: i, position: "absolute", ...m, children: [i && o(H, { id: c, children: r }), o(W, { as: "p", variant: "pi", fontWeight: "bold", textColor: "neutral0", children: n || r })] }) }), o("span", { ref: b, children: h })] });
};
export {
  S as Tooltip
};
