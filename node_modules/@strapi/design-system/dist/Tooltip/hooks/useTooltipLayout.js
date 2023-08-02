import { useRef as u, useLayoutEffect as c } from "react";
import { positionTooltip as f } from "../utils/positionTooltip.js";
const g = (o, e) => {
  const r = u(null), l = u(null);
  return c(() => {
    if (o) {
      const t = r.current, p = l.current;
      if (t && p) {
        const n = f(t, p, e);
        t.style.left = `${n.left}px`, t.style.top = `${n.top}px`;
      }
    }
  }, [e, o]), { tooltipWrapperRef: r, toggleSourceRef: l };
};
export {
  g as useTooltipLayout
};
