import { jsx as g } from "react/jsx-runtime";
import { useRef as y, useState as I, useLayoutEffect as N, useCallback as v } from "react";
import { useTable as w } from "./RawTableContext.js";
import { getFocusableNodes as u, getFocusableNodesWithKeyboardNav as b } from "../helpers/getFocusableNodes.js";
import { KeyboardKeys as f } from "../helpers/keyboardKeys.js";
import { Box as A } from "../Box/Box.js";
const D = (n) => g(B, { ...n, as: "th" }), B = ({ coords: n = { col: 0, row: 0 }, as: h = "td", ...E }) => {
  const s = y(null), { rowIndex: p, colIndex: x, setTableValues: m } = w(), [r, l] = I(!1), T = (e) => {
    const t = u(s.current, !0);
    if (t.length === 0 || t.length === 1 && b(t).length === 0)
      return;
    if (t.length > 1 && !t.find((a) => a.tagName !== "BUTTON")) {
      e.preventDefault();
      const a = t.findIndex((c) => c === document.activeElement);
      if (e.key === f.RIGHT) {
        const c = t[a + 1];
        c && (e.stopPropagation(), c.focus());
      } else if (e.key === f.LEFT) {
        const c = t[a - 1];
        c && (e.stopPropagation(), c.focus());
      }
      return;
    }
    const o = e.key === f.ENTER;
    if (o && !r)
      l(!0);
    else if ((e.key === f.ESCAPE || o) && r) {
      if (o && document.activeElement?.tagName === "A")
        return;
      l(!1), s.current.focus();
    } else
      r && e.stopPropagation();
  }, i = p === n.row - 1 && x === n.col - 1;
  N(() => {
    const e = u(s.current, !0);
    e.length === 0 || e.length === 1 && b(e).length !== 0 || e.length > 1 && e.find((t) => t.tagName !== "BUTTON") ? (s.current.setAttribute("tabIndex", !r && i ? "0" : "-1"), e.forEach((t, o) => {
      t.setAttribute("tabIndex", r ? "0" : "-1"), r && o === 0 && t.focus();
    })) : e.forEach((t) => {
      t.setAttribute("tabIndex", i ? "0" : "-1");
    });
  }, [r, i]);
  const d = v(() => {
    const e = u(s.current, !0);
    e.length >= 1 && (b(e).length !== 0 || !e.find((t) => t.tagName !== "BUTTON")) && l(!0), m({ rowIndex: n.row - 1, colIndex: n.col - 1 });
  }, [n, m]);
  return N(() => {
    const e = s.current;
    return u(e, !0).forEach((o) => {
      o.addEventListener("focus", d);
    }), () => {
      u(e, !0).forEach((a) => {
        a.removeEventListener("focus", d);
      });
    };
  }, [d]), g(A, { role: "gridcell", as: h, ref: s, onKeyDown: T, ...E });
};
export {
  B as RawTd,
  D as RawTh
};
