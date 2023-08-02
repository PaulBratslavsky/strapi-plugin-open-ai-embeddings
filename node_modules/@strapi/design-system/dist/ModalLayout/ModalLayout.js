import { jsx as o } from "react/jsx-runtime";
import a from "styled-components";
import { ModalContext as d } from "./ModalContext.js";
import { DismissibleLayer as n } from "../DismissibleLayer/index.js";
import l from "../hooks/useLockScroll.js";
import { Flex as p } from "../Flex/Flex.js";
import { Portal as m } from "../Portal/Portal.js";
import { FocusTrap as s } from "../FocusTrap/FocusTrap.js";
import { Box as c } from "../Box/Box.js";
const u = a(p)`
  background: ${({ theme: r }) => `${r.colors.neutral800}1F`};
  inset: 0;
`, P = ({ onClose: r, labelledBy: t, ...i }) => (l(!0), o(m, { children: o(d.Provider, { value: r, children: o(u, { justifyContent: "center", paddingLeft: 8, paddingRight: 8, position: "fixed", zIndex: 4, children: o(s, { children: o(n, { onEscapeKeyDown: r, onPointerDownOutside: r, children: o(c, { "aria-labelledby": t, "aria-modal": !0, onClick: (e) => e.stopPropagation(), background: "neutral0", hasRadius: !0, role: "dialog", shadow: "popupShadow", width: `${830 / 16}rem`, ...i }) }) }) }) }) }));
export {
  P as ModalLayout
};
