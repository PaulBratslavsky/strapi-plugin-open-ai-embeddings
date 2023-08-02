import { jsxs as l, jsx as i } from "react/jsx-runtime";
import * as h from "react";
import o from "styled-components";
import { previewSize as s, avatarSize as t } from "./constants.js";
import { Box as d } from "../Box/Box.js";
import { Flex as u } from "../Flex/Flex.js";
import { Typography as m } from "../Typography/Typography.js";
const x = o.img`
  border-radius: 50%;
  object-fit: cover;
  display: block;
  position: relative;
`, f = o.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  transform: translate(-${(s - t) / 2}px, -100%);
  margin-top: -${({ theme: e }) => e.spaces[1]};
`, g = o(d)`
  opacity: 0.4;
`, I = ({ src: e, alt: n, preview: r }) => {
  const [c, p] = h.useState(!1), a = !!(r && c);
  return l("span", { children: [a ? i(f, {
    "aria-hidden": !0,
    alt: "",
    width: `${s}px`,
    height: `${s}px`,
    // eslint-disable-next-line no-nested-ternary
    src: r === !0 ? e : typeof r == "string" ? r : ""
  }) : null, l(d, { zIndex: a ? 1 : void 0, position: "relative", onMouseEnter: () => p(!0), onMouseLeave: () => p(!1), width: `${t}px`, height: `${t}px`, children: [a ? i(g, { background: "neutral0", borderRadius: "50%", position: "absolute", width: `${t}px`, height: `${t}px`, zIndex: 1 }) : null, i(x, { src: e, alt: n, width: `${t}px`, height: `${t}px` })] })] });
}, b = o(u)`
  span {
    line-height: 0;
  }
`, S = ({ children: e, background: n = "primary600", textColor: r = "buttonNeutral0" }) => i(b, { background: n, borderRadius: "50%", width: `${t}px`, height: `${t}px`, justifyContent: "center", children: i(m, { fontSize: 0, fontWeight: "bold", textColor: r, textTransform: "uppercase", children: e }) });
export {
  I as Avatar,
  S as Initials
};
