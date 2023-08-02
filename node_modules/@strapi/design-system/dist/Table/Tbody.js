import { jsx as t } from "react/jsx-runtime";
import e from "styled-components";
import { RawTbody as m } from "../RawTable/RawTbody.js";
const p = e(m)`
  & tr:last-of-type {
    border-bottom: none;
  }
`, s = ({ children: o, ...r }) => t(p, { ...r, children: o });
export {
  s as Tbody
};
