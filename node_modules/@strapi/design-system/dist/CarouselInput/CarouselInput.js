import { jsx as r, jsxs as F } from "react/jsx-runtime";
import { Carousel as I } from "./Carousel.js";
import { useId as L } from "../hooks/useId.js";
import { Field as b } from "../Field/Field.js";
import { FieldLabel as g } from "../Field/FieldLabel.js";
import { FieldHint as j } from "../Field/FieldHint.js";
import { FieldError as v } from "../Field/FieldError.js";
import { Flex as C } from "../Flex/Flex.js";
const w = ({ actions: i, children: t, error: n, hint: d, label: e, labelAction: m, nextLabel: l, onNext: s, onPrevious: c, previousLabel: p, required: a, secondaryLabel: u, selectedSlide: f, id: h, ...x }) => {
  const o = L(h);
  return r(b, { hint: d, error: n, id: o, required: a, children: F(C, { direction: "column", alignItems: "stretch", gap: 1, children: [e && r(g, { action: m, children: e }), r(I, { actions: i, label: e, nextLabel: l, onNext: s, onPrevious: c, previousLabel: p, secondaryLabel: u, selectedSlide: f, id: o, ...x, children: t }), r(j, {}), r(v, {})] }) });
};
export {
  w as CarouselInput
};
