import { jsxs as m, jsx as e } from "react/jsx-runtime";
import * as f from "react";
import { ExternalLink as u } from "@strapi/icons";
import { NavLink as g } from "react-router-dom";
import s from "styled-components";
import { buttonFocusStyle as y } from "../themes/utils.js";
import { Typography as p } from "../Typography/Typography.js";
import { Box as h } from "../Box/Box.js";
const x = s.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({ disabled: r }) => r ? "none" : void 0};
  color: ${({ disabled: r, theme: o }) => r ? o.colors.neutral600 : o.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  ${p} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({ theme: r }) => r.colors.primary500};
  }

  &:active {
    color: ${({ theme: r }) => r.colors.primary700};
  }

  ${y};
`, t = s(h)`
  display: flex;
`, z = f.forwardRef(({ children: r, href: o, to: i, disabled: n = !1, startIcon: a, endIcon: l, ...c }, d) => m(x, { as: i && !n ? g : "a", target: o ? "_blank" : void 0, rel: o ? "noreferrer noopener" : void 0, to: n ? void 0 : i, href: n ? "#" : o, disabled: n, ref: d, ...c, children: [a && e(t, { as: "span", "aria-hidden": !0, paddingRight: 2, children: a }), e(p, { children: r }), l && !o && e(t, { as: "span", "aria-hidden": !0, paddingLeft: 2, children: l }), o && e(t, { as: "span", "aria-hidden": !0, paddingLeft: 2, children: e(u, {}) })] }));
export {
  z as Link
};
