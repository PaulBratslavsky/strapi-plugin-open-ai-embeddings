import { jsx as r, jsxs as D } from "react/jsx-runtime";
import * as m from "react";
import { Clock as M } from "@strapi/icons";
import S from "styled-components";
import { ComboboxInput as $, Option as v } from "../Combobox/Combobox.js";
import { useDesignSystem as L } from "../DesignSystemProvider.js";
import { useControllableState as P } from "../hooks/useControllableState.js";
import { useDateFormatter as j } from "../hooks/useDateFormatter.js";
import { useId as V } from "../hooks/useId.js";
import { Field as E } from "../Field/Field.js";
import { Flex as O } from "../Flex/Flex.js";
import { FieldLabel as _ } from "../Field/FieldLabel.js";
import { FieldHint as q } from "../Field/FieldHint.js";
import { FieldError as z } from "../Field/FieldError.js";
const h = (o) => !!o.match(/^[^a-zA-Z]*$/), H = ({
  id: o,
  step: a = 15,
  /**
   * @preserve
   * @deprecated This is no longer used.
   */
  ariaLabel: b,
  /**
   * @preserve
   * @deprecated This is no longer used.
   */
  selectButtonTitle: C,
  value: n,
  defaultValue: c,
  onChange: d,
  ...u
}) => {
  const w = L("TimePicker"), k = V(o), [I, l] = m.useState(""), [x, f] = P({
    prop: n,
    defaultProp: c,
    onChange: d
  }), s = j(w.locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }), p = m.useMemo(() => {
    const e = s.formatToParts(/* @__PURE__ */ new Date()), { value: t } = e.find((i) => i.type === "literal");
    return t;
  }, [s]), A = m.useMemo(() => {
    const e = 60 / a;
    return [...Array(24).keys()].flatMap((t) => [...Array(e).keys()].map((i) => s.format(new Date(0, 0, 0, t, i * a))));
  }, [a, s]), F = (e) => {
    (!e || h(e)) && l(e);
  }, y = (e) => {
    const [t, i] = e.split(p);
    if (!t && !i)
      return;
    const T = Number(t ?? "0"), g = Number(i ?? "0");
    if (!(T > 23 || g > 59))
      return s.format(new Date(0, 0, 0, T, g));
  }, N = (e) => {
    const t = y(e.target.value);
    t ? (l(t), f(t)) : l(x);
  }, B = (e) => {
    if (typeof e < "u") {
      const t = y(e);
      f(t);
    } else
      f(e);
  };
  return m.useEffect(() => {
    const e = typeof n > "u" ? "" : n;
    h(e) && l(e);
  }, [n, l]), r($, { ...u, value: x, onChange: B, isPrintableCharacter: h, allowCustomValue: !0, placeholder: `--${p}--`, autocomplete: "none", startIcon: r(R, {}), id: k, inputMode: "numeric", pattern: `\\d{2}${p}\\d{2}`, textValue: I, onTextValueChange: F, onBlur: N, children: A.map((e) => r(v, { value: e, children: e }, e)) });
}, R = S(M)`
  height: 1rem;
  width: 1rem;

  & > path {
    fill: ${({ theme: o }) => o.colors.neutral500};
  }
`, ne = ({ label: o, error: a, hint: b, id: C, required: n, labelAction: c, ...d }) => {
  const u = V(C);
  return r(E, { hint: b, error: a, id: u, required: n, children: D(O, { direction: "column", alignItems: "stretch", gap: 1, children: [r(_, { action: c, children: o }), r(H, { id: u, error: a, required: n, ...d }), r(q, {}), r(z, {})] }) });
};
export {
  ne as TimePicker,
  H as TimePickerInput
};
