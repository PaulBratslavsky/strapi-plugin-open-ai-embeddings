import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { ChevronRight as d } from "@strapi/icons";
import m from "styled-components";
import { VisuallyHidden as p } from "../VisuallyHidden/VisuallyHidden.js";
import { Flex as o } from "../Flex/Flex.js";
import { Box as t } from "../Box/Box.js";
import { Typography as l } from "../Typography/Typography.js";
const s = m(o)`
  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral500};
    }
  }
  :last-of-type ${t} {
    display: none;
  }
  :last-of-type ${l} {
    color: ${({ theme: r }) => r.colors.neutral800};
    font-weight: ${({ theme: r }) => r.fontWeights.bold};
  }
`, h = ({ children: r }) => i(s, { inline: !0, as: "li", children: [e(l, { variant: "pi", textColor: "neutral600", children: r }), e(t, { "aria-hidden": !0, paddingLeft: 3, paddingRight: 3, children: e(d, {}) })] });
h.displayName = "Crumb";
const c = ({ children: r, label: n, ...a }) => i(o, { ...a, children: [e(p, { children: n }), e("ol", { "aria-hidden": !0, children: r })] });
c.displayName = "Breadcrumbs";
export {
  c as Breadcrumbs,
  h as Crumb
};
