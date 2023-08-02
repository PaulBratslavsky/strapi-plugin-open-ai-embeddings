import { jsxs as g, jsx as r } from "react/jsx-runtime";
import b from "react";
import { Loader as y } from "@strapi/icons";
import f, { keyframes as v } from "styled-components";
import { DEFAULT as $, BUTTON_SIZES as B } from "./constants.js";
import { getDisabledStyle as s, getHoverStyle as S, getActiveStyle as x, getVariantStyle as C } from "./utils.js";
import { BaseButton as k } from "../BaseButton/BaseButton.js";
import { Box as w } from "../Box/Box.js";
import { Typography as L } from "../Typography/Typography.js";
import { Flex as T } from "../Flex/Flex.js";
const j = v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, A = f(y)`
  animation: ${j} 2s infinite linear;
  will-change: transform;
`, D = f(k)`
  height: ${({ theme: i, size: t }) => i.sizes.button[t]};

  svg {
    height: ${12 / 16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${s}

    &:active {
      ${s}
    }
  }

  &:hover {
    ${S}
  }

  &:active {
    ${x}
  }

  ${C}
`, N = b.forwardRef(({ variant: i = $, startIcon: t, endIcon: n, disabled: l = !1, children: p, onClick: d, size: m = B[0], loading: o = !1, fullWidth: e = !1, ...c }, u) => {
  const a = l || o;
  return g(D, { ref: u, "aria-disabled": a, disabled: a, size: m, variant: i, onClick: (h) => {
    !a && d && d(h);
  }, fullWidth: e, alignItems: "center", background: "buttonPrimary600", borderColor: "buttonPrimary600", gap: 2, inline: e, justifyContent: e ? "center" : void 0, paddingLeft: 4, paddingRight: 4, width: e ? "100%" : void 0, ...c, children: [(t || o) && r(w, { "aria-hidden": !0, children: o ? r(A, {}) : t }), r(L, { variant: m === "S" ? "pi" : void 0, fontWeight: "bold", textColor: "buttonNeutral0", children: p }), n && r(T, { "aria-hidden": !0, children: n })] });
});
N.displayName = "Button";
export {
  N as Button,
  D as ButtonWrapper
};
