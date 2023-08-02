import { jsxs as d, jsx as o } from "react/jsx-runtime";
import l from "react";
import { ChevronLeft as m, ChevronRight as v } from "@strapi/icons";
import c from "styled-components";
import { usePagination as f } from "./PaginationContext.js";
import { buttonFocusStyle as g } from "../../themes/utils.js";
import { BaseLink as b } from "../../BaseLink/BaseLink.js";
import { VisuallyHidden as s } from "../../VisuallyHidden/VisuallyHidden.js";
import { Typography as h } from "../../Typography/Typography.js";
import { Box as x } from "../../Box/Box.js";
const w = {
  active: !0
}, u = c(b).withConfig({
  shouldForwardProp: (e, r) => !w[e] && r(e)
})`
  padding: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  box-shadow: ${({ active: e, theme: r }) => e ? r.shadows.filterShadow : void 0};
  text-decoration: none;
  display: flex;

  ${g}
`, $ = c(u)`
  color: ${({ theme: e, active: r }) => r ? e.colors.primary700 : e.colors.neutral800};
  background: ${({ theme: e, active: r }) => r ? e.colors.neutral0 : void 0};

  &:hover {
    box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  }
`, p = c(u)`
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
`, A = l.forwardRef(({ children: e, ...r }, t) => {
  const { activePage: n } = f(), i = n === 1;
  return d(p, { ref: t, "aria-disabled": i, tabIndex: i ? -1 : void 0, ...r, children: [o(s, { children: e }), o(m, { "aria-hidden": !0 })] });
}), B = l.forwardRef(({ children: e, ...r }, t) => {
  const { activePage: n, pageCount: i } = f(), a = n === i;
  return d(p, { ref: t, "aria-disabled": a, tabIndex: a ? -1 : void 0, ...r, children: [o(s, { children: e }), o(v, { "aria-hidden": !0 })] });
}), F = l.forwardRef(({ number: e, children: r, ...t }, n) => {
  const { activePage: i } = f(), a = i === e;
  return d($, { ref: n, ...t, active: a, children: [o(s, { children: r }), o(h, { "aria-hidden": !0, fontWeight: a ? "bold" : void 0, lineHeight: "revert", variant: "pi", children: e })] });
}), I = ({ children: e, ...r }) => d(x, { ...r, children: [o(s, { children: e }), o(h, { "aria-hidden": !0, lineHeight: "revert", textColor: "neutral800", variant: "pi", children: "…" })] });
export {
  I as Dots,
  B as NextLink,
  F as PageLink,
  A as PreviousLink
};
