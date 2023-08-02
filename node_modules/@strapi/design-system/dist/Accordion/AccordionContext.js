import { createContext as e, useContext as o } from "react";
const t = e({
  disabled: !1,
  expanded: !1,
  id: "",
  size: "M",
  variant: "primary"
}), r = () => o(t);
export {
  t as AccordionContext,
  r as useAccordion
};
