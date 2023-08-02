import { jsx as d } from "react/jsx-runtime";
import { useAccordion as a } from "./AccordionContext.js";
import { Box as l } from "../Box/Box.js";
const p = ({ children: r, ...n }) => {
  const { expanded: i, id: o } = a();
  if (!i)
    return null;
  const c = `accordion-content-${o}`, e = `accordion-label-${o}`, t = `accordion-desc-${o}`;
  return d(l, { role: "region", id: c, "aria-labelledby": e, "aria-describedby": t, ...n, children: r });
};
export {
  p as AccordionContent
};
