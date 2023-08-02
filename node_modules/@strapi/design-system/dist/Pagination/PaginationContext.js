import { createContext as t, useContext as e } from "react";
const o = t({ activePage: 1, pageCount: 1 }), a = () => e(o);
export {
  o as PaginationContext,
  a as usePagination
};
