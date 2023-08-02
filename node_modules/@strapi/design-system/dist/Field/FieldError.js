import { jsx as t } from "react/jsx-runtime";
import { useField as e } from "./FieldContext.js";
import { Typography as i } from "../Typography/Typography.js";
const d = () => {
  const { id: o, error: r } = e();
  return !r || typeof r != "string" ? null : t(i, { variant: "pi", as: "p", id: `${o}-error`, textColor: "danger600", "data-strapi-field-error": !0, children: r });
};
export {
  d as FieldError
};
