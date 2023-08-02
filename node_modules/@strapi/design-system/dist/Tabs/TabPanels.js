import { jsx as o } from "react/jsx-runtime";
import { Children as b, cloneElement as i } from "react";
import { useTabs as s } from "./TabsContext.js";
const f = ({ children: e, ...t }) => {
  const { id: a, selectedTabIndex: r } = s(), d = b.toArray(e).map((l, n) => i(l, { id: `${a}-${n}` })).filter((l, n) => n === r);
  return o("div", { ...t, children: d });
}, x = ({ id: e, ...t }) => {
  const a = `${e}-tab`, r = `${e}-tabpanel`;
  return o("div", { id: r, role: "tabpanel", tabIndex: 0, "aria-labelledby": a, ...t });
};
export {
  x as TabPanel,
  f as TabPanels
};
