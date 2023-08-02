import { useRef as o, useState as u, useEffect as l } from "react";
const b = (t) => {
  const e = o(null), [s, c] = u(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return l(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};
export {
  b as useElementOnScreen
};
