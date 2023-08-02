import { jsx as s } from "react/jsx-runtime";
import i from "react";
import { Box as m } from "../Box/Box.js";
const p = i.forwardRef(({ href: o, rel: a = "noreferrer noopener", target: f = "_self", disabled: r = !1, isExternal: e = !1, ...n }, t) => s(m, { as: "a", ref: t, target: e ? "_blank" : f, rel: e ? a : void 0, href: r ? "#" : o, "aria-disabled": r, cursor: "pointer", ...n }));
p.displayName = "BaseLink";
export {
  p as BaseLink
};
