import { jsx as i, jsxs as h } from "react/jsx-runtime";
import { Children as t } from "react";
import d from "styled-components";
import { Divider as c } from "./Divider.js";
import { Flex as a } from "../../Flex/Flex.js";
import { Box as f } from "../../Box/Box.js";
const p = d(a)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({ theme: e }) => `calc(-1*${e.spaces[2]})`};
  }
`, b = ({ label: e, children: n, ...o }) => {
  const r = t.toArray(n);
  return i(f, { "aria-label": e, ...o, children: i(p, { as: "ol", children: t.map(r, (s, l) => {
    const m = r.length > 1 && l + 1 < r.length;
    return h(a, { inline: !0, as: "li", children: [s, m && i(c, {})] });
  }) }) });
};
b.displayName = "Breadcrumbs";
export {
  b as Breadcrumbs
};
