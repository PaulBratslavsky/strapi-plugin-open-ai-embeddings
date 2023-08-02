import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { useState as R, useRef as p, useEffect as w } from "react";
import { Search as D } from "@strapi/icons";
import I from "styled-components";
import { KeyboardKeys as K } from "../../helpers/keyboardKeys.js";
import { useId as j } from "../../hooks/useId.js";
import { usePrevious as k } from "../../hooks/usePrevious.js";
import { Divider as E } from "../../Divider/Divider.js";
import { Box as t } from "../../Box/Box.js";
import { SearchForm as L } from "../../Searchbar/SearchForm.js";
import { Searchbar as O } from "../../Searchbar/Searchbar.js";
import { Flex as F } from "../../Flex/Flex.js";
import { Typography as P } from "../../Typography/Typography.js";
import { IconButton as $ } from "../../IconButton/IconButton.js";
const l = I(E)`
  width: ${24 / 16}rem;
  background-color: ${({ theme: i }) => i.colors.neutral200};
`, Z = ({ as: i = "h2", label: m, searchLabel: s = "", searchable: u = !1, onChange: h = () => {
}, value: g = "", onClear: S = () => {
}, onSubmit: b = () => {
}, id: y }) => {
  const [o, a] = R(!1), f = k(o), B = j(y), n = p(void 0), d = p(void 0);
  w(() => {
    o && n.current && n.current.focus(), f && !o && d.current && d.current.focus();
  }, [o, f]);
  const C = () => {
    a((r) => !r);
  }, v = (r) => {
    S(r), n.current.focus();
  }, x = (r) => {
    r.relatedTarget?.id !== B && a(!1);
  }, T = (r) => {
    r.key === K.ESCAPE && a(!1);
  };
  return o ? c(t, { paddingLeft: 4, paddingTop: 5, paddingBottom: 2, paddingRight: 4, children: [e(L, { children: e(O, { name: "searchbar", value: g, onChange: h, placeholder: "e.g: strapi-plugin-abcd", onKeyDown: T, ref: n, onBlur: x, onClear: v, onSubmit: b, clearLabel: "Clear", size: "S", children: s }) }), e(t, { paddingLeft: 2, paddingTop: 4, children: e(l, {}) })] }) : c(t, { paddingLeft: 6, paddingTop: 6, paddingBottom: 2, paddingRight: 4, children: [c(F, { justifyContent: "space-between", alignItems: "flex-start", children: [e(P, { variant: "beta", as: i, children: m }), u && e($, { ref: d, onClick: C, label: s, icon: e(D, {}) })] }), e(t, { paddingTop: 4, children: e(l, {}) })] });
};
export {
  Z as SubNavHeader
};
