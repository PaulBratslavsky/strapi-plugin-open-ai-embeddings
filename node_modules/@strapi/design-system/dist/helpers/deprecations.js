const o = "[@strapi/design-system]:", c = (n) => {
  const e = n;
  let t = !1;
  if (typeof e != "function")
    throw new TypeError(`${o} once requires a function parameter`);
  return (...r) => {
    t || (e(...r), t = !0);
  };
};
export {
  o as PREFIX,
  c as once
};
