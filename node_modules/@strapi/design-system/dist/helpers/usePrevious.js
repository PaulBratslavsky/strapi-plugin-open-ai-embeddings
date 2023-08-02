import { once as s, PREFIX as o } from "./deprecations.js";
import { usePrevious as r } from "../hooks/usePrevious.js";
const i = s(console.warn);
/**
 * @preserve
 * @deprecated usePrevious has moved. Please import it from "@strapi/design-system/hooks/usePrevious"
 */
const m = (...e) => (i(`${o} usePrevious has moved. Please import it from "@strapi/design-system/hooks/usePrevious"`), r(...e));
export {
  m as usePrevious
};
