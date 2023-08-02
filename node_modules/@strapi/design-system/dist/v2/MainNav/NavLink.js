import { jsx as o, jsxs as s } from "react/jsx-runtime";
import $ from "react";
import t from "styled-components";
import { useMainNav as f } from "./MainNavContext.js";
import { Box as g } from "../../Box/Box.js";
import { BaseLink as v } from "../../BaseLink/BaseLink.js";
import { Typography as e } from "../../Typography/Typography.js";
import { Flex as h } from "../../Flex/Flex.js";
import { Badge as y } from "../../Badge/Badge.js";
import { Tooltip as b } from "../../Tooltip/Tooltip.js";
const p = t(g)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`, d = t(v)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({ theme: r }) => r.borderRadius};
  background: ${({ theme: r }) => r.colors.neutral0};

  ${e} {
    color: ${({ theme: r }) => r.colors.neutral600};
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.neutral500};
  }

  &:hover {
    background: ${({ theme: r }) => r.colors.neutral100};

    ${e} {
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

    ${e} {
      color: ${({ theme: r }) => r.colors.primary600};
      font-weight: 500;
    }
  }
`, m = t(h)`
  padding: ${({ theme: r }) => `${r.spaces[2]} ${r.spaces[3]}`};
`, u = t(y)`
  ${({ theme: r, condensed: i }) => i && `
	  position: absolute;
    // Values based on visual aspect 
    top: -${r.spaces[3]};
    right:  -${r.spaces[1]};
  `}

  ${e} {
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
`, C = $.forwardRef(({ children: r, icon: i, badgeContent: a, badgeAriaLabel: n, ...l }, c) => f() ? o(d, { ref: c, ...l, children: o(b, { position: "right", label: r, children: s(m, { as: "span", justifyContent: "center", children: [o(p, { "aria-hidden": !0, paddingRight: 0, as: "span", children: i }), a && o(u, { condensed: !0, "aria-label": n, children: a })] }) }) }) : o(d, { ref: c, ...l, children: s(m, { as: "span", justifyContent: "space-between", children: [s(h, { children: [o(p, { "aria-hidden": !0, paddingRight: 3, as: "span", children: i }), o(e, { children: r })] }), a && o(u, { justifyContent: "center", "aria-label": n, children: a })] }) }));
export {
  C as NavLink
};
