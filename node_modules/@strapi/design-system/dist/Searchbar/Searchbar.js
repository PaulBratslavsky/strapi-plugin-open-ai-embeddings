import { jsx as o, jsxs as $ } from "react/jsx-runtime";
import { forwardRef as R, useRef as S } from "react";
import { Cross as w, Search as x } from "@strapi/icons";
import e from "styled-components";
import { composeRefs as C } from "../hooks/useComposeRefs.js";
import { inputFocusStyle as F } from "../themes/utils.js";
import { InputWrapper as n, FieldInput as y } from "../Field/FieldInput.js";
import { FieldAction as I } from "../Field/FieldAction.js";
import { Field as z } from "../Field/Field.js";
import { VisuallyHidden as A } from "../VisuallyHidden/VisuallyHidden.js";
import { FieldLabel as g } from "../Field/FieldLabel.js";
const j = e(w)`
  font-size: 0.5rem;
  path {
    fill: ${({ theme: r }) => r.colors.neutral400};
  }
`, l = e(x)`
  font-size: 0.8rem;
  path {
    fill: ${({ theme: r }) => r.colors.neutral800};
  }
`, W = e.div`
  border-radius: ${({ theme: r }) => r.borderRadius};
  box-shadow: ${({ theme: r }) => r.shadows.filterShadow};

  &:focus-within {
    ${l} {
      path {
        fill: ${({ theme: r }) => r.colors.primary600};
      }
    }
  }

  ${n} {
    border: 1px solid transparent;
  }

  ${F(n)}
`, J = R(({ name: r, size: s = "M", children: a, value: t = "", onClear: c, clearLabel: d, ...m }, p) => {
  const i = S(null), f = t.length > 0, h = (b) => {
    c(b), i.current.focus();
  }, u = C(p, i);
  return o(W, { children: $(z, { name: r, children: [o(A, { children: o(g, { children: a }) }), o(y, { ref: u, value: t, startAction: o(l, { "aria-hidden": !0 }), size: s, endAction: f ? o(I, { label: d, onClick: h, children: o(j, {}) }) : void 0, ...m })] }) });
});
export {
  J as Searchbar
};
