import { jsx as i, jsxs as p, Fragment as M } from "react/jsx-runtime";
import { CarretDown as R } from "@strapi/icons";
import y from "styled-components";
import { AccordionTypography as A } from "./Accordion.js";
import { useAccordion as I } from "./AccordionContext.js";
import { getBackground as W } from "./utils.js";
import { TextButton as D } from "../TextButton/TextButton.js";
import { Icon as F } from "../Icon/Icon.js";
import { Flex as d } from "../Flex/Flex.js";
import { Typography as S } from "../Typography/Typography.js";
const L = y(D)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme: o, expanded: e }) => e ? o.colors.primary600 : o.colors.neutral500};
    }
  }
`, P = y(d)`
  min-height: ${({ theme: o, size: e }) => o.sizes.accordions[e]};
  border-radius: ${({ theme: o, expanded: e }) => e ? `${o.borderRadius} ${o.borderRadius} 0 0` : o.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({ theme: o }) => o.colors.primary600};
      }
    }
  }
`, Q = ({ title: o, description: e, as: $ = "span", togglePosition: l = "right", action: g, ...w }) => {
  const { onToggle: s, toggle: m, expanded: r, id: c, size: t, variant: C, disabled: n } = I(), T = `accordion-content-${c}`, h = `accordion-label-${c}`, k = `accordion-desc-${c}`, a = t === "M" ? 6 : 4, u = t === "M" ? a : a - 2, v = W({ expanded: r, disabled: n, variant: C }), j = {
    as: $,
    fontWeight: t === "S" ? "bold" : void 0,
    id: h,
    textColor: r ? "primary600" : "neutral700",
    ellipsis: !0,
    variant: t === "M" ? "delta" : void 0
  }, z = r ? "primary600" : "neutral600", B = r ? "primary200" : "neutral200", f = t === "M" ? `${32 / 16}rem` : `${24 / 16}rem`, x = () => {
    n || (m && !s ? (console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'), m()) : s && s());
  }, b = i(d, { justifyContent: "center", borderRadius: "50%", height: f, width: f, transform: r ? "rotate(180deg)" : void 0, "data-strapi-dropdown": !0, "aria-hidden": !0, as: "span", background: B, cursor: n ? "not-allowed" : "pointer", onClick: x, shrink: 0, children: i(F, { as: R, width: t === "M" ? `${11 / 16}rem` : `${8 / 16}rem`, color: r ? "primary600" : "neutral600" }) });
  return i(P, { paddingBottom: u, paddingLeft: a, paddingRight: a, paddingTop: u, background: v, expanded: r, size: t, justifyContent: "space-between", cursor: n ? "not-allowed" : "", children: p(d, { gap: 3, flex: 1, maxWidth: "100%", children: [l === "left" && b, i(L, { onClick: x, "aria-disabled": n, "aria-expanded": r, "aria-controls": T, "aria-labelledby": h, "data-strapi-accordion-toggle": !0, expanded: r, type: "button", flex: 1, minWidth: 0, ...w, children: p(M, { children: [i(A, { ...j, children: o }), e && i(S, { as: "p", id: k, textColor: z, children: e })] }) }), l === "right" && p(d, { gap: 3, children: [b, g] }), l === "left" && g] }) });
};
export {
  Q as AccordionToggle
};
