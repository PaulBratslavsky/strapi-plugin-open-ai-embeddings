import { once as n, PREFIX as r } from "./deprecations.js";
import { useElementOnScreen as s } from "../hooks/useElementOnScreen.js";
const t = n(console.warn);
/**
 * @preserve
 * @deprecated useElementOnScreen has moved. Please import it from "@strapi/design-system/hooks/useElementOnScreen"
 */
const c = (...e) => (t(`${r} useElementOnScreen has moved. Please import it from "@strapi/design-system/hooks/useElementOnScreen"`), s(...e));
export {
  c as useElementOnScreen
};
