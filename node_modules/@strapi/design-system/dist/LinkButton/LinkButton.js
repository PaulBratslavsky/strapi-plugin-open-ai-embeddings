import { jsxs as v, jsx as n } from "react/jsx-runtime";
import * as y from "react";
import { NavLink as S } from "react-router-dom";
import b from "styled-components";
import { getDisabledStyle as f, getHoverStyle as x, getActiveStyle as k, getVariantStyle as $ } from "../Button/utils.js";
import { BaseButtonWrapper as B } from "../BaseButton/BaseButton.js";
import { Flex as u } from "../Flex/Flex.js";
import { Typography as L } from "../Typography/Typography.js";
const R = b(B)`
  &[aria-disabled='true'] {
    ${f}
    &:active {
      ${f}
    }
  }
  &:hover {
    ${x}
  }
  &:active {
    ${k}
  }
  ${$}
`, A = y.forwardRef(({ variant: l = "default", startIcon: o, endIcon: i, disabled: r = !1, children: m, size: t = "S", href: e, to: a, ...g }, s) => {
  const c = e ? "_blank" : void 0, h = e ? "noreferrer noopener" : void 0, d = t === "S" ? 2 : "10px", p = 4;
  return v(R, { ref: s, "aria-disabled": r, size: t, variant: l, target: c, rel: h, to: r ? void 0 : a, href: r ? "#" : e, background: "buttonPrimary600", borderColor: "buttonPrimary600", hasRadius: !0, gap: 2, inline: !0, paddingBottom: d, paddingLeft: p, paddingRight: p, paddingTop: d, pointerEvents: r ? "none" : void 0, ...g, as: a && !r ? S : "a", children: [o && n(u, { "aria-hidden": !0, children: o }), n(L, { variant: t === "S" ? "pi" : void 0, fontWeight: "bold", textColor: "buttonNeutral0", children: m }), i && n(u, { "aria-hidden": !0, children: i })] });
});
export {
  A as LinkButton
};
