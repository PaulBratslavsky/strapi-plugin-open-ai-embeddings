import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import * as n from "@radix-ui/react-dropdown-menu";
import { CarretDown as f, ChevronRight as S } from "@strapi/icons";
import l, { css as w } from "styled-components";
import { extractStyleFromTheme as x } from "../../helpers/theme.js";
import { Link as y } from "../Link/Link.js";
import { Button as C } from "../../Button/Button.js";
import { Box as $ } from "../../Box/Box.js";
import { Flex as c } from "../../Flex/Flex.js";
import { Typography as i } from "../../Typography/Typography.js";
const v = n.Root, k = a(({ size: r, endIcon: o = e(f, { width: `${6 / 16}rem`, height: `${4 / 16}rem`, "aria-hidden": !0 }), ...t }, d) => e(n.Trigger, { asChild: !0, children: e(C, { ref: d, type: "button", variant: "ghost", endIcon: o, paddingTop: r === "S" ? 1 : 2, paddingBottom: r === "S" ? 1 : 2, paddingLeft: r === "S" ? 3 : 4, paddingRight: r === "S" ? 3 : 4, ...t }) })), R = a(({ children: r, intersectionId: o, popoverPlacement: t = "bottom-start", ...d }, p) => {
  const [b, m] = t.split("-");
  return e(n.Portal, { children: e(n.Content, { align: m, side: b, loop: !0, asChild: !0, children: s(u, { ref: p, direction: "column", borderStyle: "solid", borderWidth: "1px", borderColor: "neutral150", hasRadius: !0, background: "neutral0", shadow: "filterShadow", maxHeight: "15rem", padding: 1, alignItems: "flex-start", position: "relative", overflow: "auto", ...d, children: [r, e($, { id: o, width: "100%", height: "1px" })] }) }) });
}), u = l(c)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`, T = ({ onSelect: r, disabled: o = !1, ...t }) => e(n.Item, { asChild: !0, onSelect: r, disabled: o, children: t.isLink || t.isExternal ? e(L, { color: "neutral800", ...t, isExternal: t.isExternal ?? !1, children: e(i, { children: t.children }) }) : e(g, { cursor: "pointer", color: "neutral800", background: "transparent", borderStyle: "none", ...t, children: e(i, { children: t.children }) }) }), h = ({ theme: r }) => w`
  text-align: left;
  width: 100%;
  border-radius: ${r.borderRadius};
  padding: ${r.spaces[2]} ${r.spaces[4]};

  ${i} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${i} {
      color: ${r.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${r.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`, g = l(c)`
  ${h}
`, L = l(y)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({ theme: r, color: o }) => x(r.colors, o, void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${h}
`, M = a((r, o) => e(n.Label, { asChild: !0, children: e(I, { ref: o, variant: "sigma", textColor: "neutral600", ...r }) })), I = l(i)`
  padding: ${({ theme: r }) => r.spaces[2]} ${({ theme: r }) => r.spaces[4]};
`, B = n.Sub, O = a(({ disabled: r = !1, ...o }, t) => e(n.SubTrigger, { asChild: !0, disabled: r, children: s(E, { ref: t, color: "neutral800", as: "button", type: "button", background: "transparent", borderStyle: "none", gap: 5, ...o, children: [e(i, { children: o.children }), e(W, { height: 12, width: 12 })] }) })), E = l(g)`
  &[data-state='open'] {
    background-color: ${({ theme: r }) => r.colors.primary100};
  }
`, W = l(S)`
  path {
    fill: ${({ theme: r }) => r.colors.neutral500};
  }
`, j = a((r, o) => e(n.Portal, { children: e(n.SubContent, { sideOffset: 8, asChild: !0, children: e(u, { ref: o, direction: "column", borderStyle: "solid", borderWidth: "1px", borderColor: "neutral150", hasRadius: !0, background: "neutral0", shadow: "filterShadow", maxHeight: "15rem", padding: 1, alignItems: "flex-start", overflow: "auto", ...r }) }) })), N = v, Q = k, U = R, X = T, Y = M, Z = B, _ = O, z = j;
export {
  U as Content,
  X as Item,
  Y as Label,
  N as Root,
  z as SubContent,
  Z as SubRoot,
  _ as SubTrigger,
  Q as Trigger
};
