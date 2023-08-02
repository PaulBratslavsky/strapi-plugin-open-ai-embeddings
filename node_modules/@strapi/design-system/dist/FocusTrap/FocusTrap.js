import { jsx as a } from "react/jsx-runtime";
import { useRef as m, useEffect as l } from "react";
import { getFocusableNodes as u } from "../helpers/getFocusableNodes.js";
import { KeyboardKeys as c } from "../helpers/keyboardKeys.js";
const v = ({ onEscape: r, restoreFocus: o = !0, ...i }) => {
  const n = m(null);
  return l(() => {
    let e = null;
    return o && (e = document.activeElement), () => {
      e && e.focus();
    };
  }, [o]), l(() => {
    if (!n.current)
      return;
    const e = u(n.current);
    e.length > 0 ? e[0].focus() : console.warn("[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one.");
  }, []), a("div", { ref: n, onKeyDown: (e) => {
    if (e.key === c.ESCAPE && r) {
      r();
      return;
    }
    if (e.key !== c.TAB)
      return;
    const t = u(n.current);
    if (t.length > 0) {
      const s = t[0], f = t[t.length - 1];
      e.shiftKey ? s === document.activeElement && (e.preventDefault(), f.focus()) : f === document.activeElement && (e.preventDefault(), s.focus());
    }
  }, ...i });
};
export {
  v as FocusTrap
};
