import { jsx as m } from "react/jsx-runtime";
import { KeyboardKeys as o } from "../helpers/keyboardKeys.js";
import { Box as i } from "../Box/Box.js";
const v = ({ tagName: s, attributeName: a = "", ...d }) => {
  const r = () => {
    const e = document.activeElement;
    return e ? s ? e.tagName.toLowerCase() === s : e.hasAttribute(a) : !1;
  }, l = (e) => s ? e.querySelectorAll(s) : e.querySelectorAll(`[${a}]`);
  return m(i, { onKeyDown: (e) => {
    switch (e.key) {
      case o.RIGHT:
      case o.DOWN: {
        if (r()) {
          e.preventDefault();
          const n = document.activeElement, t = [...l(e.currentTarget)], c = t.findIndex((f) => f === n), u = c + 1 < t.length ? c + 1 : 0;
          t[u].focus();
        }
        break;
      }
      case o.LEFT:
      case o.UP: {
        if (r()) {
          e.preventDefault();
          const n = document.activeElement, t = [...l(e.currentTarget)], c = t.findIndex((f) => f === n), u = c - 1 > -1 ? c - 1 : t.length - 1;
          t[u].focus();
        }
        break;
      }
      case o.HOME: {
        r() && (e.preventDefault(), l(e.currentTarget).item(0).focus());
        break;
      }
      case o.END: {
        if (r()) {
          e.preventDefault();
          const n = l(e.currentTarget);
          n.item(n.length - 1).focus();
        }
        break;
      }
    }
  }, ...d });
};
export {
  v as KeyboardNavigable
};
