import { jsx as r, jsxs as p } from "react/jsx-runtime";
import s from "react";
import l from "styled-components";
import { useMainNav as m } from "./MainNavContext.js";
import { Avatar as f, Initials as c } from "../Avatar/Avatar.js";
import { Box as i } from "../Box/Box.js";
import { Flex as u } from "../Flex/Flex.js";
import { VisuallyHidden as h } from "../VisuallyHidden/VisuallyHidden.js";
import { Typography as x } from "../Typography/Typography.js";
const g = l(i)`
  border-top: 1px solid ${({ theme: o }) => o.colors.neutral150};
`, L = s.forwardRef(({ src: o, children: t, initials: n, ...d }, a) => {
  const e = m();
  return r(g, { paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, ...d, children: p(u, { as: "button", justifyContent: e ? "center" : void 0, ref: a, children: [o ? r(f, { src: o, alt: "", "aria-hidden": !0 }) : r(c, { children: n }), e ? r(h, { children: r("span", { children: t }) }) : r(i, { width: `${130 / 16}rem`, paddingLeft: 2, as: "span", children: r(x, { ellipsis: !0, textColor: "neutral600", children: t }) })] }) });
});
export {
  L as NavUser
};
