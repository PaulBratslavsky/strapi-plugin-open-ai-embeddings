import { useRef as t, useEffect as u } from "react";
const s = (r) => {
  const e = t();
  return u(() => {
    e.current = r;
  }), e.current;
};
export {
  s as usePrevious
};
