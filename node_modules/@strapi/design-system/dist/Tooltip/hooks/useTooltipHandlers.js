import { useState as s, useRef as u, useEffect as c } from "react";
const p = (n) => {
  const [r, e] = s(!1), o = u(null), t = () => {
    typeof o.current == "number" && (clearTimeout(o.current), o.current = null);
  };
  return c(() => () => {
    t();
  }, []), { visible: r, onFocus: () => {
    e(!0);
  }, onBlur: () => {
    e(!1);
  }, onMouseEnter: () => {
    o.current = setTimeout(() => {
      e(!0);
    }, n);
  }, onMouseLeave: () => {
    t(), e(!1);
  } };
};
export {
  p as useTooltipHandlers
};
