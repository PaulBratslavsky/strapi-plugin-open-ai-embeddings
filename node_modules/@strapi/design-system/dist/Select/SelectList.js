import { jsx as A } from "react/jsx-runtime";
import * as b from "react";
import { compute as S } from "compute-scroll-into-view";
import { KeyboardKeys as u } from "../helpers/keyboardKeys.js";
import { Flex as h } from "../Flex/Flex.js";
const g = {
  Keyboard: "down:keyboard",
  Mouse: "down:mouse"
}, m = { Keyboard: "up:keyboard", Mouse: "up:mouse" };
/**
 * @preserve
 * @deprecated This component will be removed in the next major release.
 * If you need a custom listbox I would recommend opening a new issue.
 */
const E = ({ labelledBy: r, onSelectItem: e, children: c, multi: s = !1, onEscape: t, expanded: f }) => {
  const o = K(f);
  return A(h, { as: "ul", gap: 1, direction: "column", alignItems: "stretch", role: "listbox", "aria-labelledby": r, tabIndex: -1, ref: o, onKeyDown: (i) => {
    switch (i.key) {
      case u.ESCAPE: {
        i.stopPropagation(), t();
        break;
      }
      case u.DOWN: {
        i.preventDefault();
        const n = y(o.current);
        if (!n)
          return;
        const a = n.nextSibling;
        if (a)
          l(o.current, a);
        else {
          const d = o.current.querySelectorAll('[role="option"]')[0];
          l(o.current, d);
        }
        break;
      }
      case u.UP: {
        i.preventDefault();
        const n = y(o.current);
        if (!n)
          return;
        const a = n.previousSibling;
        if (a)
          l(o.current, a);
        else {
          const p = o.current.querySelectorAll('[role="option"]'), d = p[p.length - 1];
          l(o.current, d);
        }
        break;
      }
      case u.SPACE:
      case u.ENTER: {
        i.preventDefault();
        const n = y(o.current);
        n.getAttribute("data-opt-group") ? e(n.getAttribute("data-opt-group-children").split(","), n.getAttribute("data-opt-group")) : e(n.getAttribute("data-strapi-value")), s || t();
        break;
      }
    }
  }, onBlur: t, children: c });
}, l = (r, e) => {
  r.setAttribute("aria-activedescendant", e.getAttribute("id")), r.querySelectorAll('[role="option"]').forEach((t) => t.classList.remove("is-focused")), e.classList.add("is-focused"), S(e, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: t, top: f, left: o }) => {
    t.scrollTop = f, t.scrollLeft = o;
  });
}, K = (r) => {
  const e = b.useRef(null);
  return b.useEffect(() => {
    e.current.focus();
  }, []), b.useEffect(() => {
    if (!e.current)
      return;
    const c = e.current.querySelector('[aria-selected="true"]'), s = e.current.querySelectorAll('[role="option"]');
    let t;
    c ? t = c : r === m.Keyboard ? t = s[s.length - 1] : r === g.Keyboard && (t = s[0]), t && (r === m.Keyboard || r === g.Keyboard) && l(e.current, t);
  }, []), e;
}, y = (r) => {
  const e = r.getAttribute("aria-activedescendant");
  return r.querySelector(`#${e}`);
};
export {
  E as SelectList
};
