import { jsx as r } from "react/jsx-runtime";
import { CardAction as i } from "./CardAction.js";
import { useCard as e } from "./CardContext.js";
import { BaseCheckbox as a } from "../BaseCheckbox/BaseCheckbox.js";
const n = (o) => {
  const { id: t } = e();
  return (
    // @ts-expect-error styled-components can't overwrite the position prop from Stack
    r(i, { position: "start", children: r(a, { "aria-labelledby": `${t}-title`, ...o }) })
  );
};
export {
  n as CardCheckbox
};
