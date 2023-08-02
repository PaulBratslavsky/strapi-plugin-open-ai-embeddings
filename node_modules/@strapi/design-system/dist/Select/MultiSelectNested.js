import { jsx as r } from "react/jsx-runtime";
import n from "styled-components";
import { MultiSelectOption as i, MultiSelect as u, MultiSelectGroup as c } from "./MultiSelect.js";
const o = ({ options: a, ...t }) => r(u, { ...t, children: a.map((e) => "children" in e ? r(c, { label: e.label, values: e.children.map((l) => l.value.toString()), children: e.children.map((l) => r(d, { value: l.value, children: l.label }, l.value)) }, e.label) : r(i, { value: e.value, children: e.label }, e.value)) }), d = n(i)`
  padding-left: ${({ theme: a }) => a.spaces[7]};
`;
export {
  o as MultiSelectNested
};
