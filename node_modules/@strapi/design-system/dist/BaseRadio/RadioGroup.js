import { jsx as d } from "react/jsx-runtime";
import { useRef as n, useLayoutEffect as p, useMemo as u } from "react";
import { RadioContext as l } from "./context.js";
import { setTabIndexOnFirstItem as x } from "../helpers/setTabIndexOnFirstItem.js";
const G = ({ children: f, labelledBy: c, onChange: t, value: r = "", size: e = "M", name: o, ...s }) => {
  const i = n(null);
  p(() => {
    r || x(i.current, `[name="${o}"]`);
  }, [r, o]);
  const m = u(() => ({ onChange: t, selected: r, name: o, size: e }), [o, t, e, r]);
  return d(l.Provider, { value: m, children: d("div", { ref: i, role: "radiogroup", "aria-labelledby": c, ...s, children: f }) });
};
export {
  G as RadioGroup
};
