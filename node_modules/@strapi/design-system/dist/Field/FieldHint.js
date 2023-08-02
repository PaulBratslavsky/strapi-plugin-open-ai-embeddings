import { jsx as o } from "react/jsx-runtime";
import { useField as n } from "./FieldContext.js";
import { Typography as e } from "../Typography/Typography.js";
const a = () => {
  const { id: t, hint: r, error: i } = n();
  return !r || i ? null : o(e, { variant: "pi", as: "p", id: `${t}-hint`, textColor: "neutral600", children: r });
};
export {
  a as FieldHint
};
