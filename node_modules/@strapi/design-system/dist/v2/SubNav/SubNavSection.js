import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { useState as h, Children as u } from "react";
import f from "styled-components";
import { SubNavSectionLabel as g } from "./SubNavSectionLabel.js";
import { useId as x } from "../../hooks/useId.js";
import { Box as a } from "../../Box/Box.js";
import { Flex as C } from "../../Flex/Flex.js";
import { Badge as S } from "../../Badge/Badge.js";
const k = f(a)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: o }) => o.colors.neutral500};
    }
  }
`, y = ({ collapsable: o = !1, label: d, badgeLabel: r, children: p, id: s }) => {
  const [n, c] = h(!0), e = x(s);
  return l(C, { direction: "column", alignItems: "stretch", gap: 1, children: [t(k, { paddingLeft: 6, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: l(a, { position: "relative", paddingRight: r ? 6 : 0, children: [t(g, { onClick: () => {
    c((i) => !i);
  }, ariaExpanded: n, ariaControls: e, collapsable: o, label: d }), r && t(S, { backgroundColor: "neutral150", textColor: "neutral600", position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", children: r })] }) }), (!o || n) && t("ol", { id: e, children: u.map(p, (i, m) => t("li", { children: i }, m)) })] });
};
export {
  y as SubNavSection
};
