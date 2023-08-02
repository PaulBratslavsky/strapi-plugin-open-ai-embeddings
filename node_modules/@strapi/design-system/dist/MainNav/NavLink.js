import { jsx as o, jsxs as n } from "react/jsx-runtime";
import { NavLink as u } from "react-router-dom";
import s from "styled-components";
import { useMainNav as $ } from "./MainNavContext.js";
import { Box as g } from "../Box/Box.js";
import { Typography as i } from "../Typography/Typography.js";
import { Flex as m } from "../Flex/Flex.js";
import { Badge as f } from "../Badge/Badge.js";
import { Tooltip as v } from "../Tooltip/Tooltip.js";
const c = s(g)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`, p = s(u)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({ theme: r }) => r.borderRadius};
  background: ${({ theme: r }) => r.colors.neutral0};

  ${i} {
    color: ${({ theme: r }) => r.colors.neutral600};
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.neutral500};
  }

  &:hover {
    background: ${({ theme: r }) => r.colors.neutral100};

    ${i} {
      color: ${({ theme: r }) => r.colors.neutral700};
    }

    svg path {
      fill: ${({ theme: r }) => r.colors.neutral600};
    }
  }

  &.active {
    background: ${({ theme: r }) => r.colors.primary100};

    svg path {
      fill: ${({ theme: r }) => r.colors.primary600};
    }

    ${i} {
      color: ${({ theme: r }) => r.colors.primary600};
      font-weight: 500;
    }
  }
`, d = s(m)`
  padding: ${({ theme: r }) => `${r.spaces[2]} ${r.spaces[3]}`};
`, h = s(f)`
  ${({ theme: r, condensed: a }) => a && `
	  position: absolute;
    // Values based on visual aspect 
    top: -${r.spaces[3]};
    right:  -${r.spaces[1]};
  `}

  ${i} {
    //find a solution to remove !important
    color: ${({ theme: r }) => r.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme: r }) => r.spaces[6]};
  height: ${({ theme: r }) => r.spaces[5]};
  padding: ${({ theme: r }) => `0 ${r.spaces[2]}`};
  border-radius: ${({ theme: r }) => r.spaces[10]};
  background: ${({ theme: r }) => r.colors.primary600};
`, M = ({ children: r, icon: a, badgeContent: e, badgeAriaLabel: t, ...l }) => $() ? o(v, { position: "right", label: r, children: o(p, { ...l, children: n(d, { as: "span", children: [o(c, { "aria-hidden": !0, paddingRight: 0, as: "span", children: a }), e && o(h, { condensed: !0, "aria-label": t, children: e })] }) }) }) : o(p, { ...l, children: n(d, { as: "span", justifyContent: "space-between", children: [n(m, { children: [o(c, { "aria-hidden": !0, paddingRight: 3, as: "span", children: a }), o(i, { children: r })] }), e && o(h, { justifyContent: "center", "aria-label": t, children: e })] }) });
export {
  M as NavLink
};
