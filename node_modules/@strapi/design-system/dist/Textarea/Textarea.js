import { jsx as e, jsxs as x } from "react/jsx-runtime";
import m from "react";
import c from "styled-components";
import { useId as g } from "../hooks/useId.js";
import { inputFocusStyle as F } from "../themes/utils.js";
import { Box as u } from "../Box/Box.js";
import { useField as $ } from "../Field/FieldContext.js";
import { Field as R } from "../Field/Field.js";
import { Flex as b } from "../Flex/Flex.js";
import { FieldLabel as w } from "../Field/FieldLabel.js";
import { FieldHint as y } from "../Field/FieldHint.js";
import { FieldError as z } from "../Field/FieldError.js";
const E = c(u)`
  ${F()}
`, I = c(u)`
  border: none;
  resize: none;

  ::placeholder {
    color: ${({ theme: r }) => r.colors.neutral500};
    font-size: ${({ theme: r }) => r.fontSizes[2]};
    color: ${({ theme: r }) => r.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`, q = m.forwardRef(({ disabled: r, ...a }, d) => {
  const { id: o, error: i, hint: l, required: s } = $(), t = !!i;
  let n = l ? `${o}-hint` : void 0;
  return i && (n = `${o}-error`), e(E, { borderColor: t ? "danger600" : "neutral200", hasError: t, hasRadius: !0, children: e(I, { "aria-describedby": n, "aria-invalid": t, "aria-required": s, as: "textarea", background: r ? "neutral150" : "neutral0", color: r ? "neutral600" : "neutral800", disabled: r, fontSize: 2, hasRadius: !0, height: `${105 / 16}rem`, id: o, ref: d, lineHeight: 4, padding: 4, width: "100%", ...a }) });
}), A = m.forwardRef(({ name: r, hint: a, error: d, label: o, labelAction: i, id: l, required: s = !1, children: t, value: n, ...f }, p) => {
  const h = g(l);
  return e(R, { name: r, hint: a, error: d, id: h, required: s, children: x(b, { direction: "column", alignItems: "stretch", gap: 1, children: [o && e(w, { action: i, children: o }), e(q, { ref: p, value: t ?? n, ...f }), e(y, {}), e(z, {})] }) });
});
export {
  A as Textarea
};
