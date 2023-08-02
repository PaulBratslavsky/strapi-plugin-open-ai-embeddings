import { jsx as r } from "react/jsx-runtime";
import { useCard as a } from "./CardContext.js";
import { Typography as o } from "../Typography/Typography.js";
const l = (t) => {
  const { id: i } = a();
  return r(o, { variant: "pi", id: `${i}-title`, textColor: "neutral800", fontWeight: "bold", as: "div", ...t });
}, p = (t) => r(o, { variant: "pi", ...t, textColor: "neutral600", as: "div" });
export {
  p as CardSubtitle,
  l as CardTitle
};
