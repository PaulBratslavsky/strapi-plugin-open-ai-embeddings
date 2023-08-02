import { jsx as m } from "react/jsx-runtime";
import * as a from "react";
import { createPortal as e } from "react-dom";
import { Box as l } from "../Box/Box.js";
const f = a.forwardRef(({ container: o = globalThis?.document?.body, ...r }, t) => o ? e(m(l, { ref: t, ...r }), o) : null);
f.displayName = "Portal";
export {
  f as Portal
};
