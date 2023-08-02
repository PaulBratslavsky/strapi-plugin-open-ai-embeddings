import { jsxs as n, jsx as p } from "react/jsx-runtime";
import t from "styled-components";
import { Flex as s } from "../Flex/Flex.js";
import { Typography as d } from "../Typography/Typography.js";
const x = ({ children: r, icon: a, disabled: o = !1, onClick: i, ...e }) => n(g, { as: "button", background: o ? "neutral200" : "primary100", color: o ? "neutral700" : "primary600", paddingLeft: 3, paddingRight: 3, onClick: (l) => {
  o || !i || i(l);
}, "aria-disabled": o, disabled: o, borderWidth: "1px", borderStyle: "solid", borderColor: o ? "neutral300" : "primary200", hasRadius: !0, height: `${32 / 16}rem`, gap: 2, ...e, children: [p(c, { $disabled: o, variant: "pi", fontWeight: "bold", as: "span", children: r }), a] }), g = t(s)`
  & > svg {
    height: ${8 / 16}rem;
    width: ${8 / 16}rem;
  }

  & > svg path {
    fill: ${({ theme: r, ...a }) => a["aria-disabled"] ? r.colors.neutral600 : r.colors.primary600};
  }
`, c = t(d)`
  color: inherit;
  border-right: 1px solid ${({ theme: r, $disabled: a }) => a ? r.colors.neutral300 : r.colors.primary200};
  padding-right: ${({ theme: r }) => r.spaces[2]};
`;
export {
  x as Tag
};
