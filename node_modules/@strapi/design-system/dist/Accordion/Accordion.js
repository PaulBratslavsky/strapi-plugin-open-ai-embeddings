import { jsxs as y, jsx as n } from "react/jsx-runtime";
import * as g from "react";
import m from "styled-components";
import { AccordionContext as h } from "./AccordionContext.js";
import { useId as b } from "../hooks/useId.js";
import { Typography as p } from "../Typography/Typography.js";
import { Flex as A } from "../Flex/Flex.js";
import { Box as u } from "../Box/Box.js";
const v = ({ theme: r, expanded: o, variant: t, disabled: i, error: a }) => a ? `1px solid ${r.colors.danger600} !important` : i ? `1px solid ${r.colors.neutral150}` : o ? `1px solid ${r.colors.primary600}` : t === "primary" ? `1px solid ${r.colors.neutral0}` : `1px solid ${r.colors.neutral100}`, j = m(p)``, k = m(u)`
  border: ${v};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({ theme: r }) => r.colors.primary600};

    ${j} {
      color: ${({ theme: r, expanded: o }) => o ? void 0 : r.colors.primary700};
    }

    ${p} {
      color: ${({ theme: r, expanded: o }) => o ? void 0 : r.colors.primary600};
    }

    & > ${A} {
      background: ${({ theme: r }) => r.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({ theme: r }) => r.colors.primary200};
    }
  }
`, F = ({ children: r, disabled: o = !1, error: t, expanded: i = !1, hasErrorMessage: a = !0, id: f, onToggle: s, toggle: c, size: e = "M", variant: d = "primary", shadow: $ }) => {
  const l = b(f), x = g.useMemo(() => ({ expanded: i, onToggle: s, toggle: c, id: l, size: e, variant: d, disabled: o }), [o, i, l, s, e, c, d]);
  return y(h.Provider, { value: x, children: [n(k, { "data-strapi-expanded": i, disabled: o, "aria-disabled": o, expanded: i, hasRadius: !0, variant: d, error: t, shadow: $, children: r }), t && a && n(u, { paddingTop: 1, children: n(p, { variant: "pi", textColor: "danger600", children: t }) })] });
};
export {
  F as Accordion,
  j as AccordionTypography
};
