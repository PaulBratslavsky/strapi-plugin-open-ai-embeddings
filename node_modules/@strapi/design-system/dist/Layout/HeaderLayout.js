import { jsx as e, jsxs as l, Fragment as m } from "react/jsx-runtime";
import x, { useRef as R, useState as y, useEffect as L } from "react";
import w from "styled-components";
import { useElementOnScreen as B } from "../hooks/useElementOnScreen.js";
import { useResizeObserver as S } from "../hooks/useResizeObserver.js";
import { Box as n } from "../Box/Box.js";
import { Flex as o } from "../Flex/Flex.js";
import { Typography as u } from "../Typography/Typography.js";
const b = (r) => {
  const t = R(null), [i, d] = y(null), [a, h] = B({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return S(a, () => {
    a.current && d(a.current.getBoundingClientRect());
  }), L(() => {
    t.current && d(t.current.getBoundingClientRect());
  }, [t]), l(m, { children: [e("div", { style: { height: i?.height }, ref: a, children: h && e(p, { ref: t, ...r }) }), !h && e(p, { ...r, sticky: !0, width: i?.width })] });
};
b.displayName = "HeaderLayout";
const C = w(n)`
  width: ${({ width: r }) => r ? `${r / 16}rem` : void 0};
  z-index: ${({ theme: r }) => r.zIndices[1]};
`, p = x.forwardRef(({ navigationAction: r, primaryAction: t, secondaryAction: i, subtitle: d, title: a, sticky: h, width: c, ...s }, g) => {
  const f = typeof d == "string";
  return h ? e(C, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: c, "data-strapi-header-sticky": !0, children: l(o, { justifyContent: "space-between", children: [l(o, { children: [r && e(n, { paddingRight: 3, children: r }), l(n, { children: [e(u, { variant: "beta", as: "h1", ...s, children: a }), f ? e(u, { variant: "pi", textColor: "neutral600", children: d }) : d] }), i ? e(n, { paddingLeft: 4, children: i }) : null] }), e(o, { children: t ? e(n, { paddingLeft: 2, children: t }) : void 0 })] }) }) : l(n, { ref: g, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: r ? 6 : 8, background: "neutral100", "data-strapi-header": !0, children: [r ? e(n, { paddingBottom: 2, children: r }) : null, l(o, { justifyContent: "space-between", children: [l(o, { minWidth: 0, children: [e(u, { as: "h1", variant: "alpha", ...s, children: a }), i ? e(n, { paddingLeft: 4, children: i }) : null] }), t] }), f ? e(u, { variant: "epsilon", textColor: "neutral600", as: "p", children: d }) : d] });
});
export {
  p as BaseHeaderLayout,
  b as HeaderLayout
};
