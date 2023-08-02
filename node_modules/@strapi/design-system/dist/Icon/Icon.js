import { jsx as m } from "react/jsx-runtime";
import f from "react";
import c from "styled-components";
import { extractStyleFromTheme as l } from "../helpers/theme.js";
import { Box as p } from "../Box/Box.js";
const a = c(p)`
  path {
    fill: ${({ color: o, theme: r }) => l(r.colors, o, void 0)};
  }
  ${({ theme: o, colors: r }) => r(o)}
`, n = f.forwardRef(({ color: o = "neutral600", colors: r = () => "", ...t }, e) => m(a, { ref: e, color: o, colors: r, ...t }));
n.displayName = "Icon";
export {
  n as Icon
};
