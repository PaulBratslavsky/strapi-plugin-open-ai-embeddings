import { jsx as e } from "react/jsx-runtime";
import i from "styled-components";
import { Box as t } from "../Box/Box.js";
const a = i(t)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, m = ({ labelledBy: o = "main-content-title", ...n }) => e(a, { "aria-labelledby": o, as: "main", id: "main-content", tabIndex: -1, ...n });
export {
  m as Main
};
