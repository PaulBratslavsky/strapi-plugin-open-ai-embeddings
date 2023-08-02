import { jsx as i } from "react/jsx-runtime";
import { Children as m, isValidElement as a, cloneElement as l } from "react";
const s = ({ children: e, ...n }) => {
  const o = m.toArray(e).map((r, t) => a(r) ? l(r, { "aria-rowindex": t + 2 }) : r);
  return i("tbody", { ...n, children: o });
};
export {
  s as RawTbody
};
