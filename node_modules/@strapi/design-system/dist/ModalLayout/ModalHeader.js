import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { Cross as i } from "@strapi/icons";
import a from "styled-components";
import { useModal as n } from "./ModalContext.js";
import { IconButton as s } from "../IconButton/IconButton.js";
import { Box as l } from "../Box/Box.js";
import { Flex as m } from "../Flex/Flex.js";
const p = a(l)`
  border-radius: ${({ theme: o }) => o.borderRadius} ${({ theme: o }) => o.borderRadius} 0 0;
  border-bottom: 1px solid ${({ theme: o }) => o.colors.neutral150};
`, h = ({ children: o, closeLabel: e = "Close the modal" }) => {
  const t = n();
  return r(p, { paddingTop: 4, paddingBottom: 4, paddingLeft: 5, paddingRight: 5, background: "neutral100", children: d(m, { justifyContent: "space-between", children: [o, r(s, { onClick: t, "aria-label": e, icon: r(i, {}) })] }) });
};
export {
  h as ModalHeader
};
