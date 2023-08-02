function t(r, n) {
  return typeof r == "string" ? !1 : n in r;
}
function e(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
export {
  t as isKeyOf,
  e as isObject
};
