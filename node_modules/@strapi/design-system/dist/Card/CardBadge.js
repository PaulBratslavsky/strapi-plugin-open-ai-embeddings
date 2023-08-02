import { jsx as o } from "react/jsx-runtime";
import e from "styled-components";
import { Badge as t } from "../Badge/Badge.js";
const a = e.div`
  margin-left: auto;
  flex-shrink: 0;
`, i = e(t)`
  margin-left: ${({ theme: r }) => r.spaces[1]};
`, n = (r) => o(a, { children: o(i, { ...r }) });
export {
  n as CardBadge
};
