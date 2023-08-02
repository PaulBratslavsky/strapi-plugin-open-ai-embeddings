"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),c=require("./MultiSelect.cjs"),o=require("./Select.cjs"),l=require("./SingleSelect.cjs");/**
 * @preserve
 * @deprecated You should import the specific type of option you want to render,
 * e.g. `import { MultiSelectOption } from '@strapi/design-system';`
 */const u=({multi:n,...e})=>{const i=o.useSelectContext();return n||i.multi?t.jsx(c.MultiSelectOption,{...e}):t.jsx(l.SingleSelectOption,{...e})};exports.Option=u;
