import i from "styled-components";
import r from "../helpers/handleResponsiveValues.js";
import { Box as t } from "../Box/Box.js";
const n = {
  direction: !0
}, a = i(t).withConfig({
  shouldForwardProp: (e, o) => !n[e] && o(e)
})`
  align-items: ${({ alignItems: e = "center" }) => e};
  display: ${({ display: e = "flex", inline: o }) => o ? "inline-flex" : e};
  flex-direction: ${({ direction: e = "row" }) => e};
  flex-shrink: ${({ shrink: e }) => e};
  flex-wrap: ${({ wrap: e }) => e};
  ${({ gap: e, theme: o }) => r("gap", e, o)};
  justify-content: ${({ justifyContent: e }) => e};
`;
export {
  a as Flex
};
