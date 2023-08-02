import { jsx as t, jsxs as n } from "react/jsx-runtime";
import o from "styled-components";
import { RawTd as c, RawTh as s } from "../RawTable/RawCell.js";
import { Flex as a } from "../Flex/Flex.js";
const l = o(c)`
  vertical-align: middle;
  text-align: left;
  color: ${({ theme: r }) => r.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`, p = o.span`
  svg {
    height: ${4 / 16}rem;
  }
`, u = ({ children: r, action: e, ...i }) => t(l, { as: s, ...i, children: n(a, { children: [r, t(p, { children: e })] }) }), x = ({ children: r, ...e }) => t(l, { ...e, children: r });
export {
  x as Td,
  u as Th
};
