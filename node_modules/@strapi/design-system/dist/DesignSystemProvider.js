import { jsx as e } from "react/jsx-runtime";
import { createContext as i } from "./helpers/context.js";
import { ThemeProvider as a } from "./ThemeProvider/ThemeProvider.js";
const r = "en-EN", t = () => typeof navigator > "u" ? r : navigator.language ? navigator.language : r, [s, l] = i("StrapiDesignSystem", {
  locale: t()
}), u = ({ locale: o = t(), ...n }) => e(s, { locale: o, children: e(a, { ...n }) });
export {
  u as DesignSystemProvider,
  l as useDesignSystem
};
