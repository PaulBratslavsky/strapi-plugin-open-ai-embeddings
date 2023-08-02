import { jsx as e, jsxs as s } from "react/jsx-runtime";
import h from "react";
import c from "styled-components";
import { Flex as u } from "../Flex/Flex.js";
import { Box as m } from "../Box/Box.js";
const t = c.div`
  background: ${({ theme: r }) => r.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24 / 16}rem;
  width: ${40 / 16}rem;

  & span {
    font-size: ${({ visibleLabels: r }) => r ? "1rem" : 0};
  }

  &:before {
    content: '';
    background: ${({ theme: r }) => r.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({ theme: r }) => r.spaces[1]};
    top: ${({ theme: r }) => r.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`, f = c.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${t} {
    background: ${({ theme: r }) => r.colors.success500};
  }

  &[aria-checked='true'] ${t}:before {
    transform: translateX(1rem);
  }
`, x = h.forwardRef(({ label: r, onChange: d, onLabel: n = "On", offLabel: i = "Off", selected: o, visibleLabels: a = !1, ...l }, p) => e(f, { ref: p, role: "switch", "aria-checked": o, "aria-label": r, onClick: d, visibleLabels: a, type: "button", ...l, children: s(u, { children: [s(t, { children: [e("span", { children: n }), e("span", { children: i })] }), a && e(m, { as: "span", "aria-hidden": !0, paddingLeft: 2, color: o ? "success600" : "danger600", children: o ? n : i })] }) }));
export {
  x as Switch
};
