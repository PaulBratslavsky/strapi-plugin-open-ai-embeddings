import { jsx as e } from "react/jsx-runtime";
import s from "styled-components";
import i from "../helpers/handleResponsiveValues.js";
import { Box as m } from "../Box/Box.js";
const a = s(m)`
  display: grid;
  grid-template-columns: repeat(${({ gridCols: r }) => r}, 1fr);
  ${({ theme: r, gap: o }) => i("gap", o, r)}
`, f = (r) => {
  const { gap: o = "0", gridCols: p = 12, ...t } = r;
  return e(a, { gap: o, gridCols: p, ...t });
};
export {
  f as Grid
};
