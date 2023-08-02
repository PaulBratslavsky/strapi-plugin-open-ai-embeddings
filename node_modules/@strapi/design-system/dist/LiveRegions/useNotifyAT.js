import { useEffect as i } from "react";
import { LiveRegionIds as o } from "./constants.js";
const n = (e) => {
  const t = document.querySelector(`#${o.Log}`);
  t && (t.innerText = e);
}, r = (e) => {
  const t = document.querySelector(`#${o.Status}`);
  t && (t.innerText = e);
}, c = (e) => {
  const t = document.querySelector(`#${o.Alert}`);
  t && (t.innerText = e);
}, f = () => (i(() => () => {
  n(""), c(""), r("");
}, []), { notifyLog: n, notifyAlert: c, notifyStatus: r });
export {
  f as useNotifyAT
};
