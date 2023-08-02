import { jsx as r } from "react/jsx-runtime";
import * as n from "react";
import { PaginationContext as c } from "./PaginationContext.js";
import { Box as p } from "../Box/Box.js";
import { Flex as s } from "../Flex/Flex.js";
const u = ({ children: t, label: a = "Pagination", activePage: o, pageCount: i }) => {
  const e = n.useMemo(() => ({ activePage: o, pageCount: i }), [o, i]);
  return r(c.Provider, { value: e, children: r(p, { "aria-label": a, as: "nav", children: r(s, { as: "ol", gap: 1, children: n.Children.map(t, (m, l) => r("li", { children: m }, l)) }) }) });
};
export {
  u as Pagination
};
