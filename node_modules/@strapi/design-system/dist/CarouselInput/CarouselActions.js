import { jsx as r } from "react/jsx-runtime";
import { Flex as i } from "../Flex/Flex.js";
const c = ({ horizontal: t = !0, spacing: o = 1, ...e }) => r(i, { justifyContent: "center", gap: o, direction: t ? "row" : "column", alignItems: t ? "center" : "stretch", position: "absolute", width: "100%", bottom: 1, ...e });
export {
  c as CarouselActions
};
