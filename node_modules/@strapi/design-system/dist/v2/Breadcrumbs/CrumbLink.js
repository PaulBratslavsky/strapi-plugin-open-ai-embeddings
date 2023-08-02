import { jsx as e } from "react/jsx-runtime";
import i from "styled-components";
import { BaseLink as n } from "../../BaseLink/BaseLink.js";
const s = i(n)`
  border-radius: ${({ theme: o }) => o.borderRadius};
  color: ${({ theme: o }) => o.colors.neutral600};
  font-size: ${({ theme: o }) => o.fontSizes[1]};
  line-height: ${({ theme: o }) => o.lineHeights[4]};
  padding: ${({ theme: o }) => `${o.spaces[1]} ${o.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({ theme: o }) => o.colors.neutral200};
    color: ${({ theme: o }) => o.colors.neutral700};
  }
`, t = ({ children: o, ...r }) => e(s, { ...r, children: o });
t.displayName = "CrumbLink";
export {
  t as CrumbLink
};
