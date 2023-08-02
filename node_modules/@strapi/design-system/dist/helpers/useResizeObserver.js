import { once as s, PREFIX as r } from "./deprecations.js";
import { useResizeObserver as o } from "../hooks/useResizeObserver.js";
const i = s(console.warn);
/**
 * @preserve
 * @deprecated useResizeObserver has moved. Please import it from "@strapi/design-system/hooks/useResizeObserver"
 */
const n = (...e) => (i(`${r} useResizeObserver has moved. Please import it from "@strapi/design-system/hooks/useResizeObserver"`), o(...e));
export {
  n as useResizeObserver
};
