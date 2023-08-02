import { jsxs as e, jsx as r } from "react/jsx-runtime";
import { Grid as i } from "../Grid/Grid.js";
import { GridItem as o } from "../Grid/GridItem.js";
import { Box as a } from "../Box/Box.js";
const c = ({ startCol: d, endCol: t }) => e(i, { gap: 4, children: [r(o, { col: 9, s: 12, children: r(a, { hasRadius: !0, background: "neutral0", shadow: "tableShadow", children: d }) }), r(o, { col: 3, s: 12, children: r(a, { hasRadius: !0, background: "neutral0", shadow: "tableShadow", children: t }) })] });
export {
  c as TwoColsLayout
};
