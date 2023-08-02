import { jsx as r } from "react/jsx-runtime";
import o from "styled-components";
import { RawTr as p } from "../RawTable/RawTr.js";
const d = o(p)`
  border-bottom: 1px solid ${({ theme: t }) => t.colors.neutral150};

  & td,
  & th {
    padding: ${({ theme: t }) => t.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({ theme: t }) => t.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56 / 16}rem;
  }
`, a = (t) => r(d, { ...t });
export {
  a as Tr
};
