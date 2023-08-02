import { jsx as o } from "react/jsx-runtime";
import { Flex as t } from "../Flex/Flex.js";
const s = ({ label: e, children: r, selected: i = !1, ...l }) => o(t, { alignItems: "center", display: i ? "flex" : "none", role: "group", "aria-roledescription": "slide", "aria-label": e, justifyContent: "center", height: "124px", width: "100%", ...l, children: r });
export {
  s as CarouselSlide
};
