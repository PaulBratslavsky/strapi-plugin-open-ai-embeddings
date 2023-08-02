import { jsxs as e, jsx as i } from "react/jsx-runtime";
import t from "styled-components";
import { Box as o } from "../Box/Box.js";
import { Divider as a } from "../Divider/Divider.js";
import { Flex as m } from "../Flex/Flex.js";
import { Typography as p } from "../Typography/Typography.js";
const s = t(o)`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.primary600};
  }
`, l = t(o)`
  border-radius: 0 0 ${({ theme: r }) => r.borderRadius} ${({ theme: r }) => r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`, y = ({ children: r, icon: d, ...n }) => e("div", { children: [i(a, {}), i(l, { as: "button", background: "primary100", padding: 5, ...n, children: e(m, { children: [i(s, { "aria-hidden": !0, background: "primary200", children: d }), i(o, { paddingLeft: 3, children: i(p, { variant: "pi", fontWeight: "bold", textColor: "primary600", children: r }) })] }) })] });
export {
  y as TFooter
};
