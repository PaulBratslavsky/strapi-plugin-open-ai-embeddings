import { lightColorTokenObject as o } from "./light-colors.js";
import { lightShadowTokenObject as m } from "./light-shadows.js";
import { commonTheme as r } from "../common-theme.js";
const c = {
  colors: o.color,
  shadows: m.shadow,
  ...r
};
export {
  c as lightTheme
};
