import { jsx as f } from "react/jsx-runtime";
import u, { useContext as b } from "react";
import g from "styled-components";
import { RadioContext as h } from "./context.js";
import { getRadioSize as r, getSelectedRadioSize as t, getSelectedRadioPosition as d } from "./utils.js";
import { useId as $ } from "../hooks/useId.js";
const y = g.input`
  margin: 0;
  padding: 0;
  background-color: ${({ theme: e }) => e.colors.neutral0};
  border: 1px solid ${({ theme: e }) => e.colors.primary600};
  border-radius: 50%;
  height: ${({ size: e }) => typeof e == "number" ? e : r(e)};
  width: ${({ size: e }) => typeof e == "number" ? e : r(e)};
  -webkit-appearance: none;

  &:after {
    border-radius: 50%;
    content: '';
    position: relative;
    z-index: 1;
    display: block;
    height: ${({ size: e }) => typeof e == "number" ? e : t(e)};
    width: ${({ size: e }) => typeof e == "number" ? e : t(e)};
    left: ${d};
    top: ${d};
  }

  &:checked:after {
    background: ${({ theme: e }) => e.colors.primary600};
  }

  &:disabled {
    border: 1px solid ${({ theme: e }) => e.colors.neutral300};
    background: ${({ theme: e }) => e.colors.neutral200};
  }
`, R = u.forwardRef(({ value: e, disabled: a = !1, ...n }, i) => {
  const c = $(), { onChange: l, selected: p, name: m, size: s } = b(h), o = p === e;
  return f(y, {
    ref: i,
    type: "radio",
    name: m,
    value: e,
    tabIndex: o ? 0 : -1,
    "aria-checked": o,
    checked: o,
    disabled: a,
    id: c,
    // @ts-expect-error size is a html prop already.
    size: s,
    onChange: l,
    ...n
  });
});
R.displayName = "Radio";
export {
  R as BaseRadio
};
