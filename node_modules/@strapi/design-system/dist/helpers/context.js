import { jsx as x } from "react/jsx-runtime";
import * as n from "react";
const v = (o, t) => {
  const c = n.createContext(t);
  function i(r) {
    const { children: e, ...s } = r, d = n.useMemo(() => s, Object.values(s));
    return x(c.Provider, { value: d, children: e });
  }
  function u(r) {
    const e = n.useContext(c);
    if (e)
      return e;
    if (t !== void 0)
      return t;
    throw new Error(`\`${r}\` must be used within \`${o}\``);
  }
  return i.displayName = `${o}Provider`, [i, u];
};
export {
  v as createContext
};
