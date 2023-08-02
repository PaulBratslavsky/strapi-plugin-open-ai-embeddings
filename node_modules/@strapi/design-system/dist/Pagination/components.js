import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { ChevronLeft as f, ChevronRight as m } from "@strapi/icons";
import { NavLink as v } from "react-router-dom";
import l from "styled-components";
import { usePagination as c } from "./PaginationContext.js";
import { buttonFocusStyle as g } from "../themes/utils.js";
import { VisuallyHidden as d } from "../VisuallyHidden/VisuallyHidden.js";
import { Typography as h } from "../Typography/Typography.js";
import { Box as b } from "../Box/Box.js";
const x = {
  active: !0
}, u = l(v).withConfig({
  shouldForwardProp: (e, r) => !x[e] && r(e)
})`
  padding: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  box-shadow: ${({ active: e, theme: r }) => e ? r.shadows.filterShadow : void 0};
  text-decoration: none;
  display: flex;

  ${g}
`, k = l(u)`
  color: ${({ theme: e, active: r }) => r ? e.colors.primary700 : e.colors.neutral800};
  background: ${({ theme: e, active: r }) => r ? e.colors.neutral0 : void 0};

  &:hover {
    box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  }
`, p = l(u)`
  font-size: ${11 / 16}rem;

  svg path {
    fill: ${(e) => e["aria-disabled"] ? e.theme.colors.neutral300 : e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${(e) => e["aria-disabled"] ? e.theme.colors.neutral300 : e.theme.colors.neutral700};
    }
  }

  ${(e) => e["aria-disabled"] ? `
  pointer-events: none;
    ` : void 0}
`, L = ({ children: e, to: r, ...n }) => {
  const { activePage: t } = c(), i = t === 1;
  return a(p, { to: i ? "#" : r, "aria-disabled": i, tabIndex: i ? -1 : void 0, ...n, children: [o(d, { children: e }), o(f, { "aria-hidden": !0 })] });
};
L.displayName = "PreviousLink";
const P = ({ children: e, to: r, ...n }) => {
  const { activePage: t, pageCount: i } = c(), s = t === i;
  return a(p, { to: s ? "#" : r, "aria-disabled": s, tabIndex: s ? -1 : void 0, ...n, children: [o(d, { children: e }), o(m, { "aria-hidden": !0 })] });
};
P.displayName = "NextLink";
const $ = ({ number: e, children: r, ...n }) => {
  const { activePage: t } = c(), i = t === e;
  return a(k, { ...n, active: i, children: [o(d, { children: r }), o(h, { "aria-hidden": !0, fontWeight: i ? "bold" : void 0, lineHeight: "revert", variant: "pi", children: e })] });
};
$.displayName = "PageLink";
const F = ({ children: e, ...r }) => a(b, { ...r, children: [o(d, { children: e }), o(h, { "aria-hidden": !0, lineHeight: "revert", textColor: "neutral800", variant: "pi", children: "…" })] });
export {
  F as Dots,
  P as NextLink,
  $ as PageLink,
  L as PreviousLink
};
