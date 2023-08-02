import { jsx as r } from "react/jsx-runtime";
import { Box as i } from "../Box/Box.js";
import { Typography as a } from "../Typography/Typography.js";
const p = ({ children: o, ...t }) => r(i, { as: "time", background: "neutral800", bottom: 1, right: 1, color: "neutral0", hasRadius: !0, position: "absolute", padding: 1, ...t, children: r(a, { variant: "pi", textColor: "neutral0", children: o }) });
export {
  p as CardTimer
};
