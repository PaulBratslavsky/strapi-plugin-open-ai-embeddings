import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { useState as m, Children as h } from "react";
import { CarretDown as f } from "@strapi/icons";
import o from "styled-components";
import { useId as g } from "../../hooks/useId.js";
import { Box as i } from "../../Box/Box.js";
import { Flex as u } from "../../Flex/Flex.js";
import { Typography as x } from "../../Typography/Typography.js";
const k = o(i)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: t }) => t.colors.neutral700};
    }
  }
`, b = o.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`, C = o.div`
  display: flex;
  align-items: center;
  width: ${12 / 16}rem;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, I = ({ label: t, children: l, id: p }) => {
  const [n, s] = m(!0), d = g(p);
  return a(i, { children: [e(k, { paddingLeft: 7, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: e(u, { justifyContent: "space-between", children: a(b, { onClick: () => {
    s((r) => !r);
  }, "aria-expanded": n, "aria-controls": d, children: [e(C, { rotated: n, children: e(f, { "aria-hidden": !0 }) }), e(i, { paddingLeft: 2, children: e(x, { as: "span", fontWeight: "semiBold", textColor: "neutral800", children: t }) })] }) }) }), n && e("ul", { id: d, children: h.map(l, (r, c) => e("li", { children: r }, c)) })] });
};
export {
  I as SubNavLinkSection
};
