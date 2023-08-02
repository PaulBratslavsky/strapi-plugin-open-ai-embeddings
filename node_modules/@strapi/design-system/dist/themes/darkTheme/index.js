import { darkColorTokenObject as o } from "./dark-colors.js";
import { darkShadowTokenObject as r } from "./dark-shadows.js";
import { commonTheme as m } from "../common-theme.js";
const c = {
  colors: o.color,
  shadows: r.shadow,
  ...m
};
export {
  c as darkTheme
};
