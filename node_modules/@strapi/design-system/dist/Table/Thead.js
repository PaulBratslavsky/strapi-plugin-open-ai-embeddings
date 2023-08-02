import { jsx as t } from "react/jsx-runtime";
import e from "styled-components";
import { RawThead as d } from "../RawTable/RawThead.js";
const m = e(d)`
  border-bottom: 1px solid ${({ theme: r }) => r.colors.neutral150};
`, i = ({ children: r, ...o }) => t(m, { ...o, children: r });
export {
  i as Thead
};
