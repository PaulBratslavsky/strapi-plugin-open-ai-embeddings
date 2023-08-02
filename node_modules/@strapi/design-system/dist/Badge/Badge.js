import { jsx as i } from "react/jsx-runtime";
import p from "styled-components";
import { Flex as s } from "../Flex/Flex.js";
import { Typography as g } from "../Typography/Typography.js";
const l = p(s)`
  border-radius: ${({ theme: r, size: e }) => e === "S" ? "2px" : r.borderRadius};
  height: ${({ size: r, theme: e }) => e.sizes.badge[r]};
`, y = ({ active: r = !1, size: e = "M", textColor: n = "neutral600", backgroundColor: o = "neutral150", children: a, minWidth: d = 5, ...m }) => {
  const t = e === "S" ? 1 : 2;
  return i(l, { inline: !0, alignItem: "center", justifyContent: "center", minWidth: d, paddingLeft: t, paddingRight: t, background: r ? "primary200" : o, size: e, ...m, children: i(g, { variant: "sigma", textColor: r ? "primary600" : n, children: a }) });
};
export {
  y as Badge
};
