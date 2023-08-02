import { jsxs as y, jsx as a } from "react/jsx-runtime";
import { forwardRef as w } from "react";
import p, { css as R } from "styled-components";
import { useField as I } from "./FieldContext.js";
import { inputFocusStyle as k } from "../themes/utils.js";
import { Box as l } from "../Box/Box.js";
import { Flex as B } from "../Flex/Flex.js";
const c = {
  S: 6.5,
  M: 10.5
}, M = w(({ endAction: r, startAction: o, disabled: e = !1, onChange: d, size: u = "M", ...f }, $) => {
  const { id: i, error: t, hint: h, name: g, required: m } = I();
  let n;
  t ? n = `${i}-error` : h && (n = `${i}-hint`);
  const s = !!t, b = (x) => {
    !e && d && d(x);
  };
  return y(j, { justifyContent: "space-between", hasError: s, disabled: e, children: [o ? a(l, { paddingLeft: 3, paddingRight: 2, children: o }) : null, a(F, { id: i, name: g, ref: $, "aria-describedby": n, "aria-invalid": s, "aria-disabled": e, disabled: e, "data-disabled": e ? "" : void 0, hasLeftAction: !!o, hasRightAction: !!r, onChange: b, "aria-required": m, $size: u, ...f }), r ? a(l, { paddingLeft: 2, paddingRight: 3, children: r }) : null] });
}), F = p.input`
  border: none;
  border-radius: ${({ theme: r }) => r.borderRadius};
  padding-bottom: ${({ $size: r }) => `${c[r] / 16}rem`};
  padding-left: ${({ theme: r, hasLeftAction: o }) => o ? 0 : r.spaces[4]};
  padding-right: ${({ theme: r, hasRightAction: o }) => o ? 0 : r.spaces[4]};
  padding-top: ${({ $size: r }) => `${c[r] / 16}rem`};
  cursor: ${(r) => r["aria-disabled"] ? "not-allowed" : void 0};

  color: ${({ theme: r }) => r.colors.neutral800};
  font-weight: 400;
  font-size: ${(r) => r.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({ theme: r }) => r.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`, j = p(B)`
  border: 1px solid ${({ theme: r, hasError: o }) => o ? r.colors.danger600 : r.colors.neutral200};
  border-radius: ${({ theme: r }) => r.borderRadius};
  background: ${({ theme: r }) => r.colors.neutral0};
  ${k()}

  ${({ theme: r, disabled: o }) => o ? R`
          color: ${r.colors.neutral600};
          background: ${r.colors.neutral150};
        ` : void 0}
`;
export {
  M as FieldInput,
  j as InputWrapper
};
