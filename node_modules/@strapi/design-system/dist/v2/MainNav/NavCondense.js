import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { ChevronRight as i, ChevronLeft as s } from "@strapi/icons";
import d from "styled-components";
import { useMainNav as a } from "./MainNavContext.js";
import { Flex as m } from "../../Flex/Flex.js";
import { Icon as h } from "../../Icon/Icon.js";
import { VisuallyHidden as l } from "../../VisuallyHidden/VisuallyHidden.js";
const c = d(m).attrs((r) => ({
  justifyContent: "center",
  ...r
}))`
  background: ${({ theme: r }) => r.colors.neutral0};
  border: 1px solid ${({ theme: r }) => r.colors.neutral150};
  border-radius: ${({ theme: r }) => r.borderRadius};
  position: absolute;
  bottom: ${(9 + 4) / 16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({ theme: r, condensed: e }) => e ? 0 : r.spaces[5]};
  transform: ${({ condensed: r }) => r ? "translateX(50%)" : void 0};
  z-index: 2;
  width: ${18 / 16}rem;
  height: ${25 / 16}rem;

  svg {
    width: ${6 / 16}rem;
    height: ${9 / 16}rem;
  }
`, x = ({ children: r, ...e }) => {
  const o = a();
  return n(c, { as: "button", condensed: o, ...e, children: [t(h, { as: o ? i : s, "aria-hidden": !0, color: "neutral600" }), t(l, { children: r })] });
};
export {
  x as NavCondense
};
