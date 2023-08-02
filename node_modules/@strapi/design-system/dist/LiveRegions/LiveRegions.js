import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { LiveRegionIds as i } from "./constants.js";
import { VisuallyHidden as a } from "../VisuallyHidden/VisuallyHidden.js";
const s = () => r(a, { children: [e("p", { role: "log", "aria-live": "polite", id: i.Log, "aria-relevant": "all" }), e("p", { role: "status", "aria-live": "polite", id: i.Status, "aria-relevant": "all" }), e("p", { role: "alert", "aria-live": "assertive", id: i.Alert, "aria-relevant": "all" })] });
export {
  s as LiveRegions
};
