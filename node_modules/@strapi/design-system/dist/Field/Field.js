import { jsx as d } from "react/jsx-runtime";
import { forwardRef as l, useMemo as p } from "react";
import { FieldContext as x } from "./FieldContext.js";
import { useId as a } from "../hooks/useId.js";
import { Box as u } from "../Box/Box.js";
const j = l(({ children: f, name: o, error: r, hint: e, id: i, required: t = !1, ...n }, s) => {
  const m = a(i), c = p(() => ({ name: o, id: m, error: r, hint: e, required: t }), [r, m, e, o, t]);
  return d(u, { ref: s, ...n, children: d(x.Provider, { value: c, children: f }) });
});
export {
  j as Field
};
