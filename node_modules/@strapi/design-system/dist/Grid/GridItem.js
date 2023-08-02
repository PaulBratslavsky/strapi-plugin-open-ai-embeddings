import m from "styled-components";
import { Box as e } from "../Box/Box.js";
const t = m(e)`
  grid-column: span ${({ col: i }) => i};
  max-width: 100%;

  ${({ theme: i }) => i.mediaQueries.tablet} {
    grid-column: span ${({ s: i }) => i};
  }

  ${({ theme: i }) => i.mediaQueries.mobile} {
    grid-column: span ${({ xs: i }) => i};
  }
`;
export {
  t as GridItem
};
