import { jsx as n, jsxs as a } from "react/jsx-runtime";
import p from "styled-components";
import { Box as u } from "../Box/Box.js";
import { Typography as $ } from "../Typography/Typography.js";
import { Flex as b } from "../Flex/Flex.js";
const h = p.div`
  margin-right: ${({ theme: o }) => o.spaces[3]};
  width: ${6 / 16}rem;
  height: ${6 / 16}rem;
  border-radius: 50%;
  background: ${({ theme: o, backgroundColor: r }) => o.colors[r]};
`, x = p(u)`
  ${$} {
    color: ${({ theme: o, textColor: r }) => o.colors[r]};
  }
`, B = ({ variant: o = "primary", showBullet: r = !0, size: t = "M", children: d, ...c }) => {
  const i = `${o}100`, l = `${o}200`, g = `${o}600`, m = `${o}600`, s = t === "S" ? 2 : 5, e = t === "S" ? 1 : 4;
  return n(x, { borderColor: l, textColor: m, background: i, hasRadius: !0, paddingTop: e, paddingBottom: e, paddingLeft: s, paddingRight: s, ...c, children: r ? a(b, { children: [n(h, { backgroundColor: g }), d] }) : d });
};
export {
  B as Status
};
