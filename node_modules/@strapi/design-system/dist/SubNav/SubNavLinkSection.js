import { jsxs as a, jsx as e } from "react/jsx-runtime";
import l from "react";
import { CarretDown as h } from "@strapi/icons";
import o from "styled-components";
import { useId as f } from "../hooks/useId.js";
import { Box as i } from "../Box/Box.js";
import { Flex as u } from "../Flex/Flex.js";
import { Typography as g } from "../Typography/Typography.js";
const x = o(i)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: t }) => t.colors.neutral700};
    }
  }
`, k = o.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`, b = o.div`
  display: flex;
  align-items: center;
  width: ${12 / 16}rem;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, D = ({ label: t, children: p, id: s }) => {
  const [n, c] = l.useState(!0), d = f(s);
  return a(i, { children: [e(x, { paddingLeft: 7, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: e(u, { justifyContent: "space-between", children: a(k, { onClick: () => {
    c((r) => !r);
  }, "aria-expanded": n, "aria-controls": d, children: [e(b, { rotated: n, children: e(h, { "aria-hidden": !0 }) }), e(i, { paddingLeft: 2, children: e(g, { as: "span", fontWeight: "semiBold", textColor: "neutral800", children: t }) })] }) }) }), n && e("ul", { id: d, children: l.Children.map(p, (r, m) => e("li", { children: r }, m)) })] });
};
export {
  D as SubNavLinkSection
};
