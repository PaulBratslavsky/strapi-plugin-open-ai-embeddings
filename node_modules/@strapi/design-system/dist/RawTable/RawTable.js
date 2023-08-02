import { jsx as D } from "react/jsx-runtime";
import { useRef as k, useState as m, useCallback as h, useEffect as G, useMemo as N } from "react";
import { focusFocusable as O } from "./focusFocusable.js";
import { RawTableContext as A } from "./RawTableContext.js";
import { KeyboardKeys as a } from "../helpers/keyboardKeys.js";
const _ = ({ colCount: l, rowCount: c, jumpStep: f = 3, initialCol: y = 0, initialRow: E = 0, ...K }) => {
  const b = k(null), n = k(!1), [u, r] = m(E), [o, s] = m(y), i = h(({ colIndex: t, rowIndex: e }) => {
    s(t), r(e);
  }, []);
  G(() => {
    n.current && O(b.current), n.current || (n.current = !0);
  }, [o, u]);
  const P = (t) => {
    switch (t.key) {
      case a.RIGHT: {
        t.preventDefault(), s((e) => e < l - 1 ? e + 1 : e);
        break;
      }
      case a.LEFT: {
        t.preventDefault(), s((e) => e > 0 ? e - 1 : e);
        break;
      }
      case a.UP: {
        t.preventDefault(), r((e) => e > 0 ? e - 1 : e);
        break;
      }
      case a.DOWN: {
        t.preventDefault(), r((e) => e < c - 1 ? e + 1 : e);
        break;
      }
      case a.HOME: {
        t.preventDefault(), t.ctrlKey && r(0), s(0);
        break;
      }
      case a.END: {
        t.preventDefault(), t.ctrlKey && r(c - 1), s(l - 1);
        break;
      }
      case a.PAGE_DOWN: {
        t.preventDefault(), r((e) => e + f < c ? e + f : c - 1);
        break;
      }
      case a.PAGE_UP: {
        t.preventDefault(), r((e) => e - f > 0 ? e - f : 0);
        break;
      }
    }
  }, T = N(() => ({ rowIndex: u, colIndex: o, setTableValues: i }), [o, u, i]);
  return D(A.Provider, { value: T, children: D("table", { role: "grid", ref: b, "aria-rowcount": c, "aria-colcount": l, onKeyDown: P, ...K }) });
};
export {
  _ as RawTable
};
