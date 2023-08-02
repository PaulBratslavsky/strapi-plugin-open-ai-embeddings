import { jsx as r, jsxs as d } from "react/jsx-runtime";
import a from "styled-components";
import { useId as c } from "../hooks/useId.js";
import { useField as p } from "../Field/FieldContext.js";
import { Typography as f } from "../Typography/Typography.js";
import { Field as x } from "../Field/Field.js";
import { Flex as h } from "../Flex/Flex.js";
import { Box as b } from "../Box/Box.js";
import { FieldHint as u } from "../Field/FieldHint.js";
import { FieldError as g } from "../Field/FieldError.js";
import { BaseCheckbox as k } from "../BaseCheckbox/BaseCheckbox.js";
const y = a(f)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  }
`, C = (e) => {
  const { id: o } = p();
  return r(k, { id: o, ...e });
}, q = ({ children: e, disabled: o = !1, id: s, hint: l, error: m, ...n }) => {
  const i = c(s);
  let t;
  return m ? t = `${i}-error` : l && (t = `${i}-hint`), r(x, { id: i, hint: l, error: m, children: d(h, { direction: "column", alignItems: "stretch", gap: 1, children: [d(y, { as: "label", textColor: "neutral800", disabled: o, children: [r(C, { disabled: o, "aria-describedby": t, ...n }), r(b, { paddingLeft: 2, children: e })] }), r(u, {}), r(g, {})] }) });
};
export {
  q as Checkbox
};
