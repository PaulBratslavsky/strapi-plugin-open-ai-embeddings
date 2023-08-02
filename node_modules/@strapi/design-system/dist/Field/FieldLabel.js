import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { forwardRef as c } from "react";
import r from "styled-components";
import { useField as h } from "./FieldContext.js";
import { once as f } from "../helpers/deprecations.js";
import { Typography as n } from "../Typography/Typography.js";
import { Flex as g } from "../Flex/Flex.js";
const u = f(console.warn), A = c(({ children: e, action: o, required: i, ...l }, s) => {
  const { id: a, required: d } = h(), p = d || i;
  return i !== void 0 && u('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'), m(x, { ref: s, variant: "pi", textColor: "neutral800", htmlFor: a, fontWeight: "bold", as: "label", ...l, children: [e, p && t(y, { textColor: "danger600", children: "*" }), o && t(F, { marginLeft: 1, children: o })] });
}), x = r(n)`
  display: flex;
  align-items: center;
`, y = r(n)`
  line-height: 0;
`, F = r(g)`
  line-height: 0;

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }
`;
export {
  A as FieldLabel
};
