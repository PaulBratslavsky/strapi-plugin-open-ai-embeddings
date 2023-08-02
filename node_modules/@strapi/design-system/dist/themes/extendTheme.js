import { cloneDeep as m, assignWith as c, merge as a } from "lodash";
import { lightTheme as f } from "./lightTheme/index.js";
import { isObject as o } from "../helpers/objects.js";
const i = (t) => `
${t}

The following is an example:


import { lightTheme, extendTheme } from '@strapi/design-system';

const myCustomTheme = extendTheme(lightTheme, {
    ${Object.keys(f).map((r) => `${r}: /* put the overrides for the ${r} key */,`).join(`
`)}
})
`, g = (t, r) => {
  if (!o(t)) {
    const e = i("The first argument should be an object and corresponds to the theme you want to extend.");
    throw new Error(e);
  }
  if (!o(r)) {
    const e = i("The second argument should be an object and corresponds to the keys of the theme you want to override.");
    throw new Error(e);
  }
  function h(e, n) {
    if (Array.isArray(e))
      return n;
    if (o(e) && o(n))
      return a(e, n);
  }
  const s = m(t ?? {}), d = m(r ?? {});
  return c(s, d, h), s;
};
export {
  g as extendTheme
};
