import * as n from "react";
import { DateFormatter as l } from "@internationalized/date";
function s(t, e) {
  let r = n.useRef(null);
  return e && r.current && a(e, r.current) && (e = r.current), r.current = e ?? null, n.useMemo(() => new l(t, e), [t, e]);
}
function a(t, e) {
  if (t === e)
    return !0;
  let r = Object.keys(t), f = Object.keys(e);
  if (r.length !== f.length)
    return !1;
  for (let u of r)
    if (e[u] !== t[u])
      return !1;
  return !0;
}
export {
  s as useDateFormatter
};
