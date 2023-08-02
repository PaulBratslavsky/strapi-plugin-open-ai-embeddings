import { useEffect as s } from "react";
const e = (o) => {
  s(() => (o && document.body.classList.add("lock-body-scroll"), () => {
    document.body.classList.remove("lock-body-scroll");
  }), [o]);
};
export {
  e as default
};
