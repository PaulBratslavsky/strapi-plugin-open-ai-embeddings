import { jsx as t, jsxs as F } from "react/jsx-runtime";
import x, { useRef as S, useEffect as E, useState as $, Children as _, cloneElement as H } from "react";
import { CarretDown as U } from "@strapi/icons";
import { useCallbackRef as P } from "@strapi/ui-primitives";
import { NavLink as q } from "react-router-dom";
import m from "styled-components";
import { getOptionStyle as b } from "./utils.js";
import { KeyboardKeys as r } from "../helpers/keyboardKeys.js";
import { useId as z } from "../hooks/useId.js";
import { Link as G } from "../Link/Link.js";
import { Button as L } from "../Button/Button.js";
import { Popover as J } from "../Popover/Popover.js";
import { Box as k } from "../Box/Box.js";
import { Typography as R } from "../Typography/Typography.js";
import { Flex as Q } from "../Flex/Flex.js";
const X = m.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${b}
`, Y = m(q)`
  text-decoration: none;
  ${b}
`, Z = m(G)`
  /* Removing Link hover effect */
  &:hover {
    color: currentColor;
  }

  &:focus-visible {
    /* Removing Link focus-visible after properties and reset to global outline */
    outline: 2px solid ${({ theme: n }) => n.colors.primary600};
    outline-offset: 2px;
    &:after {
      content: none;
    }
  }

  ${b}
`, ee = m.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`, ne = m(L)`
  padding: ${({ theme: n }) => `${n.spaces[1]} ${n.spaces[3]}`};
`, xe = ({ children: n, onClick: h = () => {
}, to: i, isFocused: s = !1, href: c, ...D }) => {
  const a = S();
  E(() => {
    s && a.current && a.current.focus();
  }, [s]);
  const l = {
    tabIndex: s ? 0 : -1,
    ref: a,
    role: "menuitem",
    ...D
  }, u = (y) => {
    (y.key === r.SPACE || y.key === r.ENTER) && h();
  };
  return i && !c ? t(Y, { to: i, ...l, children: t(k, { padding: 2, children: t(R, { children: n }) }) }) : c && !i ? t(Z, { isExternal: !0, href: c, ...l, children: t(k, { padding: 2, children: t(R, { children: n }) }) }) : t(X, { onKeyDown: u, onMouseDown: h, type: "button", ...l, children: t(k, { padding: 2, children: t(R, { children: n }) }) });
}, Ee = ({ label: n, children: h, id: i, as: s, onOpen: c = () => {
}, onClose: D = () => {
}, size: a = "M", popoverPlacement: l = "bottom-start", onReachEnd: u, ...y }) => {
  const d = S(void 0), I = z(i), C = S(!1), [f, p] = $(!1), [v, w] = $(0), g = _.toArray(h), O = s || (a === "S" ? ne : L), B = !!u && typeof u == "function";
  E(() => {
    if (["string", "number"].includes(typeof n)) {
      const e = g.findIndex((o) => x.isValidElement(o) && o.props.children === n || o === n);
      e !== -1 && w(e);
    }
  }, [n]);
  const K = P(c), M = P(D);
  E(() => {
    C?.current ? f ? K() : M() : C.current = !0;
  }, [C, M, K, f]), E(() => {
    x.isValidElement(n) && v === -1 && d.current.focus();
  }, [n, v]);
  const T = (e) => {
    f && (e.key === r.ESCAPE && (e.stopPropagation(), p(!1), d.current.focus()), e.key === r.DOWN && w((o) => o === g.length - 1 ? 0 : o + 1), e.key === r.UP && w((o) => o === 0 ? g.length - 1 : o - 1));
  }, A = (e) => {
    (e.key === r.ENTER || e.key === r.SPACE) && p((o) => !o);
  }, V = (e) => {
    e.preventDefault(), e.currentTarget.contains(e.relatedTarget) || p(!1);
  }, N = (e) => {
    e.preventDefault(), p((o) => !o);
  }, j = () => {
    B && u();
  }, W = g.map((e, o) => (
    // eslint-disable-next-line react/no-array-index-key
    t(Q, { as: "li", justifyContent: "center", role: "menuitem", children: x.isValidElement(e) ? H(e, {
      onClick() {
        e.props.onClick(), p(!1), d.current.focus();
      },
      isFocused: v === o
    }) : e }, o)
  ));
  return (
    // TODO: review why we need to eslint it and how to solve this issue.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    F("div", { onKeyDown: T, children: [t(O, { label: x.isValidElement(n) ? null : n, "aria-haspopup": !0, "aria-expanded": f, "aria-controls": I, onKeyDown: A, onMouseDown: N, ref: d, type: "button", variant: "ghost", endIcon: t(ee, { children: t(U, { "aria-hidden": !0 }) }), ...y, children: n }), f && t(J, { onBlur: V, placement: l, source: d, onReachEnd: j, intersectionId: B ? `popover-${I}` : void 0, spacing: 4, children: t(k, { role: "menu", as: "ul", padding: 1, id: I, children: W }) })] })
  );
};
export {
  xe as MenuItem,
  Ee as SimpleMenu
};
