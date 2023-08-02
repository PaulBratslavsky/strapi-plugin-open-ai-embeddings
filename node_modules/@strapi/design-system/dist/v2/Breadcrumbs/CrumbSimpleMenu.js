import { jsx as r } from "react/jsx-runtime";
import n from "styled-components";
import { SimpleMenu as t } from "../SimpleMenu/SimpleMenu.js";
import { Button as s } from "../../Button/Button.js";
const m = n(s)`
  padding: ${({ theme: o }) => `${o.spaces[1]} ${o.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({ theme: o }) => o.colors.neutral200};
  }
`, i = ({ children: o, ...e }) => r(t, { endIcon: null, as: m, size: "S", ...e, children: o });
i.displayName = "CrumbSimpleMenu";
export {
  i as CrumbSimpleMenu
};
