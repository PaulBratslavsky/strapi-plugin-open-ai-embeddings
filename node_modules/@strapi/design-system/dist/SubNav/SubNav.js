import { jsx as t } from "react/jsx-runtime";
import i from "styled-components";
import { Grid as a } from "../Grid/Grid.js";
const e = `${232 / 16}rem`, s = i(a)`
  width: ${e};
  background: ${({ theme: o }) => o.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme: o }) => o.colors.neutral200};
  z-index: 1;
`, d = ({ ariaLabel: o, ...r }) => t(s, { "aria-label": o, as: "nav", ...r });
export {
  d as SubNav,
  e as subNavWidth
};
