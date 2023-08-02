import { jsx as o } from "react/jsx-runtime";
import { MultiSelectOption as m } from "./MultiSelect.js";
import { useSelectContext as n } from "./Select.js";
import { SingleSelectOption as r } from "./SingleSelect.js";
/**
 * @preserve
 * @deprecated You should import the specific type of option you want to render,
 * e.g. `import { MultiSelectOption } from '@strapi/design-system';`
 */
const u = ({ multi: e, ...t }) => {
  const i = n();
  return e || i.multi ? o(m, { ...t }) : o(r, { ...t });
};
export {
  u as Option
};
