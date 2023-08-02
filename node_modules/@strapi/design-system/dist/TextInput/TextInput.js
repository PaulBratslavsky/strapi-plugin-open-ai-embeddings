import { jsx as r, jsxs as s } from "react/jsx-runtime";
import { forwardRef as c, useRef as u, useImperativeHandle as h } from "react";
import { useId as I } from "../hooks/useId.js";
import { Field as x } from "../Field/Field.js";
import { Flex as F } from "../Flex/Flex.js";
import { FieldLabel as T } from "../Field/FieldLabel.js";
import { FieldInput as g } from "../Field/FieldInput.js";
import { FieldHint as w } from "../Field/FieldHint.js";
import { FieldError as R } from "../Field/FieldError.js";
const b = c(({ name: t, hint: n, error: m, label: e, labelAction: p, id: d, required: a, ...i }, l) => {
  const f = I(d), o = u(null);
  if (!e && !i["aria-label"])
    throw new Error('The TextInput component needs a "label" or an "aria-label" props');
  return h(l, () => ({
    inputWrapperRef: o
  })), r("div", { ref: o, children: r(x, { name: t, hint: n, error: m, id: f, required: a, children: s(F, { direction: "column", alignItems: "stretch", gap: 1, children: [e && r(T, { action: p, children: e }), r(g, { ...i }), r(w, {}), r(R, {})] }) }) });
});
b.displayName = "TextInput";
export {
  b as TextInput
};
