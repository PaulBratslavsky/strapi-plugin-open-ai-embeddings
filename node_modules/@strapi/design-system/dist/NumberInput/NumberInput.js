import { jsx as n, jsxs as h, Fragment as _ } from "react/jsx-runtime";
import j, { useRef as b } from "react";
import { NumberParser as E, NumberFormatter as M } from "@internationalized/number";
import { CarretDown as N } from "@strapi/icons";
import q from "styled-components";
import { useDesignSystem as z } from "../DesignSystemProvider.js";
import { KeyboardKeys as g } from "../helpers/keyboardKeys.js";
import { useControllableState as H } from "../hooks/useControllableState.js";
import { useId as O } from "../hooks/useId.js";
import { FieldInput as T } from "../Field/FieldInput.js";
import { Field as W } from "../Field/Field.js";
import { Flex as X } from "../Flex/Flex.js";
import { FieldLabel as Y } from "../Field/FieldLabel.js";
import { Icon as w } from "../Icon/Icon.js";
import { FieldHint as G } from "../Field/FieldHint.js";
import { FieldError as J } from "../Field/FieldError.js";
const x = q.button`
  display: flex;
  height: 1rem;
  align-items: ${({ reverse: t }) => t ? "flex-end" : "flex-start"};
  transform: translateY(${({ reverse: t }) => t ? "-2px" : "2px"});
  cursor: ${({ disabled: t }) => t ? "not-allowed" : void 0};
  svg {
    display: block;
    height: ${4 / 16}rem;
    transform: ${({ reverse: t }) => t ? "rotateX(180deg)" : void 0};
  }
`, Q = "", he = j.forwardRef(({ size: t = "M", startAction: y, name: I, hint: F, error: V, label: c, labelAction: D, locale: A, id: C, onValueChange: k, value: u, step: a = 1, required: P = !1, disabled: m = !1, ...R }, S) => {
  const $ = O(C), K = z("NumberInput"), d = A || K.locale, s = b(new E(d, { style: "decimal" })), l = b(new M(d, { maximumFractionDigits: 20 })), [o, v] = H({
    prop(e) {
      const r = String(u);
      return isNaN(Number(r)) || r !== e && e !== "" ? e : l.current.format(Number(u));
    },
    defaultProp: Q,
    onChange(e) {
      const r = s.current.parse(e ?? "");
      k(isNaN(r) ? void 0 : r);
    }
  }), i = (e) => {
    v(String(e));
  }, B = ({ target: { value: e } }) => {
    s.current.isValidPartialNumber(e) && i(e);
  }, f = () => {
    if (!o) {
      i(a);
      return;
    }
    const e = s.current.parse(o), r = isNaN(e) ? a : e + a;
    i(l.current.format(r));
  }, p = () => {
    if (!o) {
      i(-a);
      return;
    }
    const e = s.current.parse(o), r = isNaN(e) ? -a : e - a;
    i(l.current.format(r));
  }, L = (e) => {
    if (!m)
      switch (e.key) {
        case g.DOWN: {
          e.preventDefault(), p();
          break;
        }
        case g.UP: {
          e.preventDefault(), f();
          break;
        }
      }
  }, U = () => {
    if (o) {
      const e = s.current.parse(o), r = isNaN(e) ? "" : l.current.format(e);
      i(r);
    }
  };
  return n(W, { name: I, hint: F, error: V, id: $, required: P, children: h(X, { direction: "column", alignItems: "stretch", gap: 1, children: [c && n(Y, { action: D, children: c }), n(T, { ref: S, startAction: y, disabled: m, type: "text", inputMode: "decimal", onChange: B, onKeyDown: L, onBlur: U, value: o, size: t, endAction: h(_, { children: [n(x, { disabled: m, "aria-hidden": !0, reverse: !0, onClick: f, tabIndex: -1, type: "button", "data-testid": "ArrowUp", children: n(w, { as: N, color: "neutral500" }) }), n(x, { disabled: m, "aria-hidden": !0, onClick: p, tabIndex: -1, type: "button", "data-testid": "ArrowDown", children: n(w, { as: N, color: "neutral500" }) })] }), ...R }), n(G, {}), n(J, {})] }) });
});
export {
  he as NumberInput
};
