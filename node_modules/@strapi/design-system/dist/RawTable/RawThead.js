import { jsx as o } from "react/jsx-runtime";
import { Children as a, isValidElement as i, cloneElement as m } from "react";
const p = ({ children: e, ...n }) => {
  const t = a.toArray(e).map((r) => i(r) ? m(r, { "aria-rowindex": 1 }) : r);
  return o("thead", { ...n, children: t });
};
export {
  p as RawThead
};
