import { createContext as e, useContext as t } from "react";
const n = e({
  id: "",
  label: "",
  selectedTabIndex: 0,
  selectTabIndex() {
    throw new Error("TabsContext.selectTabIndex is not implemented.");
  }
}), s = () => t(n);
export {
  n as TabsContext,
  s as useTabs
};
