import { jsx as t } from "react/jsx-runtime";
import { useState as s } from "react";
import l from "styled-components";
import { ellipsisStyle as a } from "../Typography/utils.js";
import { Box as n } from "../Box/Box.js";
import { Tooltip as f } from "../Tooltip/Tooltip.js";
const o = l(n)`
  ${a({ ellipsis: !0 })}
`, x = (r) => {
  const [e, i] = s(!1), m = () => {
    i(!0);
  };
  return e ? t(f, { description: r.alt ?? "", children: t(o, { as: "img", height: "100%", maxWidth: "100%", ...r }) }) : t(o, { as: "img", height: "100%", maxWidth: "100%", ...r, onError: m });
};
export {
  x as CarouselImage
};
