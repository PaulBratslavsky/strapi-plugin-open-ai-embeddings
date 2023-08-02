import { isKeyOf as o } from "./objects.js";
function i(t, r, f) {
  return r && o(t, r) ? t[r] : f;
}
export {
  i as extractStyleFromTheme
};
