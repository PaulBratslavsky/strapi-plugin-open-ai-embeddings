import { jsxs as d, jsx as t } from "react/jsx-runtime";
import * as c from "react";
import { Loader as u } from "@strapi/icons";
import i, { keyframes as h } from "styled-components";
import { buttonFocusStyle as y } from "../themes/utils.js";
import { Flex as g } from "../Flex/Flex.js";
import { Typography as x } from "../Typography/Typography.js";
const b = h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, v = i.div`
  animation: ${b} 2s infinite linear;
  will-change: transform;
`, T = i(g)`
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({ theme: r }) => r.colors.neutral600};
    }
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.primary600};
  }

  ${y}
`, $ = c.forwardRef(({ children: r, startIcon: s, endIcon: l, onClick: o, disabled: e = !1, loading: a = !1, ...p }, m) => {
  const f = o && !e ? o : void 0, n = e || a;
  return d(T, { ref: m, "aria-disabled": n, onClick: f, as: "button", type: "button", background: "transparent", gap: 2, ...p, children: [a ? t(v, { "aria-hidden": !0, children: t(u, {}) }) : s, t(x, { variant: "pi", textColor: n ? "neutral600" : "primary600", children: r }), l] });
});
$.displayName = "TextButton";
export {
  $ as TextButton
};
