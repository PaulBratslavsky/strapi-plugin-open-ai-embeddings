import { jsxs as l, jsx as t } from "react/jsx-runtime";
import a from "react";
import u from "styled-components";
import { SubNavSectionLabel as f } from "./SubNavSectionLabel.js";
import { useId as g } from "../hooks/useId.js";
import { Box as d } from "../Box/Box.js";
import { Flex as x } from "../Flex/Flex.js";
import { Badge as C } from "../Badge/Badge.js";
const S = u(d)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: o }) => o.colors.neutral500};
    }
  }
`, _ = ({ collapsable: o = !1, label: p, badgeLabel: r, children: s, id: c }) => {
  const [e, m] = a.useState(!0), n = g(c);
  return l(x, { direction: "column", alignItems: "stretch", gap: 1, children: [t(S, { paddingLeft: 6, paddingTop: 1, paddingBottom: 1, paddingRight: 4, children: l(d, { position: "relative", paddingRight: r ? 6 : 0, children: [t(f, { onClick: () => {
    m((i) => !i);
  }, ariaExpanded: e, ariaControls: n, collapsable: o, label: p }), r && t(C, { backgroundColor: "neutral150", textColor: "neutral600", position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", children: r })] }) }), (!o || e) && t("ol", { id: n, children: a.Children.map(s, (i, h) => t("li", { children: i }, h)) })] });
};
export {
  _ as SubNavSection
};
