import * as t from "react";
function u(n, o) {
  typeof n == "function" ? n(o) : n != null && (n.current = o);
}
function c(...n) {
  return (o) => n.forEach((e) => u(e, o));
}
function f(...n) {
  return t.useCallback(c(...n), n);
}
export {
  c as composeRefs,
  f as useComposedRefs
};
