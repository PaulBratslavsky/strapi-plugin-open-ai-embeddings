import { jsxs as p, jsx as n } from "react/jsx-runtime";
import { Flex as r } from "../Flex/Flex.js";
const o = ({ startActions: t, endActions: e }) => !t && !e ? null : p(r, { justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 4, paddingLeft: 10, paddingRight: 10, children: [n(r, { gap: 2, wrap: "wrap", children: t }), n(r, { gap: 2, shrink: 0, wrap: "wrap", children: e })] });
export {
  o as ActionLayout
};
