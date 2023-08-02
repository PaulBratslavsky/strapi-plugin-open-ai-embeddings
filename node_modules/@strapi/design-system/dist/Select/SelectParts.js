import { jsx as t, jsxs as l } from "react/jsx-runtime";
import * as a from "react";
import { Cross as y, CarretDown as R } from "@strapi/icons";
import { Select as o } from "@strapi/ui-primitives";
import s, { css as I } from "styled-components";
import { useComposedRefs as S } from "../hooks/useComposeRefs.js";
import { Flex as c } from "../Flex/Flex.js";
import { Box as p } from "../Box/Box.js";
import { getThemeSize as C, inputFocusStyle as T } from "../themes/utils.js";
import { Typography as u } from "../Typography/Typography.js";
const k = a.forwardRef(({ onClear: e, clearLabel: r = "Clear", startIcon: i, disabled: n, hasError: m, size: h = "M", children: f, ...g }, $) => {
  const d = a.useRef(null), w = (x) => {
    e && !n && (e(x), d.current.focus());
  }, b = S(d, $);
  return t(o.Trigger, { asChild: !0, children: l(V, { "aria-disabled": n, $hasError: m, $size: h, ref: b, alignItems: "center", justifyContent: "space-between", position: "relative", overflow: "hidden", hasRadius: !0, background: n ? "neutral150" : "neutral0", paddingLeft: 3, paddingRight: 3, gap: 4, cursor: "default", width: "100%", ...g, children: [l(c, { flex: "1", as: "span", gap: 3, children: [i && t(p, { as: "span", "aria-hidden": !0, children: i }), f] }), l(c, { as: "span", gap: 3, children: [e ? t(v, { as: "button", hasRadius: !0, background: "transparent", role: "button", tabIndex: 0, onClick: w, "aria-disabled": n, "aria-label": r, title: r, cursor: "pointer", children: t(y, {}) }) : null, t(z, { children: t(R, {}) })] })] }) });
}), v = s(p)`
  border: none;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }
`, V = s(c)`
  border: 1px solid ${({ theme: e, $hasError: r }) => r ? e.colors.danger600 : e.colors.neutral200};
  min-height: ${({ theme: e, $size: r }) => C("input")({ theme: e, size: r })};

  &[aria-disabled='true'] {
    color: ${(e) => e.theme.colors.neutral600};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({ theme: e, $hasError: r }) => T()({ theme: e, hasError: r })};
`, z = s(o.Icon)`
  & > svg {
    width: ${6 / 16}rem;

    & > path {
      fill: ${({ theme: e }) => e.colors.neutral600};
    }
  }
`, j = a.forwardRef(({ children: e, placeholder: r, ...i }, n) => t(F, { ref: n, ellipsis: !0, ...i, children: t(B, { placeholder: r, children: e }) })), F = s(u)`
  flex: 1;
`, B = s(o.Value)`
  display: flex;
  gap: ${({ theme: e }) => e.spaces[1]};
  flex-wrap: wrap;
`, D = s(o.Content)`
  background: ${({ theme: e }) => e.colors.neutral0};
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
  border-radius: ${({ theme: e }) => e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({ theme: e }) => e.zIndices[1]};
`, E = s(o.Viewport)`
  padding: ${({ theme: e }) => e.spaces[1]};
`, G = a.forwardRef((e, r) => t(q, { ref: r, ...e })), P = I`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${(e) => e.theme.borderRadius};
  padding: ${(e) => `${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({ theme: e }) => e.spaces[4]};
  background-color: ${({ theme: e }) => e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({ theme: e }) => e.spaces[2]};
  white-space: nowrap;
  user-select: none;

  &:focus-visible {
    outline: none;
    background-color: ${({ theme: e }) => e.colors.primary100};
  }
`, q = s(o.Item)`
  ${P}

  &:hover {
    background-color: ${({ theme: e }) => e.colors.primary100};
  }

  &[data-state='checked'] {
    ${u} {
      font-weight: bold;
      color: ${({ theme: e }) => e.colors.primary600};
    }
  }
`, U = o.Root, W = k, X = j, Y = o.Portal, Z = D, _ = E, ee = G, re = o.ItemIndicator, oe = o.ItemText, te = o.Group;
export {
  Z as Content,
  te as Group,
  ee as Item,
  re as ItemIndicator,
  oe as ItemText,
  Y as Portal,
  U as Root,
  W as Trigger,
  X as Value,
  _ as Viewport
};
