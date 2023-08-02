import { jsxs as d, jsx as t } from "react/jsx-runtime";
import m from "styled-components";
import { Box as r } from "../Box/Box.js";
import { Flex as p } from "../Flex/Flex.js";
import { Typography as l } from "../Typography/Typography.js";
const c = m(r)`
  svg {
    height: ${88 / 16}rem;
  }
`, y = ({ icon: e, content: o, action: a, hasRadius: n = !0, shadow: i = "tableShadow" }) => d(p, { alignItems: "center", direction: "column", padding: 11, background: "neutral0", hasRadius: n, shadow: i, children: [t(c, { paddingBottom: 6, "aria-hidden": !0, children: e }), t(r, { paddingBottom: 4, children: t(l, { variant: "delta", as: "p", textAlign: "center", textColor: "neutral600", children: o }) }), a] });
export {
  y as EmptyStateLayout
};
