import { jsx as e } from "react/jsx-runtime";
import { useMemo as a } from "react";
import { CardContext as i } from "./CardContext.js";
import { useId as l } from "../hooks/useId.js";
import { Box as n } from "../Box/Box.js";
const p = ({ id: o, ...t }) => {
  const r = l(o), d = a(() => ({ id: r }), [r]);
  return e(i.Provider, { value: d, children: e(n, { id: o, tabIndex: 0, hasRadius: !0, background: "neutral0", borderStyle: "solid", borderWidth: "1px", borderColor: "neutral150", shadow: "tableShadow", as: "article", "aria-labelledby": `${r}-title`, ...t }) });
};
export {
  p as Card
};
