import { useEffect as m } from "react";
import { useCallbackRef as p } from "@strapi/ui-primitives";
const E = (t, s, { selectorToWatch: n, skipWhen: r = !1 }) => {
  const o = p(s);
  m(() => {
    if (r || !t.current)
      return;
    const u = {
      root: t.current,
      rootMargin: "0px"
    }, f = (g) => {
      g.forEach((i) => {
        i.isIntersecting && t.current && t.current.scrollHeight > t.current.clientHeight && o(i);
      });
    }, e = new IntersectionObserver(f, u), c = t.current.querySelector(n);
    return c && e.observe(c), () => {
      e.disconnect();
    };
  }, [r, o, n, t]);
};
export {
  E as useIntersection
};
