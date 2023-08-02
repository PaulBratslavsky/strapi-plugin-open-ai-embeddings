import { jsxs as I, jsx as s } from "react/jsx-runtime";
import { useRef as h, useState as g } from "react";
import { Root as x, Trigger as R, Content as C, Item as M } from "./Menu.js";
import * as $ from "./Menu.js";
import { stripReactIdOfColon as j } from "../../helpers/strings.js";
import { useId as y } from "../../hooks/useId.js";
import { useIntersection as O } from "../../hooks/useIntersection.js";
const P = ({ children: c, onOpen: t, onClose: n, popoverPlacement: f, onReachEnd: o, ...r }) => {
  const m = h(null), [l, p] = g(!1), a = (e) => {
    o && o(e);
  }, d = (e) => {
    e && typeof t == "function" ? t() : !e && typeof n == "function" && n(), p(e);
  }, u = y(), i = `intersection-${j(u)}`;
  return O(m, a, {
    selectorToWatch: `#${i}`,
    /**
     * We need to know when the select is open because only then will viewportRef
     * not be null. Because it uses a portal that (sensibly) is not mounted 24/7.
     */
    skipWhen: !l
  }), I(x, { onOpenChange: d, children: [s(R, { ...r, children: r.label }), s(C, { intersectionId: i, popoverPlacement: f, children: c })] });
}, q = M;
export {
  $ as Menu,
  q as MenuItem,
  P as SimpleMenu
};
