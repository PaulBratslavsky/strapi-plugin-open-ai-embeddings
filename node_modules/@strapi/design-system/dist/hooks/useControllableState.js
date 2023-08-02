import * as r from "react";
import { useCallbackRef as i } from "@strapi/ui-primitives";
function S({ prop: n, defaultProp: u, onChange: c = () => {
} }) {
  const [t, e] = m({ defaultProp: u, onChange: c }), o = n !== void 0, l = n instanceof Function ? n(t) : n, d = o ? l : t, a = i(c), C = r.useCallback((s) => {
    if (o) {
      const f = typeof s == "function" ? s(l) : s;
      f !== l && (a(f), e(s));
    } else
      e(s);
  }, [o, l, e, a]);
  return [d, C];
}
function m({ defaultProp: n, onChange: u }) {
  const c = r.useState(n), [t] = c, e = r.useRef(t), o = i(u);
  return r.useEffect(() => {
    e.current !== t && (o(t), e.current = t);
  }, [t, e, o]), c;
}
export {
  S as useControllableState
};
