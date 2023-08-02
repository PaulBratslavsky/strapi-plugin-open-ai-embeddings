import { jsx as m } from "react/jsx-runtime";
import * as e from "react";
import { TabsContext as x } from "./TabsContext.js";
import { useId as f } from "../hooks/useId.js";
const l = e.forwardRef(({ id: c, initialSelectedTabIndex: n = 0, label: t, onTabChange: o, variant: r, ...i }, p) => {
  const s = f(c), [d, a] = e.useState(n);
  e.useImperativeHandle(p, () => ({
    _handlers: { setSelectedTabIndex: a }
  }));
  const u = e.useMemo(() => ({ id: s, selectedTabIndex: d, selectTabIndex: a, label: t, variant: r, onTabChange: o }), [t, o, d, s, r]);
  return m(x.Provider, { value: u, children: m("div", { ...i }) });
});
l.displayName = "TabGroup";
export {
  l as TabGroup
};
