import { jsxs as s, jsx as n } from "react/jsx-runtime";
import m from "react";
import { ExternalLink as f } from "@strapi/icons";
import c from "styled-components";
import { buttonFocusStyle as y } from "../../themes/utils.js";
import { BaseLink as d } from "../../BaseLink/BaseLink.js";
import { Typography as u } from "../../Typography/Typography.js";
const x = c(d)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({ theme: r }) => r.spaces[2]};
  pointer-events: ${({ disabled: r }) => r ? "none" : void 0};

  svg {
    font-size: ${10 / 16}rem;

    path {
      fill: ${({ disabled: r, theme: o }) => r ? o.colors.neutral600 : o.colors.primary600};
    }
  }

  &:hover {
    color: ${({ theme: r }) => r.colors.primary500};
  }

  &:active {
    color: ${({ theme: r }) => r.colors.primary700};
  }

  ${y};
`, $ = m.forwardRef(({ children: r, href: o, disabled: e = !1, startIcon: a, endIcon: t, isExternal: i = !0, ...l }, p) => s(x, { ref: p, href: o, disabled: e, isExternal: i, ...l, children: [a, n(u, { textColor: e ? "neutral600" : "primary600", children: r }), t, o && !t && i && n(f, {})] }));
$.displayName = "Link";
export {
  $ as Link
};
