import { jsxs as i, jsx as o } from "react/jsx-runtime";
import * as s from "react";
import m, { keyframes as n } from "styled-components";
import d from "./assets/loader.svg.js";
import { VisuallyHidden as f } from "../VisuallyHidden/VisuallyHidden.js";
const l = n`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, c = m.img`
  animation: ${l} 1s infinite linear;
  will-change: transform;
  ${({ small: e, theme: r }) => e && `width: ${r.spaces[6]}; height: ${r.spaces[6]};`}
`, $ = s.forwardRef(({ children: e, small: r = !1, ...a }, t) => i("div", { role: "alert", "aria-live": "assertive", ref: t, ...a, children: [o(f, { children: e }), o(c, { src: d, "aria-hidden": !0, small: r })] }));
export {
  $ as Loader
};
