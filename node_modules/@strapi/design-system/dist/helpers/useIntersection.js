import { once as s, PREFIX as t } from "./deprecations.js";
import { useIntersection as o } from "../hooks/useIntersection.js";
const n = s(console.warn);
/**
 * @preserve
 * @deprecated useId has moved. Please import it from "@strapi/design-system/hooks/useId"
 */
const c = (...e) => (n(`${t} useIntersection has moved. Please import it from "@strapi/design-system/hooks/useIntersection"`), o(...e));
export {
  c as useIntersection
};
