import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { Cross as u, CheckCircle as f, ExclamationMarkCircle as C, Information as x } from "@strapi/icons";
import a from "styled-components";
import { handleIconColor as n, handleBackgroundColor as w, handleBorderColor as b } from "./utils.js";
import { buttonFocusStyle as $ } from "../themes/utils.js";
import { Box as s } from "../Box/Box.js";
import { Flex as i } from "../Flex/Flex.js";
import { Typography as h } from "../Typography/Typography.js";
const k = a(s)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${({ theme: o }) => o.colors.neutral700};
    }
  }

  ${$};
`, I = a(i)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${n};
    }
  }
`, B = ({ variant: o, ...e }) => o === "success" ? r(f, { ...e }) : o === "danger" || o === "warning" ? r(C, { ...e }) : r(x, { ...e }), y = a(s)`
  & a > span {
    color: ${n};
  }

  svg path {
    fill: ${n};
  }
`, M = ({ title: o, children: e, variant: t = "default", onClose: c, closeLabel: m, titleAs: g = "p", action: l, ...p }) => d(i, { alignItems: "flex-start", background: w(t), borderColor: b(t), boxShadow: "filterShadow", gap: 3, hasRadius: !0, padding: 5, paddingRight: 6, variant: t, ...p, children: [r(I, { height: `${20 / 16}rem`, shrink: 0, variant: t, width: `${20 / 16}rem`, children: r(B, { "aria-hidden": !0, variant: t }) }), d(i, { alignItems: "start", gap: l ? 2 : 1, wrap: "wrap", role: t === "danger" ? "alert" : "status", width: "100%", children: [r(h, { fontWeight: "bold", textColor: "neutral800", as: g, children: o }), r(h, { as: "p", textColor: "neutral800", children: e }), l && r(y, { variant: t, children: l })] }), r(k, { as: "button", background: "transparent", borderColor: void 0, height: `${12 / 16}rem`, marginTop: 1, onClick: c, width: `${12 / 16}rem`, "aria-label": m, children: r(u, { "aria-hidden": !0 }) })] });
export {
  M as Alert
};
