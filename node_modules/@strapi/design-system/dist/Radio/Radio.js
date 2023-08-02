import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { BaseRadio as a } from "../BaseRadio/BaseRadio.js";
import { Flex as i } from "../Flex/Flex.js";
import { Typography as m } from "../Typography/Typography.js";
const x = ({ children: o, ...e }) => t(i, { alignItems: "center", as: "label", gap: 2, children: [r(a, { ...e }), r(m, { textColor: "neutral800", children: o })] });
export {
  x as Radio
};
