import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, cloneElement as a } from "react";
import d from "styled-components";
import { Flex as l } from "../Flex/Flex.js";
import { VisuallyHidden as f } from "../VisuallyHidden/VisuallyHidden.js";
const m = d(l)`
  font-size: 1.6rem;
  padding: 0;
`, x = s(({ label: e, children: r, ...t }, o) => n(m, { justifyContent: "unset", background: "transparent", borderStyle: "none", type: "button", ...t, as: "button", ref: o, children: [i(f, { as: "span", children: e }), a(r, {
  "aria-hidden": !0,
  focusable: !1
  // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
})] }));
export {
  x as FieldAction
};
