import s, { useState as n, useLayoutEffect as r } from "react";
const c = s["useId".toString()] || (() => {
});
let d = 0;
const S = (t) => {
  const [e, o] = n(c());
  return r(() => {
    t || o((u) => u ?? String(d++));
  }, [t]), t?.toString() ?? (e || "");
};
export {
  S as useId
};
