import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { ChevronRight as i, ChevronLeft as s } from "@strapi/icons";
import d from "styled-components";
import { useMainNav as a } from "./MainNavContext.js";
import { Icon as m } from "../Icon/Icon.js";
import { VisuallyHidden as h } from "../VisuallyHidden/VisuallyHidden.js";
const l = d.button`
  background: ${({ theme: e }) => e.colors.neutral0};
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
  border-radius: ${({ theme: e }) => e.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${(9 + 4) / 16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({ theme: e, condensed: r }) => r ? 0 : e.spaces[5]};
  transform: ${({ condensed: e }) => e ? "translateX(50%)" : void 0};
  z-index: 2;
  width: ${18 / 16}rem;
  height: ${25 / 16}rem;

  svg {
    width: ${6 / 16}rem;
    height: ${9 / 16}rem;
  }
`, b = ({ children: e, ...r }) => {
  const o = a();
  return n(l, { as: "button", condensed: o, ...r, children: [t(m, { as: o ? i : s, "aria-hidden": !0, color: "neutral600" }), t(h, { children: e })] });
};
export {
  b as NavCondense
};
