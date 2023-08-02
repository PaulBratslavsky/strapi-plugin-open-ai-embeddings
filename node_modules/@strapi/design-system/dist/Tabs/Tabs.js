import { jsx as c } from "react/jsx-runtime";
import { Children as T, cloneElement as I, useRef as g, useEffect as k } from "react";
import { useCallbackRef as w } from "@strapi/ui-primitives";
import R from "styled-components";
import { DefaultTabsRow as v, SimpleTabBox as B, DefaultTabButton as E, DefaultTabBox as K } from "./components.js";
import { useTabs as A } from "./TabsContext.js";
import { KeyboardKeys as y } from "../helpers/keyboardKeys.js";
import { Typography as C } from "../Typography/Typography.js";
const N = (s, b) => {
  const i = g(null), l = g(!1), r = w(b);
  return k(() => {
    if (i.current) {
      if (l.current) {
        const d = i.current.querySelector('[tabindex="0"]');
        d && (d.focus(), r(s));
      }
      l.current || (l.current = !0);
    }
  }, [s, r]), i;
}, $ = R.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, G = ({ children: s, ...b }) => {
  const { id: i, selectedTabIndex: l, selectTabIndex: r, label: d, variant: h, onTabChange: x } = A(), p = N(l, x), n = T.toArray(s).map((t, u) => I(t, {
    id: `${i}-${u}`,
    index: u,
    selectedTabIndex: l,
    onTabClick: () => r(u),
    variant: h
  })), m = (t) => {
    if (!n.every((a) => a.props.disabled))
      switch (t.key) {
        case y.RIGHT: {
          const a = l + 1, e = (o) => n[o].props.disabled ? o === n.length - 1 ? e(0) : e(o + 1) : o, f = e(a >= n.length ? 0 : a);
          r(f);
          break;
        }
        case y.LEFT: {
          const a = l - 1, e = (o) => n[o].props.disabled ? e(o === 0 ? n.length - 1 : o - 1) : o, f = e(a < 0 ? n.length - 1 : a);
          r(f);
          break;
        }
        case y.HOME: {
          const a = n.findIndex((e) => !e.props.disabled);
          r(a);
          break;
        }
        case y.END: {
          const e = n.map((f, o) => ({ isDisabled: f.props.disabled, index: o })).reverse().find(({ isDisabled: f }) => !f);
          e && r(e.index);
          break;
        }
      }
  };
  return h === "simple" ? (
    // TODO: This needs to be reviewed how to handle correctly since it's supposed to have focus.
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    c("div", { ref: p, role: "tablist", "aria-label": d, onKeyDown: m, ...b, children: n })
  ) : c(v, { ref: p, role: "tablist", alignItems: "flex-end", "aria-label": d, onKeyDown: m, ...b, children: n });
}, L = ({ disabled: s = !1, id: b, children: i, variant: l, hasError: r = !1, index: d, selectedTabIndex: h, onTabClick: x, ...p }) => {
  const n = `${b}-tab`, m = `${b}-tabpanel`, t = d === h, u = () => {
    s || x && x();
  };
  if (l === "simple") {
    let e;
    return r ? e = "danger600" : t ? e = "primary600" : e = "neutral600", c($, { id: n, role: "tab", "aria-controls": t ? m : void 0, tabIndex: t ? 0 : -1, "aria-selected": t, type: "button", onClick: u, "aria-disabled": s, ...p, children: c(B, { padding: 4, selected: t, hasError: r, children: c(C, { variant: "sigma", textColor: e, children: i }) }) });
  }
  r && console.warn('The "hasError" prop is only available for the "simple" variant.');
  const a = h && h - 1 === d;
  return c(E, { id: n, role: "tab", type: "button", "aria-controls": t ? m : void 0, tabIndex: t ? 0 : -1, "aria-selected": t, onClick: u, "aria-disabled": s, showRightBorder: !!a, ...p, children: c(K, { padding: t ? 4 : 3, background: t ? "neutral0" : "neutral100", selected: t, children: c(C, { fontWeight: "bold", textColor: t ? "primary700" : "neutral600", children: i }) }) });
};
export {
  L as Tab,
  G as Tabs
};
