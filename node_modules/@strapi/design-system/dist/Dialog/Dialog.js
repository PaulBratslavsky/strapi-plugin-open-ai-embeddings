import { jsx as o, jsxs as p } from "react/jsx-runtime";
import e from "styled-components";
import { DismissibleLayer as c } from "../DismissibleLayer/index.js";
import { setOpacity as u } from "../helpers/setOpacity.js";
import { useId as f } from "../hooks/useId.js";
import h from "../hooks/useLockScroll.js";
import { FocusTrap as g } from "../FocusTrap/FocusTrap.js";
import { Box as i } from "../Box/Box.js";
import { Flex as b } from "../Flex/Flex.js";
import { Portal as x } from "../Portal/Portal.js";
import { Typography as y } from "../Typography/Typography.js";
const D = e(i)`
  inset: 0;
  background: ${({ theme: r }) => u(r.colors.neutral800, 0.2)};
`, w = e(i)`
  max-width: ${412 / 16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`, $ = e(b)`
  border-bottom: 1px solid ${({ theme: r }) => r.colors.neutral150};
`, C = ({ onClose: r, title: n, as: l = "h2", isOpen: t, id: d, ...m }) => {
  const s = f(d);
  if (h(t), !t)
    return null;
  const a = `${s}-label`;
  return o(x, { children: o(D, { padding: 8, position: "fixed", zIndex: 4, children: o(g, { children: o(c, { onEscapeKeyDown: r, onPointerDownOutside: r, children: p(w, { "aria-labelledby": a, "aria-modal": !0, background: "neutral0", hasRadius: !0, shadow: "popupShadow", role: "dialog", children: [o($, { padding: 6, justifyContent: "center", children: o(y, { variant: "beta", as: l, id: a, children: n }) }), o(i, { ...m })] }) }) }) }) });
};
export {
  C as Dialog
};
