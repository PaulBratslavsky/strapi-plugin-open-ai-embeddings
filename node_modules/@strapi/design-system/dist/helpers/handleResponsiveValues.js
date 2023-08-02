const f = (n, s, e) => {
  if (!s)
    return;
  let i = Array.isArray(s) ? s : [];
  if (!Array.isArray(s) && typeof s == "object" && (i = [s?.desktop, s?.tablet, s?.mobile]), i.length > 0)
    return i.reduce((r, t, $) => {
      if (t)
        switch ($) {
          case 0:
            return `${r}${n}: ${e.spaces[t]};`;
          case 1:
            return `${r}${e.mediaQueries.tablet}{${n}: ${e.spaces[t]};}`;
          case 2:
            return `${r}${e.mediaQueries.mobile}{${n}: ${e.spaces[t]};}`;
          default:
            return r;
        }
      return r;
    }, "");
  const a = e.spaces[s] || s;
  return `${n}: ${a};`;
};
export {
  f as default
};
