import { jsx as i } from "react/jsx-runtime";
import { Children as a, isValidElement as m, cloneElement as l } from "react";
import { Box as c } from "../Box/Box.js";
const x = ({ children: n, ...o }) => {
  const t = a.toArray(n).map((r, e) => m(r) ? l(r, {
    "aria-colindex": e + 1,
    coords: { col: e + 1, row: o["aria-rowindex"] }
  }) : r);
  return i(c, { as: "tr", ...o, children: t });
};
export {
  x as RawTr
};
