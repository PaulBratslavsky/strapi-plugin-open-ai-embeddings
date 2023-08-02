import { jsxs as d, jsx as e } from "react/jsx-runtime";
import { useState as R, useRef as p, useEffect as w } from "react";
import { Search as D } from "@strapi/icons";
import I from "styled-components";
import { KeyboardKeys as K } from "../helpers/keyboardKeys.js";
import { useId as j } from "../hooks/useId.js";
import { usePrevious as k } from "../hooks/usePrevious.js";
import { SearchForm as E } from "../Searchbar/SearchForm.js";
import { Searchbar as L } from "../Searchbar/Searchbar.js";
import { Divider as O } from "../Divider/Divider.js";
import { Box as n } from "../Box/Box.js";
import { Flex as F } from "../Flex/Flex.js";
import { Typography as P } from "../Typography/Typography.js";
import { IconButton as $ } from "../IconButton/IconButton.js";
const f = I(O)`
  width: ${24 / 16}rem;
  background-color: ${({ theme: i }) => i.colors.neutral200};
`, Z = ({ as: i = "h2", label: m, searchLabel: l = "", searchable: u, onChange: h = () => {
}, value: g = "", onClear: S = () => {
}, onSubmit: b = () => {
}, id: y }) => {
  const [o, a] = R(!1), s = k(o), B = j(y), t = p(null), c = p(null);
  w(() => {
    o && t.current && t.current.focus(), s && !o && c.current && c.current.focus();
  }, [o, s]);
  const C = () => {
    a((r) => !r);
  }, v = (r) => {
    S(r), t?.current && t.current.focus();
  }, x = (r) => {
    r.relatedTarget?.id !== B && a(!1);
  }, T = (r) => {
    r.key === K.ESCAPE && a(!1);
  };
  return o ? d(n, { paddingLeft: 4, paddingTop: 5, paddingBottom: 2, paddingRight: 4, children: [e(E, { children: e(L, { name: "searchbar", value: g, onChange: h, placeholder: "e.g: strapi-plugin-abcd", onKeyDown: T, ref: t, onBlur: x, onClear: v, onSubmit: b, clearLabel: "Clear", size: "S", children: l }) }), e(n, { paddingLeft: 2, paddingTop: 4, children: e(f, {}) })] }) : d(n, { paddingLeft: 6, paddingTop: 6, paddingBottom: 2, paddingRight: 4, children: [d(F, { justifyContent: "space-between", alignItems: "flex-start", children: [e(P, { variant: "beta", as: i, children: m }), u && e($, { ref: c, onClick: C, label: l, icon: e(D, {}) })] }), e(n, { paddingTop: 4, children: e(f, {}) })] });
};
export {
  Z as SubNavHeader
};
