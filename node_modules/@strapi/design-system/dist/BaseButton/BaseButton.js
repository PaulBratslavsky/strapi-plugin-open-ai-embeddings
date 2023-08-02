import { jsx as s } from "react/jsx-runtime";
import * as n from "react";
import i from "styled-components";
import { buttonFocusStyle as p } from "../themes/utils.js";
import { Flex as u } from "../Flex/Flex.js";
const d = i(u)`
  > svg {
    height: ${({ theme: t }) => t.spaces[3]};
    width: ${({ theme: t }) => t.spaces[3]};

    > g,
    path {
      fill: ${({ theme: t }) => t.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${p}
`, l = n.forwardRef(({ disabled: t, children: r, background: e = "neutral0", ...o }, a) => s(d, { ref: a, "aria-disabled": t, as: "button", type: "button", disabled: t, padding: 2, hasRadius: !0, background: e, borderColor: "neutral200", cursor: "pointer", ...o, children: r }));
l.displayName = "BaseButton";
export {
  l as BaseButton,
  d as BaseButtonWrapper
};
