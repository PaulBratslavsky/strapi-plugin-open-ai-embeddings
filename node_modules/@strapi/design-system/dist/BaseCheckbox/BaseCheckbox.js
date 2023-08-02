import { jsx as a } from "react/jsx-runtime";
import * as c from "react";
import d from "styled-components";
import p from "./assets/checkmark-black.svg.js";
import u from "./assets/checkmark.svg.js";
import { getCheckboxSize as n } from "./utils.js";
import { Box as b } from "../Box/Box.js";
const m = d.input`
  height: ${n};
  min-width: ${n};
  margin: 0;
  border-radius: ${({ theme: r }) => r.borderRadius};
  border: 1px solid ${({ theme: r }) => r.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({ theme: r }) => r.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({ theme: r }) => r.colors.primary600};
    border: 1px solid ${({ theme: r }) => r.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${u}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${p}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({ theme: r }) => r.colors.neutral200};
    border: 1px solid ${({ theme: r }) => r.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({ theme: r }) => r.colors.primary600};
    border: 1px solid ${({ theme: r }) => r.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({ theme: r }) => r.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({ theme: r }) => r.colors.neutral200};
      border: 1px solid ${({ theme: r }) => r.colors.neutral300};
      &:after {
        background-color: ${({ theme: r }) => r.colors.neutral500};
      }
    }
  }
`, f = ({ indeterminate: r = !1, size: l = "M", name: s, value: e = !1, onValueChange: t, ...i }) => {
  const o = c.useRef(null);
  return c.useEffect(() => {
    o.current && r ? o.current.indeterminate = r : o.current.indeterminate = !1;
  }, [r]), a(b, { children: a(m, { size: l, checked: e, onChange: () => {
    t && t(!e);
  }, type: "checkbox", ref: o, name: s, ...i }) });
};
f.displayName = "BaseCheckbox";
export {
  f as BaseCheckbox
};
