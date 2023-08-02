import { jsx as e, jsxs as s, Fragment as A } from "react/jsx-runtime";
import * as o from "react";
import { ChevronLeft as k, ChevronRight as D } from "@strapi/icons";
import c from "styled-components";
import { KeyboardKeys as h } from "../helpers/keyboardKeys.js";
import { Tooltip as K } from "../Tooltip/Tooltip.js";
import { Box as i } from "../Box/Box.js";
import { Flex as g } from "../Flex/Flex.js";
import { Icon as f } from "../Icon/Icon.js";
import { Typography as T } from "../Typography/Typography.js";
const j = c(i)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`, F = c(g)`
  grid-area: slides;
`, m = c(i)`
  grid-area: ${({ area: r }) => r};

  &:focus svg path,
  &:hover svg path {
    fill: ${({ theme: r }) => r.colors.neutral900};
  }
`, J = ({ actions: r, children: y, label: C, nextLabel: b, onNext: p, onPrevious: u, previousLabel: x, secondaryLabel: n, selectedSlide: R, ...v }) => {
  const a = o.useRef(null), l = o.useRef(null), d = o.Children.map(y, (t, w) => o.cloneElement(t, { selected: w === R }));
  return e(i, { ...v, onKeyDown: (t) => {
    switch (t.key) {
      case h.RIGHT: {
        t.preventDefault(), l?.current && l.current.focus(), p();
        break;
      }
      case h.LEFT: {
        t.preventDefault(), a?.current && a.current.focus(), u();
        break;
      }
    }
  }, children: s(i, { padding: 2, borderColor: "neutral200", hasRadius: !0, background: "neutral100", children: [s(j, { as: "section", "aria-roledescription": "carousel", "aria-label": C, display: "grid", position: "relative", children: [d && d.length > 1 && s(A, { children: [e(m, { as: "button", onClick: u, area: "startAction", ref: a, "aria-label": x, type: "button", children: e(f, { as: k, "aria-hidden": !0, width: "6px", height: "10px", color: "neutral600" }) }), e(m, { as: "button", onClick: p, area: "endAction", ref: l, "aria-label": b, type: "button", children: e(f, { as: D, "aria-hidden": !0, width: "6px", height: "10px", color: "neutral600" }) })] }), e(F, { "aria-live": "polite", paddingLeft: 2, paddingRight: 2, width: "100%", overflow: "hidden", children: d }), r] }), n && e(i, { paddingTop: 2, paddingLeft: 4, paddingRight: 4, children: e(K, { label: n, children: e(g, { justifyContent: "center", children: e(T, { variant: "pi", textColor: "neutral600", ellipsis: !0, children: n }) }) }) })] }) });
};
export {
  J as Carousel
};
