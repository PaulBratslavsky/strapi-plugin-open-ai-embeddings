import { createContext as e, useContext as t } from "react";
const o = e({
  rowIndex: 0,
  colIndex: 0,
  setTableValues() {
    throw new Error("setTableValues must be initialized via the RawTableContext.Provider");
  }
}), r = () => t(o);
export {
  o as RawTableContext,
  r as useTable
};
