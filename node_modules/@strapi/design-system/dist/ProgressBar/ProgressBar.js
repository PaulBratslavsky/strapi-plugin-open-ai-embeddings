import { jsx as s } from "react/jsx-runtime";
import l from "styled-components";
import { Box as n } from "../Box/Box.js";
const u = l(n)`
  &:before {
    background-color: ${({ theme: r }) => r.colors.neutral0};
    border-radius: ${({ theme: r }) => r.borderRadius};
    bottom: 0;
    content: '';
    position: absolute;
    top: 0;
    width: ${({ value: r }) => `${r}%`};
  }
`, m = ({ min: r = 0, max: e = 100, value: o = 0, children: t, size: a = "M", ...i }) => s(u, { background: "neutral600", hasRadius: !0, "aria-label": t, "aria-valuemax": e, "aria-valuemin": r, "aria-valuenow": o, height: a === "S" ? 1 : 2, position: "relative", role: "progressbar", value: o, width: a === "S" ? "78px" : "102px", ...i });
export {
  m as ProgressBar
};
