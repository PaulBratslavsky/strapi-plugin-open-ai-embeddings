import { jsxs as d, jsx as i } from "react/jsx-runtime";
import n from "styled-components";
import { Box as r } from "../Box/Box.js";
import { Flex as e } from "../Flex/Flex.js";
const p = n(r)`
  svg {
    width: ${({ theme: o }) => o.spaces[6]};
    height: ${({ theme: o }) => o.spaces[6]};

    path {
      fill: ${({ theme: o }) => o.colors.danger600};
    }
  }
`, c = ({ children: o, icon: t }) => d(r, { paddingTop: 8, paddingBottom: 8, paddingLeft: 6, paddingRight: 6, children: [t && i(p, { paddingBottom: 2, children: i(e, { justifyContent: "center", children: t }) }), o] });
export {
  c as DialogBody
};
