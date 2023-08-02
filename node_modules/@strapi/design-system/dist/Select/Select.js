import { jsx as e } from "react/jsx-runtime";
import * as l from "react";
import { MultiSelect as m } from "./MultiSelect.js";
import { SingleSelect as c } from "./SingleSelect.js";
const i = l.createContext({ multi: !1 }), r = () => l.useContext(i);
/**
 * @preserve
 * @deprecated You should import the specific type of select you want to render
 *
 * e.g. `import { MultiSelect } from '@strapi/design-system';`
 */
const x = (t) => {
  const o = l.useMemo(() => ({ multi: !!(t.multi || t.withTags) }), [t.multi, t.withTags]);
  return e(i.Provider, { value: o, children: t.multi || t.withTags ? e(m, { ...t }) : e(c, { ...t }) });
};
export {
  x as Select,
  r as useSelectContext
};
