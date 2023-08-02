import { jsx as r } from "react/jsx-runtime";
import { Box as i } from "../../Box/Box.js";
import { Typography as p } from "../../Typography/Typography.js";
const d = ({ children: t, isCurrent: o = !1, ...a }) => r(i, { paddingLeft: 2, paddingRight: 2, paddingTop: 1, paddingBottom: 1, children: r(p, { variant: "pi", textColor: "neutral800", fontWeight: o ? "bold" : "normal", "aria-current": o, ...a, children: t }) });
d.displayName = "Crumb";
export {
  d as Crumb
};
