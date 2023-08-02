import { jsx as d, jsxs as e } from "react/jsx-runtime";
import f from "react";
import l from "styled-components";
import { useMainNav as g } from "./MainNavContext.js";
import { BaseLink as c } from "../../BaseLink/BaseLink.js";
import { Box as n } from "../../Box/Box.js";
import { VisuallyHidden as m } from "../../VisuallyHidden/VisuallyHidden.js";
import { Flex as u } from "../../Flex/Flex.js";
import { Typography as p } from "../../Typography/Typography.js";
const h = l.div`
  border-radius: ${({ theme: r }) => r.borderRadius};

  svg,
  img {
    height: ${({ condensed: r }) => r ? `${40 / 16}rem` : `${32 / 16}rem`};
    width: ${({ condensed: r }) => r ? `${40 / 16}rem` : `${32 / 16}rem`};
  }
`, x = l(c)`
  text-decoration: unset;
  color: inherit;
`, W = f.forwardRef(({ workplace: r, title: t, icon: o, ...i }, a) => {
  const s = g();
  return i.to = i?.to ?? "/", s ? d(c, { ref: a, ...i, children: d(n, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: e(h, { condensed: !0, children: [o, e(m, { children: [d("span", { children: t }), d("span", { children: r })] })] }) }) }) : d(x, { ref: a, ...i, children: d(n, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: e(u, { children: [d(h, { "aria-hidden": !0, tabIndex: -1, children: o }), e(n, { paddingLeft: 2, children: [e(p, { fontWeight: "bold", textColor: "neutral800", as: "span", children: [t, d(m, { as: "span", children: r })] }), d(p, { variant: "pi", as: "p", textColor: "neutral600", "aria-hidden": !0, children: r })] })] }) }) });
});
export {
  W as NavBrand
};
