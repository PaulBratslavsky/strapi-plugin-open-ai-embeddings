import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { Dot as m } from "@strapi/icons";
import { NavLink as f } from "react-router-dom";
import e from "styled-components";
import { Box as t } from "../Box/Box.js";
import { Typography as s } from "../Typography/Typography.js";
import { Flex as n } from "../Flex/Flex.js";
const g = e(t)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme: r }) => r.colors.neutral800};
  svg > * {
    fill: ${({ theme: r }) => r.colors.neutral600};
  }

  &.active {
    ${({ theme: r }) => `
      background-color: ${r.colors.primary100};
      border-right: 2px solid ${r.colors.primary600};
      svg > * {
        fill: ${r.colors.primary700};
      }
      ${s} {
        color: ${r.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`, a = e(m)`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme: r, $active: i }) => i ? r.colors.primary600 : r.colors.neutral600};
  }
`, u = e.div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`, L = ({ children: r, icon: i, withBullet: c = !1, isSubSectionChild: p = !1, ...d }) => l(g, { as: f, icon: i, background: "neutral100", paddingLeft: p ? 9 : 7, paddingBottom: 2, paddingTop: 2, ...d, children: [l(n, { children: [i ? o(u, { children: i }) : o(a, {}), o(t, { paddingLeft: 2, children: o(s, { as: "span", children: r }) })] }), c && o(t, { as: n, paddingRight: 4, children: o(a, { $active: !0 }) })] });
export {
  L as SubNavLink
};
