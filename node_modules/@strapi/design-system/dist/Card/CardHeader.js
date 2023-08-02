import { jsx as o } from "react/jsx-runtime";
import t from "styled-components";
import { Flex as e } from "../Flex/Flex.js";
const i = t(e)`
  border-bottom: 1px solid ${({ theme: r }) => r.colors.neutral150};
`, a = (r) => o(i, { position: "relative", justifyContent: "center", ...r });
export {
  a as CardHeader
};
