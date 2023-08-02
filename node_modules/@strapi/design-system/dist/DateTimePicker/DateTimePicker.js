import { jsx as o, jsxs as P } from "react/jsx-runtime";
import U from "react";
import { getLocalTimeZone as b, parseAbsoluteToLocal as Z, toCalendarDateTime as v } from "@internationalized/date";
import $ from "styled-components";
import { DatePickerInput as G } from "../DatePicker/DatePicker.js";
import { useDesignSystem as J } from "../DesignSystemProvider.js";
import { once as K } from "../helpers/deprecations.js";
import { useControllableState as Q } from "../hooks/useControllableState.js";
import { useDateFormatter as W } from "../hooks/useDateFormatter.js";
import { useId as I } from "../hooks/useId.js";
import { TimePickerInput as X } from "../TimePicker/TimePicker.js";
import { Field as Y } from "../Field/Field.js";
import { Flex as L } from "../Flex/Flex.js";
import { FieldLabel as ee } from "../Field/FieldLabel.js";
import { VisuallyHidden as S } from "../VisuallyHidden/VisuallyHidden.js";
import { FieldHint as te } from "../Field/FieldHint.js";
import { FieldError as re } from "../Field/FieldError.js";
const xe = ({
  /**
   * @preserve
   * @deprecated This is no longer used.
   */
  ariaLabel: n,
  clearLabel: d = "clear",
  dateLabel: p = "Choose date",
  timeLabel: a = "Choose time",
  disabled: s = !1,
  error: h,
  hint: V,
  id: _,
  label: N,
  labelAction: R,
  onChange: k,
  onClear: c,
  name: j,
  required: D = !1,
  /**
   * @preserve
   * @deprecated This is no longer used.
   */
  selectButtonTitle: ae,
  size: C = "M",
  step: z,
  value: g,
  initialDate: w,
  ...B
}) => {
  const x = U.useRef(null), [t, f] = Q({
    defaultProp: w ? m(w, !1) : void 0,
    prop: g ? m(g, !1) : g ?? void 0,
    onChange(e) {
      k && k(e?.toDate(b()));
    }
  }), H = J("DateTimePicker"), O = W(H.locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }), l = t ? O.format(t.toDate(b())) : "", q = (e) => {
    let r = e ? m(e) : void 0;
    if (!(r && t && r.compare(t) === 0)) {
      if (l && r) {
        const [u, T] = l.split(":");
        r = r.set({ hour: parseInt(u, 10), minute: parseInt(T, 10) });
      }
      f(r);
    }
  }, A = (e) => {
    if (!e)
      return;
    const [r, u] = e.split(":"), T = t ? t.set({ hour: parseInt(r, 10), minute: parseInt(u, 10) }) : m(/* @__PURE__ */ new Date()).set({ hour: parseInt(r, 10), minute: parseInt(u, 10) });
    f(T);
  }, E = (e) => {
    f(void 0), c && c(e);
  }, M = () => {
    const e = t ? t.set({ hour: 0, minute: 0 }) : m(/* @__PURE__ */ new Date());
    f(e);
  }, i = I(_), y = I(), F = I();
  return o(Y, { name: j, as: "fieldset", id: i, "aria-labelledby": i, hint: V, error: h, required: D, children: P(L, { as: "span", direction: "column", alignItems: "stretch", gap: 1, children: [o(ee, { onClick: () => {
    x.current.focus();
  }, as: "legend", id: i, action: R, children: N }), P(L, { flex: "1", gap: 1, children: [o(S, { as: "label", htmlFor: F, children: p }), o(ie, { ...B, selectedDate: t?.toDate(b()), onChange: q, error: typeof h == "string", required: D, size: C, onClear: c ? E : void 0, clearLabel: `${d} date`, disabled: s, id: F, ref: x, "aria-describedby": `${i}-hint ${i}-error` }), o(S, { as: "label", htmlFor: y, children: a }), o(ne, { size: C, error: typeof h == "string", value: l, onChange: A, onClear: c && l !== void 0 && l !== "00:00" ? M : void 0, clearLabel: `${d} time`, required: D, disabled: s, step: z, id: y, "aria-describedby": `${i}-hint ${i}-error` })] }), o(te, {}), o(re, {})] }) });
}, oe = K(console.warn), m = (n, d = !0) => {
  if (typeof n == "string") {
    oe("It looks like you're passing a string as representation of a Date to the DatePicker. This is deprecated, look to passing a Date instead.");
    const s = Date.parse(n);
    Number.isNaN(s) ? n = /* @__PURE__ */ new Date() : n = new Date(s);
  }
  const p = n.toISOString();
  let a = Z(p);
  return d && (a = a.set({ hour: 0, minute: 0 })), v(a);
}, ie = $(G)`
  flex: 1 1 70%;
  min-width: 120px;
`, ne = $(X)`
  flex: 1 1 30%;
  min-width: 120px;
`;
export {
  xe as DateTimePicker,
  m as convertUTCDateToCalendarDateTime
};
