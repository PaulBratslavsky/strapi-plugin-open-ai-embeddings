import { jsxs as c, jsx as a } from "react/jsx-runtime";
import R from "react";
import i from "styled-components";
import { inputFocusStyle as T } from "../themes/utils.js";
import { Box as L } from "../Box/Box.js";
import { Flex as W } from "../Flex/Flex.js";
import { useField as j } from "../Field/FieldContext.js";
import { VisuallyHidden as z } from "../VisuallyHidden/VisuallyHidden.js";
import { Typography as h } from "../Typography/Typography.js";
const B = i.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`, S = i(L)`
  cursor: ${({ disabled: e }) => e ? "not-allowed" : void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${T()}
`, g = i(W).attrs({
  hasRadius: !0
})`
  background-color: ${({ theme: e, checked: o, disabled: n }) => o ? n ? e.colors.neutral200 : e.colors.neutral0 : "transparent"};
  border: 1px solid
    ${({ theme: e, checked: o, disabled: n }) => o && o !== null ? n ? e.colors.neutral300 : e.colors.neutral200 : n ? e.colors.neutral150 : e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
  padding-bottom: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
`, F = i.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`, I = R.forwardRef(({ size: e = "M", onLabel: o, offLabel: n, children: x, checked: r = !1, disabled: t = !1, onChange: s, ...b }, m) => {
  const { error: d, hint: y, id: p, name: w, required: C } = j(), f = "neutral600";
  let $ = !r && r !== null ? "danger700" : f, v = r ? "primary600" : f;
  const k = (u) => {
    t || s && s(u);
  };
  let l;
  return d ? l = `${p}-error` : y && (l = `${p}-hint`), c(B, { children: [a(z, { children: x }), c(S, { hasRadius: !0, disabled: t, padding: 1, display: "flex", background: t ? "neutral150" : "neutral100", borderStyle: "solid", borderWidth: "1px", borderColor: "neutral200", hasError: !!d, children: [a(g, { size: e, paddingLeft: 3, paddingRight: 3, justifyContent: "center", alignItems: "center", "aria-hidden": !0, checked: r === null ? !1 : !r, disabled: t, children: a(h, { variant: "pi", fontWeight: "bold", textTransform: "uppercase", textColor: t ? "neutral700" : $, children: n }) }), a(g, { size: e, paddingLeft: 3, paddingRight: 3, justifyContent: "center", alignItems: "center", "aria-hidden": !0, checked: r === null ? !1 : r, disabled: t, children: a(h, { variant: "pi", fontWeight: "bold", textTransform: "uppercase", textColor: t ? "neutral700" : v, children: o }) }), a(F, { type: "checkbox", "aria-disabled": t, "aria-describedby": l, onChange: (u) => k(u), name: w, ref: m, "aria-required": C, ...b, checked: !(r === null || !r) })] })] });
});
I.displayName = "ToggleCheckbox";
export {
  I as ToggleCheckbox
};
