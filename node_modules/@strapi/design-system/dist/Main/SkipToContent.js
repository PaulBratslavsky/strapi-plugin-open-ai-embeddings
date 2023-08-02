import { jsx as t } from "react/jsx-runtime";
import r from "styled-components";
import { Box as e } from "../Box/Box.js";
const n = r(e)`
  text-decoration: none;

  &:focus {
    left: ${({ theme: o }) => o.spaces[3]};
    top: ${({ theme: o }) => o.spaces[3]};
  }
`, p = ({ children: o }) => t(n, { as: "a", href: "#main-content", background: "primary600", color: "neutral0", left: "-100%", padding: 3, position: "absolute", top: "-100%", hasRadius: !0, zIndex: 9999, children: o });
export {
  p as SkipToContent
};
