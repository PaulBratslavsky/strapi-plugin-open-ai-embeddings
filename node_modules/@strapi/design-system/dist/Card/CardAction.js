import e from "styled-components";
import { Stack as n } from "../Stack/Stack.js";
const i = e(n).attrs({
  horizontal: !0,
  spacing: 2
})`
  position: absolute;
  top: ${({ theme: t }) => t.spaces[3]};
  right: ${({ position: t, theme: r }) => {
  if (t === "end")
    return r.spaces[3];
}};
  left: ${({ position: t, theme: r }) => {
  if (t === "start")
    return r.spaces[3];
}};
`;
export {
  i as CardAction
};
