const s = (h, i) => {
  const f = (h.width - i.width) / 2, n = i.left - f, t = i.top + i.height + 8 + window.pageYOffset;
  return {
    left: n,
    top: t
  };
}, w = (h, i) => {
  const f = (h.height - i.height) / 2, n = i.left + i.width + 8, t = i.top - f + window.pageYOffset;
  return { left: n, top: t };
}, d = (h, i) => {
  const f = (h.height - i.height) / 2, n = i.left - h.width - 8, t = i.top - f + window.pageYOffset;
  return { left: n, top: t };
}, p = (h, i) => {
  const f = (h.width - i.width) / 2;
  let n = i.left - f, t = i.top - h.height - 8 + window.pageYOffset;
  const E = window.innerWidth - i.right;
  return i.left + h.width - E > window.innerWidth ? (n = i.left - h.width - 8, t = i.top + window.scrollY - i.height / 2) : n < 0 ? (n = i.width + i.left + 8, t = i.top + window.scrollY - h.height / 2 + 8) : t < 0 && n > 0 && (t = i.top + i.height + 8), {
    left: n,
    top: t
  };
}, e = (h, i, f) => {
  const n = h.getBoundingClientRect(), t = i.getBoundingClientRect();
  return f === "bottom" ? s(n, t) : f === "right" ? w(n, t) : f === "left" ? d(n, t) : p(n, t);
};
export {
  e as positionTooltip
};
