import { jsx as f, jsxs as Ae, Fragment as _e } from "react/jsx-runtime";
import * as l from "react";
import { useComposedRefs as M } from "@radix-ui/react-compose-refs";
import { createContextScope as ot, createContext as nt } from "@radix-ui/react-context";
import { Slot as Te } from "@radix-ui/react-slot";
import { composeEventHandlers as T } from "@radix-ui/primitive";
import { composeEventHandlers as An } from "@radix-ui/primitive";
import { DismissableLayer as rt } from "@radix-ui/react-dismissable-layer";
import { useFocusGuards as lt } from "@radix-ui/react-focus-guards";
import { FocusScope as st } from "@radix-ui/react-focus-scope";
import { useId as re } from "@radix-ui/react-id";
import * as le from "@radix-ui/react-popper";
import { createPopperScope as ct } from "@radix-ui/react-popper";
import { Portal as it } from "@radix-ui/react-portal";
import { Primitive as N } from "@radix-ui/react-primitive";
import { useControllableState as ie } from "@radix-ui/react-use-controllable-state";
import { useLayoutEffect as L } from "@radix-ui/react-use-layout-effect";
import { hideOthers as at } from "aria-hidden";
import * as Ce from "react-dom";
import { RemoveScroll as ut } from "react-remove-scroll";
import { clamp as Qe } from "@radix-ui/number";
import { createCollection as Nt } from "@radix-ui/react-collection";
import { useDirection as At } from "@radix-ui/react-direction";
import { usePrevious as _t } from "@radix-ui/react-use-previous";
import { VisuallyHidden as Mt } from "@radix-ui/react-visually-hidden";
import { useCallbackRef as Ot } from "@radix-ui/react-use-callback-ref";
import { useCallbackRef as Mn } from "@radix-ui/react-use-callback-ref";
function Dt(r) {
  const c = `${r}CollectionProvider`, [e, t] = ot(c), [o, n] = e(c, {
    collectionRef: { current: null },
    itemMap: /* @__PURE__ */ new Map(),
    listeners: /* @__PURE__ */ new Set()
  }), i = (d) => {
    const { scope: h, children: v } = d, C = l.useRef(null), b = l.useRef(/* @__PURE__ */ new Map()).current, g = l.useRef(/* @__PURE__ */ new Set()).current;
    return /* @__PURE__ */ f(o, { scope: h, itemMap: b, collectionRef: C, listeners: g, children: v });
  };
  i.displayName = c;
  const s = `${r}CollectionSlot`, a = l.forwardRef((d, h) => {
    const { scope: v, children: C } = d, b = n(s, v), g = M(h, b.collectionRef);
    return /* @__PURE__ */ f(Te, { ref: g, children: C });
  });
  a.displayName = s;
  const m = `${r}CollectionItemSlot`, u = "data-radix-collection-item", x = l.forwardRef((d, h) => {
    const { scope: v, children: C, ...b } = d, g = l.useRef(null), I = M(h, g), E = n(m, v);
    return l.useEffect(() => {
      const O = Array.from(E.itemMap.values());
      return E.itemMap.set(g, { ref: g, ...b }), E.listeners.forEach((A) => A(Array.from(E.itemMap.values()), O)), () => {
        const A = Array.from(E.itemMap.values());
        E.itemMap.delete(g), E.listeners.forEach((_) => _(Array.from(E.itemMap.values()), A));
      };
    }), /* @__PURE__ */ f(Te, { [u]: "", ref: I, children: C });
  });
  x.displayName = m;
  function p(d) {
    const h = n(`${r}CollectionConsumer`, d), v = l.useCallback(() => {
      const b = h.collectionRef.current;
      if (!b)
        return [];
      const g = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(h.itemMap.values()).sort(
        (O, A) => g.indexOf(O.ref.current) - g.indexOf(A.ref.current)
      );
    }, [h.collectionRef, h.itemMap]), C = l.useCallback(
      (b) => (h.listeners.add(b), () => h.listeners.delete(b)),
      [h.listeners]
    );
    return { getItems: v, subscribe: C };
  }
  return [
    { Provider: i, Slot: a, ItemSlot: x },
    p,
    t
  ];
}
let ye = /* @__PURE__ */ new Map();
function kt(r, c) {
  let e = r + (c ? Object.entries(c).sort((o, n) => o[0] < n[0] ? -1 : 1).join() : "");
  if (ye.has(e))
    return ye.get(e);
  let t = new Intl.Collator(r, c);
  return ye.set(e, t), t;
}
function Me(r, c) {
  let e = kt(r, {
    usage: "search",
    ...c
  });
  return {
    startsWith(t, o) {
      return o.length === 0 ? !0 : (t = t.normalize("NFC"), o = o.normalize("NFC"), e.compare(t.slice(0, o.length), o) === 0);
    },
    endsWith(t, o) {
      return o.length === 0 ? !0 : (t = t.normalize("NFC"), o = o.normalize("NFC"), e.compare(t.slice(-o.length), o) === 0);
    },
    contains(t, o) {
      if (o.length === 0)
        return !0;
      t = t.normalize("NFC"), o = o.normalize("NFC");
      let n = 0, i = o.length;
      for (; n + i <= t.length; n++) {
        let s = t.slice(n, n + i);
        if (e.compare(o, s) === 0)
          return !0;
      }
      return !1;
    }
  };
}
const Ft = (r) => {
  const c = l.useRef();
  return l.useEffect(() => {
    c.current = r;
  }), c.current;
}, Lt = [" ", "Enter", "ArrowUp", "ArrowDown"], Bt = ["Enter"], Ht = (r) => !!(r.length === 1 && r.match(/\S| /)), dt = "Combobox", [ae, me] = Dt(dt), [$t, K] = nt(dt), Ut = ({ children: r }) => /* @__PURE__ */ f(le.Root, { children: /* @__PURE__ */ f(ae.Provider, { scope: void 0, children: r }) }), Kt = (r) => {
  const {
    allowCustomValue: c = !1,
    autocomplete: e = "none",
    children: t,
    open: o,
    defaultOpen: n,
    onOpenChange: i,
    value: s,
    defaultValue: a,
    onValueChange: m,
    disabled: u,
    required: x = !1,
    locale: p = "en-EN",
    onTextValueChange: d,
    textValue: h,
    defaultTextValue: v,
    filterValue: C,
    defaultFilterValue: b,
    onFilterValueChange: g,
    isPrintableCharacter: I = Ht
  } = r, [E, O] = l.useState(null), [A, _] = l.useState(null), [k, q] = l.useState(null), [W, B] = l.useState(null), [D = !1, H] = ie({
    prop: o,
    defaultProp: n,
    onChange: i
  }), [F, z] = ie({
    prop: s,
    defaultProp: a,
    onChange: m
  }), [G, $] = ie({
    prop: h,
    defaultProp: c && !v ? s : v,
    onChange: d
  }), [X, U] = ie({
    prop: C,
    defaultProp: b,
    onChange: g
  }), de = re(), se = l.useCallback(
    (fe, Q) => {
      const Z = Q.map((y) => y.ref.current), [ce, ...ee] = Z, [S] = ee.slice(-1), V = W ?? Q.find((y) => y.value === F)?.ref.current;
      for (const y of fe) {
        if (y === V)
          return;
        if (y?.scrollIntoView({ block: "nearest" }), y === ce && A && (A.scrollTop = 0), y === S && A && (A.scrollTop = A.scrollHeight), B(y), e === "both") {
          const w = Q.find((P) => P.ref.current === y);
          w && $(w.textValue);
        }
        if (y !== V)
          return;
      }
    },
    [e, $, A, W, F]
  );
  return l.useEffect(() => {
    e !== "both" && B(null);
  }, [G, e]), l.useEffect(() => {
    if (k && E)
      return at([k, E]);
  }, [k, E]), /* @__PURE__ */ f(Ut, { children: /* @__PURE__ */ f(
    $t,
    {
      allowCustomValue: c,
      autocomplete: e,
      required: x,
      trigger: E,
      onTriggerChange: O,
      contentId: de,
      value: F,
      onValueChange: z,
      open: D,
      onOpenChange: H,
      disabled: u,
      locale: p,
      focusFirst: se,
      textValue: G,
      onTextValueChange: $,
      onViewportChange: _,
      onContentChange: q,
      visuallyFocussedItem: W,
      filterValue: X,
      onFilterValueChange: U,
      onVisuallyFocussedItemChange: B,
      isPrintableCharacter: I,
      children: t
    }
  ) });
}, Wt = "ComboboxTrigger", zt = l.forwardRef((r, c) => {
  const { ...e } = r, t = K(Wt), o = () => {
    t.disabled || t.onOpenChange(!0);
  };
  return /* @__PURE__ */ f(le.Anchor, { asChild: !0, children: /* @__PURE__ */ f(
    st,
    {
      asChild: !0,
      trapped: t.open,
      onMountAutoFocus: (n) => {
        n.preventDefault();
      },
      onUnmountAutoFocus: (n) => {
        t.trigger?.focus({ preventScroll: !0 }), document.getSelection()?.empty(), n.preventDefault();
      },
      children: /* @__PURE__ */ f(
        "div",
        {
          ref: c,
          "data-disabled": t.disabled ? "" : void 0,
          ...e,
          onClick: T(e.onClick, () => {
            t.trigger?.focus();
          }),
          onPointerDown: T(e.onPointerDown, (n) => {
            const i = n.target;
            i.hasPointerCapture(n.pointerId) && i.releasePointerCapture(n.pointerId), (i.closest("button") ?? i.closest("div")) === n.currentTarget && n.button === 0 && n.ctrlKey === !1 && (o(), t.trigger?.focus());
          })
        }
      )
    }
  ) });
}), ft = "ComboboxInput", Gt = l.forwardRef((r, c) => {
  const e = K(ft), t = l.useRef(null), { getItems: o } = me(void 0), { startsWith: n } = Me(e.locale, { sensitivity: "base" }), i = e.disabled, s = M(t, c, e.onTriggerChange), a = () => {
    i || e.onOpenChange(!0);
  }, m = Ft(e.filterValue);
  return L(() => {
    const u = setTimeout(() => {
      if (e.textValue === "" || e.textValue === void 0 || e.filterValue === "" || e.filterValue === void 0)
        return;
      const x = o().find(
        (d) => d.type === "option" && n(d.textValue, e.textValue)
      ), p = So(m ?? "", e.filterValue);
      x && !e.visuallyFocussedItem && p === e.filterValue.length && t.current?.setSelectionRange(e.filterValue.length, e.textValue.length);
    });
    return () => clearTimeout(u);
  }, [e.textValue, e.filterValue, n, e.visuallyFocussedItem, o, m]), /* @__PURE__ */ f(
    "input",
    {
      type: "text",
      role: "combobox",
      "aria-controls": e.contentId,
      "aria-expanded": e.open,
      "aria-required": e.required,
      "aria-autocomplete": e.autocomplete,
      "data-state": e.open ? "open" : "closed",
      "aria-disabled": i,
      "aria-activedescendant": e.visuallyFocussedItem?.id,
      disabled: i,
      "data-disabled": i ? "" : void 0,
      "data-placeholder": e.textValue === void 0 ? "" : void 0,
      value: e.textValue ?? "",
      ...r,
      ref: s,
      onKeyDown: T(r.onKeyDown, (u) => {
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(u.key))
          e.open || a(), setTimeout(() => {
            let p = o().filter((d) => !d.disabled && d.isVisible).map((d) => d.ref.current);
            if (["ArrowUp", "End"].includes(u.key) && (p = p.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(u.key)) {
              const d = e.visuallyFocussedItem ?? o().find((h) => h.value === e.value)?.ref.current;
              if (d) {
                let h = p.indexOf(d);
                h === p.length - 1 && (h = -1), p = p.slice(h + 1);
              }
            }
            if (["ArrowDown"].includes(u.key) && e.autocomplete === "both" && p.length > 1) {
              const [d, ...h] = p, v = o().find((C) => C.ref.current === d).textValue;
              e.textValue === v && (p = h);
            }
            e.focusFirst(p, o());
          }), u.preventDefault();
        else if (["Tab"].includes(u.key) && e.open)
          u.preventDefault();
        else if (["Escape"].includes(u.key))
          e.open ? e.onOpenChange(!1) : (e.onValueChange(void 0), e.onTextValueChange("")), u.preventDefault();
        else if (Bt.includes(u.key)) {
          if (e.visuallyFocussedItem) {
            const x = o().find((p) => p.ref.current === e.visuallyFocussedItem);
            x && (e.onValueChange(x.value), e.onTextValueChange(x.textValue), e.autocomplete === "both" && e.onFilterValueChange(x.textValue), x.ref.current?.click());
          } else {
            const x = o().find(
              (p) => p.type === "option" && !p.disabled && p.textValue === e.textValue
            );
            x && (e.onValueChange(x.value), e.onTextValueChange(x.textValue), e.autocomplete === "both" && e.onFilterValueChange(x.textValue), x.ref.current?.click());
          }
          e.onOpenChange(!1), u.preventDefault();
        } else
          e.onVisuallyFocussedItemChange(null);
      }),
      onChange: T(r.onChange, (u) => {
        e.onTextValueChange(u.currentTarget.value), e.autocomplete === "both" && e.onFilterValueChange(u.currentTarget.value);
      }),
      onKeyUp: T(r.onKeyUp, (u) => {
        if (!e.open && (e.isPrintableCharacter(u.key) || ["Backspace"].includes(u.key)) && a(), setTimeout(() => {
          if (e.autocomplete === "both" && e.isPrintableCharacter(u.key) && e.filterValue !== void 0) {
            const x = e.filterValue, p = o().find((d) => n(d.textValue, x));
            p && e.onTextValueChange(p.textValue);
          }
        }), e.autocomplete === "none" && e.isPrintableCharacter(u.key)) {
          const x = e.textValue ?? "", p = o().find((d) => n(d.textValue, x));
          p && (e.onVisuallyFocussedItemChange(p.ref.current), p.ref.current?.scrollIntoView());
        }
      }),
      onBlur: T(r.onBlur, () => {
        if (e.open)
          return;
        e.onVisuallyFocussedItemChange(null);
        const [u] = o().filter(
          (p) => p.textValue === e.textValue && p.type === "option"
        );
        if (u) {
          e.onValueChange(u.value), e.autocomplete === "both" && e.onFilterValueChange(u.textValue);
          return;
        }
        if (e.allowCustomValue) {
          e.onValueChange(e.textValue), e.autocomplete === "both" && e.onFilterValueChange(e.textValue);
          return;
        }
        const [x] = o().filter((p) => p.value === e.value && p.type === "option");
        x && e.textValue !== "" ? (e.onTextValueChange(x.textValue), e.autocomplete === "both" && e.onFilterValueChange(x.textValue)) : (e.onValueChange(void 0), e.onTextValueChange(""));
      })
    }
  );
}), jt = l.forwardRef((r, c) => {
  const { children: e, ...t } = r, o = K(ft), n = o.disabled, i = () => {
    n || (o.onOpenChange(!0), o.trigger?.focus());
  };
  return /* @__PURE__ */ f(
    N.button,
    {
      "aria-hidden": !0,
      type: "button",
      "aria-disabled": n,
      "aria-controls": o.contentId,
      "aria-expanded": o.open,
      disabled: n,
      "data-disabled": n ? "" : void 0,
      ...t,
      tabIndex: -1,
      ref: c,
      onClick: T(t.onClick, () => {
        o.trigger?.focus();
      }),
      onPointerDown: T(t.onPointerDown, (s) => {
        s.button === 0 && s.ctrlKey === !1 && (i(), s.preventDefault());
      }),
      onKeyDown: T(t.onKeyDown, (s) => {
        Lt.includes(s.key) && (i(), s.preventDefault());
      }),
      children: e || "▼"
    }
  );
}), Yt = "ComboboxPortal", pt = (r) => /* @__PURE__ */ f(it, { asChild: !0, ...r });
pt.displayName = Yt;
const mt = "ComboboxContent", qt = l.forwardRef((r, c) => {
  const e = K(mt), { getItems: t } = me(void 0), [o, n] = l.useState();
  if (L(() => {
    n(new DocumentFragment());
  }, []), L(() => {
    e.open && e.autocomplete === "none" && setTimeout(() => {
      t().find((s) => s.value === e.value)?.ref.current?.scrollIntoView({ block: "nearest" });
    });
  }, [t, e.autocomplete, e.value, e.open]), !e.open) {
    const i = o;
    return i ? Ce.createPortal(
      /* @__PURE__ */ f(ae.Slot, { scope: void 0, children: /* @__PURE__ */ f("div", { children: r.children }) }),
      i
    ) : null;
  }
  return /* @__PURE__ */ f(Zt, { ...r, ref: c });
}), Xt = 10, Zt = l.forwardRef(
  (r, c) => {
    const { onEscapeKeyDown: e, onPointerDownOutside: t, ...o } = r, n = K(mt), i = M(c, (a) => n.onContentChange(a)), { onOpenChange: s } = n;
    return lt(), l.useEffect(() => {
      const a = () => {
        s(!1);
      };
      return window.addEventListener("blur", a), window.addEventListener("resize", a), () => {
        window.removeEventListener("blur", a), window.removeEventListener("resize", a);
      };
    }, [s]), /* @__PURE__ */ f(ut, { allowPinchZoom: !0, children: /* @__PURE__ */ f(
      rt,
      {
        asChild: !0,
        onEscapeKeyDown: e,
        onPointerDownOutside: t,
        onFocusOutside: (a) => {
          a.preventDefault();
        },
        onDismiss: () => {
          n.onOpenChange(!1), n.trigger?.focus({ preventScroll: !0 });
        },
        children: /* @__PURE__ */ f(
          Jt,
          {
            role: "listbox",
            id: n.contentId,
            "data-state": n.open ? "open" : "closed",
            onContextMenu: (a) => a.preventDefault(),
            ...o,
            ref: i,
            style: {
              // flex layout so we can place the scroll buttons properly
              display: "flex",
              flexDirection: "column",
              // reset the outline by default as the content MAY get focused
              outline: "none",
              ...o.style
            }
          }
        )
      }
    ) });
  }
), Jt = l.forwardRef(
  (r, c) => {
    const { align: e = "start", collisionPadding: t = Xt, ...o } = r;
    return /* @__PURE__ */ f(
      le.Content,
      {
        ...o,
        ref: c,
        align: e,
        collisionPadding: t,
        style: {
          // Ensure border-box for floating-ui calculations
          boxSizing: "border-box",
          ...o.style,
          "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
          "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
          "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
), Qt = "ComboboxViewport", eo = l.forwardRef((r, c) => {
  const e = K(Qt), t = M(c, e.onViewportChange);
  return /* @__PURE__ */ Ae(_e, { children: [
    /* @__PURE__ */ f(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: "[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"
        }
      }
    ),
    /* @__PURE__ */ f(ae.Slot, { scope: void 0, children: /* @__PURE__ */ f(
      N.div,
      {
        "data-radix-combobox-viewport": "",
        role: "presentation",
        ...r,
        ref: t,
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto",
          ...r.style
        }
      }
    ) })
  ] });
}), Oe = "ComboboxItem", [et, De] = nt(Oe), ht = l.forwardRef((r, c) => {
  const { value: e, disabled: t = !1, textValue: o, ...n } = r, [i, s] = l.useState();
  L(() => {
    s(new DocumentFragment());
  }, []);
  const { onTextValueChange: a, textValue: m, ...u } = K(Oe), x = re(), [p, d] = l.useState(o ?? ""), h = u.value === e, { startsWith: v } = Me(u.locale, { sensitivity: "base" }), C = l.useCallback((b) => {
    d((g) => g || (b?.textContent ?? "").trim());
  }, []);
  return l.useEffect(() => {
    h && m === void 0 && p !== "" && a(p);
  }, [p, h, m, a]), u.autocomplete === "both" && p && u.filterValue && !v(p, u.filterValue) || u.autocomplete === "list" && p && m && !v(p, m) ? i ? Ce.createPortal(
    /* @__PURE__ */ f(
      et,
      {
        textId: x,
        onTextValueChange: C,
        isSelected: h,
        textValue: p,
        children: /* @__PURE__ */ f(
          ae.ItemSlot,
          {
            scope: void 0,
            value: e,
            textValue: p,
            disabled: t,
            type: "option",
            isVisible: !1,
            children: /* @__PURE__ */ f(tt, { ref: c, value: e, disabled: t, ...n })
          }
        )
      }
    ),
    i
  ) : null : /* @__PURE__ */ f(
    et,
    {
      textId: x,
      onTextValueChange: C,
      isSelected: h,
      textValue: p,
      children: /* @__PURE__ */ f(
        ae.ItemSlot,
        {
          scope: void 0,
          value: e,
          textValue: p,
          disabled: t,
          type: "option",
          isVisible: !0,
          children: /* @__PURE__ */ f(tt, { ref: c, value: e, disabled: t, ...n })
        }
      )
    }
  );
}), to = "ComboboxItemImpl", tt = l.forwardRef((r, c) => {
  const { value: e, disabled: t = !1, ...o } = r, n = l.useRef(null), i = M(c, n), { getItems: s } = me(void 0), { onTextValueChange: a, visuallyFocussedItem: m, ...u } = K(Oe), { isSelected: x, textValue: p, textId: d } = De(to), h = () => {
    t || (u.onValueChange(e), a(p), u.onOpenChange(!1), u.autocomplete === "both" && u.onFilterValueChange(p), u.trigger?.focus({ preventScroll: !0 }));
  }, v = l.useMemo(() => m === s().find((b) => b.ref.current === n.current)?.ref.current, [s, m]), C = re();
  return /* @__PURE__ */ f(
    N.div,
    {
      role: "option",
      "aria-labelledby": d,
      "data-highlighted": v ? "" : void 0,
      "aria-selected": x && v,
      "data-state": x ? "checked" : "unchecked",
      "aria-disabled": t || void 0,
      "data-disabled": t ? "" : void 0,
      tabIndex: t ? void 0 : -1,
      ...o,
      id: C,
      ref: i,
      onPointerUp: T(o.onPointerUp, h)
    }
  );
}), oo = "ComboboxItemText", no = l.forwardRef((r, c) => {
  const { className: e, style: t, ...o } = r, n = De(oo), i = M(c, n.onTextValueChange);
  return /* @__PURE__ */ f(N.span, { id: n.textId, ...o, ref: i });
}), ro = "ComboboxItemIndicator", lo = l.forwardRef((r, c) => {
  const { isSelected: e } = De(ro);
  return e ? /* @__PURE__ */ f(N.span, { "aria-hidden": !0, ...r, ref: c }) : null;
}), gt = "ComboboxNoValueFound", so = l.forwardRef((r, c) => {
  const { textValue: e = "", filterValue: t = "", locale: o, autocomplete: n } = K(gt), [i, s] = l.useState([]), { subscribe: a } = me(void 0), { startsWith: m } = Me(o, { sensitivity: "base" });
  return l.useEffect(() => {
    const u = a((x) => {
      s(x);
    });
    return () => {
      u();
    };
  }, [a]), i.length === 0 || n === "none" || n === "list" && i.some((u) => m(u.textValue, e)) || n === "both" && i.some((u) => m(u.textValue, t)) ? null : /* @__PURE__ */ f(N.div, { ...r, ref: c });
}), co = l.forwardRef((r, c) => {
  const { disabled: e = !1, ...t } = r, o = K(gt), { textValue: n, visuallyFocussedItem: i } = o, { getItems: s, subscribe: a } = me(void 0), m = l.useRef(null), [u, x] = l.useState(!1), p = M(c, m), d = l.useMemo(() => i === s().find((C) => C.ref.current === m.current)?.ref.current, [s, i]), h = re(), v = () => {
    !e && n && (o.onValueChange(n), o.onTextValueChange(n), o.onOpenChange(!1), o.autocomplete === "both" && o.onFilterValueChange(n), o.trigger?.focus({ preventScroll: !0 }));
  };
  return L(() => {
    const C = a((b) => {
      x(!b.some((g) => g.textValue === n && g.type !== "create"));
    });
    return s().length === 0 && x(!0), () => {
      C();
    };
  }, [n, a, s]), !n || !u ? null : /* @__PURE__ */ f(
    ae.ItemSlot,
    {
      scope: void 0,
      value: n ?? "",
      textValue: n ?? "",
      disabled: e,
      isVisible: !0,
      type: "create",
      children: /* @__PURE__ */ f(
        N.div,
        {
          role: "option",
          tabIndex: e ? void 0 : -1,
          "aria-disabled": e || void 0,
          "data-disabled": e ? "" : void 0,
          "data-highlighted": d ? "" : void 0,
          ...t,
          id: h,
          ref: p,
          onPointerUp: T(t.onPointerUp, v)
        }
      )
    }
  );
}), io = Kt, ao = zt, uo = Gt, fo = jt, po = pt, mo = qt, ho = eo, go = ht, xo = no, Co = lo, vo = so, bo = co;
function So(r, c) {
  const e = Math.min(r.length, c.length);
  for (let t = 0; t < e; t++)
    if (r[t] !== c[t])
      return t;
  return e;
}
const Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComboboxItem: ht,
  Content: mo,
  CreateItem: bo,
  Icon: fo,
  Item: go,
  ItemIndicator: Co,
  ItemText: xo,
  NoValueFound: vo,
  Portal: po,
  Root: io,
  TextInput: uo,
  Trigger: ao,
  Viewport: ho
}, Symbol.toStringTag, { value: "Module" })), Io = [" ", "Enter", "ArrowUp", "ArrowDown"], wo = [" ", "Enter"], he = "Select", [ve, ge, yo] = Nt(he), [ue, To] = ot(he, [
  yo,
  ct
]), be = ct(), [Vo, Y] = ue(he), [Po, Eo] = ue(he), ke = (r) => {
  const {
    __scopeSelect: c,
    children: e,
    open: t,
    defaultOpen: o,
    onOpenChange: n,
    value: i,
    defaultValue: s,
    onValueChange: a,
    dir: m,
    // name,
    // autoComplete,
    disabled: u,
    required: x,
    multi: p = !1
  } = r, d = be(c), [h, v] = l.useState(null), [C, b] = l.useState(null), [g, I] = l.useState(!1), E = At(m), [O = !1, A] = ie({
    prop: t,
    defaultProp: o,
    onChange: n
  }), [_, k] = ie({
    prop: i,
    defaultProp: s,
    onChange(D) {
      a && (Array.isArray(D), a(D));
    }
  }), q = l.useRef(null), [W, B] = l.useState(/* @__PURE__ */ new Set());
  return /* @__PURE__ */ f(le.Root, { ...d, children: /* @__PURE__ */ f(
    Vo,
    {
      required: x,
      scope: c,
      trigger: h,
      onTriggerChange: v,
      valueNode: C,
      onValueNodeChange: b,
      valueNodeHasChildren: g,
      onValueNodeHasChildrenChange: I,
      contentId: re(),
      value: _,
      onValueChange: k,
      open: O,
      onOpenChange: A,
      dir: E,
      triggerPointerDownPosRef: q,
      disabled: u,
      multi: p,
      children: /* @__PURE__ */ f(ve.Provider, { scope: c, children: /* @__PURE__ */ f(
        Po,
        {
          scope: r.__scopeSelect,
          onNativeOptionAdd: l.useCallback((D) => {
            B((H) => new Set(H).add(D));
          }, []),
          onNativeOptionRemove: l.useCallback((D) => {
            B((H) => {
              const F = new Set(H);
              return F.delete(D), F;
            });
          }, []),
          children: e
        }
      ) })
    }
  ) });
};
ke.displayName = he;
const xt = "SelectTrigger", Fe = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, ...t } = r, o = be(e), n = Y(xt, e), i = n.disabled, s = M(c, n.onTriggerChange), a = ge(e), [m, u, x] = Pt((d) => {
      const h = a().filter((b) => !b.disabled), v = h.find((b) => b.value === n.value), C = Et(h, d, v);
      if (C !== void 0 && !Array.isArray(C.value)) {
        const b = n.multi ? [C.value] : C.value;
        n.onValueChange(b);
      }
    }), p = () => {
      i || (n.onOpenChange(!0), x());
    };
    return /* @__PURE__ */ f(le.Anchor, { asChild: !0, ...o, children: /* @__PURE__ */ f(
      N.div,
      {
        role: "combobox",
        "aria-controls": n.contentId,
        "aria-expanded": n.open,
        "aria-required": n.required,
        "aria-autocomplete": "none",
        dir: n.dir,
        "data-state": n.open ? "open" : "closed",
        "data-disabled": i ? "" : void 0,
        "data-placeholder": n.value === void 0 ? "" : void 0,
        tabIndex: i ? void 0 : 0,
        ...t,
        ref: s,
        onClick: T(t.onClick, (d) => {
          d.currentTarget.focus();
        }),
        onPointerDown: T(t.onPointerDown, (d) => {
          const h = d.target;
          h.hasPointerCapture(d.pointerId) && h.releasePointerCapture(d.pointerId), (h.closest("button") ?? h.closest("div")) === d.currentTarget && d.button === 0 && d.ctrlKey === !1 && (p(), n.triggerPointerDownPosRef.current = {
            x: Math.round(d.pageX),
            y: Math.round(d.pageY)
          }, d.preventDefault());
        }),
        onKeyDown: T(t.onKeyDown, (d) => {
          const h = m.current !== "", v = d.ctrlKey || d.altKey || d.metaKey, C = d.target;
          (C.closest("button") ?? C.closest("div")) === d.currentTarget && (!v && d.key.length === 1 && u(d.key), !(h && d.key === " ") && Io.includes(d.key) && (p(), d.preventDefault()));
        })
      }
    ) });
  }
);
Fe.displayName = xt;
const Ct = "SelectValue", Le = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, children: t, placeholder: o, ...n } = r, i = Y(Ct, e), { onValueNodeHasChildrenChange: s } = i, a = t !== void 0, m = M(c, i.onValueNodeChange), [u, x] = l.useState([]), p = ge(e);
    L(() => {
      s(a);
    }, [s, a]), l.useLayoutEffect(() => {
      if (Array.isArray(i.value) && u.length !== i.value.length) {
        const h = setTimeout(() => {
          const v = p().filter(
            (C) => Array.isArray(C.value) ? !1 : i.value?.includes(C.value)
          );
          x(v);
        });
        return () => {
          clearTimeout(h);
        };
      }
    }, [i.value, p, u]);
    let d;
    if ((i.value === void 0 || i.value.length === 0) && o !== void 0)
      d = /* @__PURE__ */ f("span", { children: o });
    else if (typeof t == "function")
      if (Array.isArray(i.value)) {
        const h = i.value.map((v) => {
          const C = u.find((b) => b.value === v);
          return C ? t({ value: v, textValue: C?.textValue }) : null;
        });
        d = h.every((v) => v === null) ? o : h;
      } else
        d = t(i.value);
    else
      d = t;
    return /* @__PURE__ */ f(N.span, { ...n, ref: m, children: d || null });
  }
);
Le.displayName = Ct;
const Ro = "SelectIcon", Be = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, children: t, ...o } = r;
    return /* @__PURE__ */ f(N.span, { "aria-hidden": !0, ...o, ref: c, children: t || "▼" });
  }
);
Be.displayName = Ro;
const No = "SelectPortal", He = (r) => /* @__PURE__ */ f(it, { asChild: !0, ...r });
He.displayName = No;
const ne = "SelectContent", $e = l.forwardRef(
  (r, c) => {
    const e = Y(ne, r.__scopeSelect), [t, o] = l.useState();
    if (L(() => {
      o(new DocumentFragment());
    }, []), !e.open) {
      const n = t;
      return n ? Ce.createPortal(
        /* @__PURE__ */ f(vt, { scope: r.__scopeSelect, children: /* @__PURE__ */ f(ve.Slot, { scope: r.__scopeSelect, children: /* @__PURE__ */ f("div", { children: r.children }) }) }),
        n
      ) : null;
    }
    return /* @__PURE__ */ f(bt, { ...r, ref: c });
  }
);
$e.displayName = ne;
const j = 10, [vt, J] = ue(ne), Ao = "SelectContentImpl", bt = l.forwardRef(
  (r, c) => {
    const {
      __scopeSelect: e,
      position: t = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: a,
      align: m,
      alignOffset: u,
      arrowPadding: x,
      collisionBoundary: p,
      collisionPadding: d,
      sticky: h,
      hideWhenDetached: v,
      avoidCollisions: C,
      //
      ...b
    } = r, g = Y(ne, e), [I, E] = l.useState(null), [O, A] = l.useState(null), _ = M(c, (S) => E(S)), [k, q] = l.useState(null), [W, B] = l.useState(null), D = ge(e), [H, F] = l.useState(!1), z = l.useRef(!1);
    l.useEffect(() => {
      if (I)
        return at(I);
    }, [I]), lt();
    const G = l.useCallback(
      (S) => {
        const [V, ...y] = D().map((R) => R.ref.current), [w] = y.slice(-1), P = document.activeElement;
        for (const R of S)
          if (R === P || (R?.scrollIntoView({ block: "nearest" }), R === V && O && (O.scrollTop = 0), R === w && O && (O.scrollTop = O.scrollHeight), R?.focus(), document.activeElement !== P))
            return;
      },
      [D, O]
    ), $ = l.useCallback(
      () => G([k, I]),
      [G, k, I]
    );
    l.useEffect(() => {
      H && $();
    }, [H, $]);
    const { onOpenChange: X, triggerPointerDownPosRef: U } = g;
    l.useEffect(() => {
      if (I) {
        let S = { x: 0, y: 0 };
        const V = (w) => {
          S = {
            x: Math.abs(Math.round(w.pageX) - (U.current?.x ?? 0)),
            y: Math.abs(Math.round(w.pageY) - (U.current?.y ?? 0))
          };
        }, y = (w) => {
          S.x <= 10 && S.y <= 10 ? w.preventDefault() : I.contains(w.target) || X(!1), document.removeEventListener("pointermove", V), U.current = null;
        };
        return U.current !== null && (document.addEventListener("pointermove", V), document.addEventListener("pointerup", y, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", V), document.removeEventListener("pointerup", y, { capture: !0 });
        };
      }
    }, [I, X, U]), l.useEffect(() => {
      const S = () => X(!1);
      return window.addEventListener("blur", S), window.addEventListener("resize", S), () => {
        window.removeEventListener("blur", S), window.removeEventListener("resize", S);
      };
    }, [X]);
    const [de, se] = Pt((S) => {
      const V = D().filter((P) => !P.disabled), y = V.find((P) => P.ref.current === document.activeElement), w = Et(V, S, y);
      w && setTimeout(() => w.ref.current.focus());
    }), fe = l.useCallback(
      (S, V, y) => {
        const w = !z.current && !y;
        (g.value !== void 0 && g.value === V || w) && (q(S), w && (z.current = !0));
      },
      [g.value]
    ), Q = l.useCallback(() => I?.focus(), [I]), Z = l.useCallback(
      (S, V, y) => {
        const w = !z.current && !y;
        (g.value !== void 0 && (Array.isArray(V) ? V.every((R) => g.value?.includes(R)) : g.value === V) || w) && B(S);
      },
      [g.value]
    ), ce = t === "popper" ? Ve : St, ee = ce === Ve ? {
      side: s,
      sideOffset: a,
      align: m,
      alignOffset: u,
      arrowPadding: x,
      collisionBoundary: p,
      collisionPadding: d,
      sticky: h,
      hideWhenDetached: v,
      avoidCollisions: C
    } : {};
    return /* @__PURE__ */ f(
      vt,
      {
        scope: e,
        content: I,
        viewport: O,
        onViewportChange: A,
        itemRefCallback: fe,
        selectedItem: k,
        onItemLeave: Q,
        itemTextRefCallback: Z,
        focusSelectedItem: $,
        selectedItemText: W,
        position: t,
        isPositioned: H,
        searchRef: de,
        children: /* @__PURE__ */ f(ut, { as: Te, allowPinchZoom: !0, children: /* @__PURE__ */ f(
          st,
          {
            asChild: !0,
            trapped: g.open,
            onMountAutoFocus: (S) => {
              S.preventDefault();
            },
            onUnmountAutoFocus: T(o, (S) => {
              g.trigger?.focus({ preventScroll: !0 }), document.getSelection()?.empty(), S.preventDefault();
            }),
            children: /* @__PURE__ */ f(
              rt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: n,
                onPointerDownOutside: i,
                onFocusOutside: (S) => S.preventDefault(),
                onDismiss: () => g.onOpenChange(!1),
                children: /* @__PURE__ */ f(
                  ce,
                  {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    "aria-multiselectable": g.multi ? "true" : void 0,
                    dir: g.dir,
                    onContextMenu: (S) => S.preventDefault(),
                    ...b,
                    ...ee,
                    onPlaced: () => F(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: T(b.onKeyDown, (S) => {
                      const V = S.ctrlKey || S.altKey || S.metaKey;
                      if (S.key === "Tab" && S.preventDefault(), !V && S.key.length === 1 && se(S.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(S.key)) {
                        let w = D().filter((P) => !P.disabled).map((P) => P.ref.current);
                        if (["ArrowUp", "End"].includes(S.key) && (w = w.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
                          const P = S.target, R = w.indexOf(P);
                          w = w.slice(R + 1);
                        }
                        setTimeout(() => G(w)), S.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
bt.displayName = Ao;
const _o = "SelectItemAlignedPosition", St = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, onPlaced: t, ...o } = r, n = Y(ne, e), i = J(ne, e), [s, a] = l.useState(null), [m, u] = l.useState(null), x = M(c, (_) => u(_)), p = ge(e), d = l.useRef(!1), h = l.useRef(!0), { viewport: v, selectedItem: C, selectedItemText: b, focusSelectedItem: g } = i, I = l.useCallback(() => {
      if (n.trigger && n.valueNode && s && m && v && C && b) {
        const _ = n.trigger.getBoundingClientRect(), k = m.getBoundingClientRect(), q = n.valueNode.getBoundingClientRect(), W = b.getBoundingClientRect();
        if (n.dir !== "rtl") {
          const P = W.left - k.left, R = q.left - P, te = _.left - R, oe = _.width + te, Se = Math.max(oe, k.width), Ie = window.innerWidth - j, we = Qe(R, [j, Ie - Se]);
          s.style.minWidth = `${oe}px`, s.style.left = `${we}px`;
        } else {
          const P = k.right - W.right, R = window.innerWidth - q.right - P, te = window.innerWidth - _.right - R, oe = _.width + te, Se = Math.max(oe, k.width), Ie = window.innerWidth - j, we = Qe(R, [j, Ie - Se]);
          s.style.minWidth = `${oe}px`, s.style.right = `${we}px`;
        }
        const B = p(), D = window.innerHeight - j * 2, H = v.scrollHeight, F = window.getComputedStyle(m), z = parseInt(F.borderTopWidth, 10), G = parseInt(F.paddingTop, 10), $ = parseInt(F.borderBottomWidth, 10), X = parseInt(F.paddingBottom, 10), U = z + G + H + X + $, de = Math.min(C.offsetHeight * 5, U), se = window.getComputedStyle(v), fe = parseInt(se.paddingTop, 10), Q = parseInt(se.paddingBottom, 10), Z = _.top + _.height / 2 - j, ce = D - Z, ee = C.offsetHeight / 2, S = C.offsetTop + ee, V = z + G + S, y = U - V;
        if (V <= Z) {
          const P = C === B[B.length - 1].ref.current;
          s.style.bottom = "0px";
          const R = m.clientHeight - v.offsetTop - v.offsetHeight, te = Math.max(
            ce,
            ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
            (P ? Q : 0) + R + $
          ), oe = V + te;
          s.style.height = `${oe}px`;
        } else {
          const P = C === B[0].ref.current;
          s.style.top = "0px";
          const te = Math.max(
            Z,
            z + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
            (P ? fe : 0) + ee
          ) + y;
          s.style.height = `${te}px`, v.scrollTop = V - Z + v.offsetTop;
        }
        s.style.margin = `${j}px 0`, s.style.minHeight = `${de}px`, s.style.maxHeight = `${D}px`, t?.(), requestAnimationFrame(() => d.current = !0);
      }
    }, [
      p,
      n.trigger,
      n.valueNode,
      s,
      m,
      v,
      C,
      b,
      n.dir,
      t
    ]);
    L(() => I(), [I]);
    const [E, O] = l.useState();
    L(() => {
      m && O(window.getComputedStyle(m).zIndex);
    }, [m]);
    const A = l.useCallback(
      (_) => {
        _ && h.current === !0 && (I(), g?.(), h.current = !1);
      },
      [I, g]
    );
    return /* @__PURE__ */ f(
      Oo,
      {
        scope: e,
        contentWrapper: s,
        shouldExpandOnScrollRef: d,
        onScrollButtonChange: A,
        children: /* @__PURE__ */ f(
          "div",
          {
            ref: a,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: E
            },
            children: /* @__PURE__ */ f(
              N.div,
              {
                ...o,
                ref: x,
                style: {
                  // When we get the height of the content, it includes borders. If we were to set
                  // the height without having `boxSizing: 'border-box'` it would be too big.
                  boxSizing: "border-box",
                  // We need to ensure the content doesn't get taller than the wrapper
                  maxHeight: "100%",
                  ...o.style
                }
              }
            )
          }
        )
      }
    );
  }
);
St.displayName = _o;
const Mo = "SelectPopperPosition", Ve = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, align: t = "start", collisionPadding: o = j, ...n } = r, i = be(e);
    return /* @__PURE__ */ f(
      le.Content,
      {
        ...i,
        ...n,
        ref: c,
        align: t,
        collisionPadding: o,
        style: {
          // Ensure border-box for floating-ui calculations
          boxSizing: "border-box",
          ...n.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Ve.displayName = Mo;
const [Oo, Ue] = ue(
  ne,
  {}
), Pe = "SelectViewport", Ke = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, ...t } = r, o = J(Pe, e), n = Ue(Pe, e), i = M(c, o.onViewportChange), s = l.useRef(0);
    return /* @__PURE__ */ Ae(_e, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          }
        }
      ),
      /* @__PURE__ */ f(ve.Slot, { scope: e, children: /* @__PURE__ */ f(
        N.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...t,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...t.style
          },
          onScroll: T(t.onScroll, (a) => {
            const m = a.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: x } = n;
            if (x?.current && u) {
              const p = Math.abs(s.current - m.scrollTop);
              if (p > 0) {
                const d = window.innerHeight - j * 2, h = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), C = Math.max(h, v);
                if (C < d) {
                  const b = C + p, g = Math.min(d, b), I = b - g;
                  u.style.height = `${g}px`, u.style.bottom === "0px" && (m.scrollTop = I > 0 ? I : 0, u.style.justifyContent = "flex-end");
                }
              }
            }
            s.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ke.displayName = Pe;
const It = "SelectGroup", [Do, ko] = ue(It), We = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, ...t } = r, o = re();
    return /* @__PURE__ */ f(Do, { scope: e, id: o, children: /* @__PURE__ */ f(N.div, { role: "group", "aria-labelledby": o, ...t, ref: c }) });
  }
);
We.displayName = It;
const wt = "SelectLabel", ze = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, ...t } = r, o = ko(wt, e);
    return /* @__PURE__ */ f(N.div, { id: o.id, ...t, ref: c });
  }
);
ze.displayName = wt;
const xe = "SelectItem", [Fo, yt] = ue(xe), Ge = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, value: t, disabled: o = !1, textValue: n, ...i } = r, s = Y(xe, e), a = J(xe, e), m = typeof t == "string" ? Array.isArray(s.value) ? s.value.includes(t) : s.value === t : t.every((g) => s.value?.includes(g)), u = Array.isArray(s.value) && Array.isArray(t) && t.some((g) => s.value?.includes(g)), [x, p] = l.useState(n ?? ""), [d, h] = l.useState(!1), v = M(
      c,
      (g) => a.itemRefCallback?.(g, t, o)
    ), C = re(), b = () => {
      if (!o) {
        let g = s.multi && typeof t == "string" ? [t] : t;
        u && !m ? s.onValueChange(g) : Array.isArray(s.value) && (g = Rt(t, s.value)), s.onValueChange(g), s.multi || s.onOpenChange(!1);
      }
    };
    if (!s.multi && Array.isArray(t))
      throw new Error("You can only pass an array of values in multi selects");
    return /* @__PURE__ */ f(
      Fo,
      {
        scope: e,
        value: t,
        disabled: o,
        textId: C,
        isSelected: m,
        isIntermediate: u,
        onItemTextChange: l.useCallback((g) => {
          p((I) => I || (g?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f(ve.ItemSlot, { scope: e, value: t, disabled: o, textValue: x, children: /* @__PURE__ */ f(
          N.div,
          {
            role: "option",
            "aria-labelledby": C,
            "data-highlighted": d ? "" : void 0,
            "aria-selected": s.multi ? void 0 : m && d,
            "aria-checked": s.multi ? m : void 0,
            "data-state": m ? "checked" : "unchecked",
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            tabIndex: o ? void 0 : -1,
            ...i,
            ref: v,
            onFocus: T(i.onFocus, () => h(!0)),
            onBlur: T(i.onBlur, () => h(!1)),
            onPointerUp: T(i.onPointerUp, b),
            onPointerMove: T(i.onPointerMove, (g) => {
              o ? a.onItemLeave?.() : g.currentTarget.focus({ preventScroll: !0 });
            }),
            onPointerLeave: T(i.onPointerLeave, (g) => {
              g.currentTarget === document.activeElement && a.onItemLeave?.();
            }),
            onKeyDown: T(i.onKeyDown, (g) => {
              a.searchRef?.current !== "" && g.key === " " || (wo.includes(g.key) && b(), g.key === " " && g.preventDefault());
            })
          }
        ) })
      }
    );
  }
);
Ge.displayName = xe;
const pe = "SelectItemText", je = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, className: t, style: o, ...n } = r, i = Y(pe, e), s = J(pe, e), a = yt(pe, e), m = Eo(pe, e), [u, x] = l.useState(null), p = M(
      c,
      (b) => x(b),
      a.onItemTextChange,
      (b) => s.itemTextRefCallback?.(b, a.value, a.disabled)
    ), d = u?.textContent, h = l.useMemo(
      () => /* @__PURE__ */ f(
        "option",
        {
          value: a.value,
          disabled: a.disabled,
          children: d
        },
        Array.isArray(a.value) ? a.value.join(";") : a.value
      ),
      [a.disabled, a.value, d]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: C } = m;
    return L(() => (v(h), () => C(h)), [v, C, h]), /* @__PURE__ */ Ae(_e, { children: [
      /* @__PURE__ */ f(N.span, { id: a.textId, ...n, ref: p }),
      a.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ce.createPortal(n.children, i.valueNode) : null
    ] });
  }
);
je.displayName = pe;
const Tt = "SelectItemIndicator", Ye = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, children: t, ...o } = r, n = yt(Tt, e);
    return typeof t == "function" ? /* @__PURE__ */ f(N.span, { "aria-hidden": !0, ...o, ref: c, children: t({
      isSelected: n.isSelected,
      isIntermediate: n.isIntermediate
    }) }) : n.isSelected ? /* @__PURE__ */ f(N.span, { "aria-hidden": !0, ...o, ref: c, children: t }) : null;
  }
);
Ye.displayName = Tt;
const Ee = "SelectScrollUpButton", qe = l.forwardRef(
  (r, c) => {
    const e = J(Ee, r.__scopeSelect), t = Ue(Ee, r.__scopeSelect), [o, n] = l.useState(!1), i = M(c, t.onScrollButtonChange);
    return L(() => {
      if (e.viewport && e.isPositioned) {
        const s = e.viewport, a = () => {
          const m = s.scrollTop > 0;
          n(m);
        };
        return a(), s.addEventListener("scroll", a), () => s.removeEventListener("scroll", a);
      }
    }, [e.viewport, e.isPositioned]), o ? /* @__PURE__ */ f(
      Vt,
      {
        ...r,
        ref: i,
        onAutoScroll: () => {
          const { viewport: s, selectedItem: a } = e;
          s && a && (s.scrollTop -= a.offsetHeight);
        }
      }
    ) : null;
  }
);
qe.displayName = Ee;
const Re = "SelectScrollDownButton", Xe = l.forwardRef(
  (r, c) => {
    const e = J(Re, r.__scopeSelect), t = Ue(Re, r.__scopeSelect), [o, n] = l.useState(!1), i = M(c, t.onScrollButtonChange);
    return L(() => {
      if (e.viewport && e.isPositioned) {
        const s = e.viewport, a = () => {
          const m = s.scrollHeight - s.clientHeight, u = Math.ceil(s.scrollTop) < m;
          n(u);
        };
        return a(), s.addEventListener("scroll", a), () => s.removeEventListener("scroll", a);
      }
    }, [e.viewport, e.isPositioned]), o ? /* @__PURE__ */ f(
      Vt,
      {
        ...r,
        ref: i,
        onAutoScroll: () => {
          const { viewport: s, selectedItem: a } = e;
          s && a && (s.scrollTop += a.offsetHeight);
        }
      }
    ) : null;
  }
);
Xe.displayName = Re;
const Vt = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, onAutoScroll: t, ...o } = r, n = J("SelectScrollButton", e), i = l.useRef(null), s = ge(e), a = l.useCallback(() => {
      i.current !== null && (window.clearInterval(i.current), i.current = null);
    }, []);
    return l.useEffect(() => () => a(), [a]), L(() => {
      s().find((u) => u.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
    }, [s]), /* @__PURE__ */ f(
      N.div,
      {
        "aria-hidden": !0,
        ...o,
        ref: c,
        style: { flexShrink: 0, ...o.style },
        onPointerMove: T(o.onPointerMove, () => {
          n.onItemLeave?.(), i.current === null && (i.current = window.setInterval(t, 50));
        }),
        onPointerLeave: T(o.onPointerLeave, () => {
          a();
        })
      }
    );
  }
), Lo = "SelectSeparator", Ze = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, ...t } = r;
    return /* @__PURE__ */ f(N.div, { "aria-hidden": !0, ...t, ref: c });
  }
);
Ze.displayName = Lo;
const Ne = "SelectArrow", Je = l.forwardRef(
  (r, c) => {
    const { __scopeSelect: e, ...t } = r, o = be(e), n = Y(Ne, e), i = J(Ne, e);
    return n.open && i.position === "popper" ? /* @__PURE__ */ f(le.Arrow, { ...o, ...t, ref: c }) : null;
  }
);
Je.displayName = Ne;
const Bo = "BubbleSelect", Ho = l.forwardRef(
  (r, c) => {
    const { value: e, ...t } = r, o = l.useRef(null), n = M(c, o), i = _t(e), s = Y(Bo, void 0);
    l.useEffect(() => {
      const m = o.current, u = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(u, "value").set;
      if (i !== e && p) {
        const d = new Event("change", { bubbles: !0 });
        p.call(m, e), m.dispatchEvent(d);
      }
    }, [i, e]);
    let a = e;
    return s.multi && !Array.isArray(e) && (a = []), /* @__PURE__ */ f(Mt, { asChild: !0, children: /* @__PURE__ */ f(
      "select",
      {
        ...t,
        multiple: s.multi ? !0 : void 0,
        ref: n,
        defaultValue: a
      }
    ) });
  }
);
Ho.displayName = "BubbleSelect";
function Pt(r) {
  const c = Ot(r), e = l.useRef(""), t = l.useRef(0), o = l.useCallback(
    (i) => {
      const s = e.current + i;
      c(s), function a(m) {
        e.current = m, window.clearTimeout(t.current), m !== "" && (t.current = window.setTimeout(() => a(""), 1e3));
      }(s);
    },
    [c]
  ), n = l.useCallback(() => {
    e.current = "", window.clearTimeout(t.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(t.current), []), [e, o, n];
}
function Et(r, c, e) {
  const o = c.length > 1 && Array.from(c).every((m) => m === c[0]) ? c[0] : c, n = e ? r.indexOf(e) : -1;
  let i = $o(r, Math.max(n, 0));
  o.length === 1 && (i = i.filter((m) => m !== e));
  const a = i.find((m) => m.textValue.toLowerCase().startsWith(o.toLowerCase()));
  return a !== e ? a : void 0;
}
function $o(r, c) {
  return r.map((e, t) => r[(c + t) % r.length]);
}
const Rt = (r, c = []) => {
  if (Array.isArray(r))
    return r.reduce((t, o) => Rt(o, t), c);
  const e = c.indexOf(r);
  return e === -1 ? [...c, r] : [...c.slice(0, e), ...c.slice(e + 1)];
}, Uo = ke, Ko = Fe, Wo = Le, zo = Be, Go = He, jo = $e, Yo = Ke, qo = We, Xo = ze, Zo = Ge, Jo = je, Qo = Ye, en = qe, tn = Xe, on = Ze, nn = Je, En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arrow: nn,
  Content: jo,
  Group: qo,
  Icon: zo,
  Item: Zo,
  ItemIndicator: Qo,
  ItemText: Jo,
  Label: Xo,
  Portal: Go,
  Root: Uo,
  ScrollDownButton: tn,
  ScrollUpButton: en,
  Select: ke,
  SelectArrow: Je,
  SelectContent: $e,
  SelectGroup: We,
  SelectIcon: Be,
  SelectItem: Ge,
  SelectItemIndicator: Ye,
  SelectItemText: je,
  SelectLabel: ze,
  SelectPortal: He,
  SelectScrollDownButton: Xe,
  SelectScrollUpButton: qe,
  SelectSeparator: Ze,
  SelectTrigger: Fe,
  SelectValue: Le,
  SelectViewport: Ke,
  Separator: on,
  Trigger: Ko,
  Value: Wo,
  Viewport: Yo,
  createSelectScope: To
}, Symbol.toStringTag, { value: "Module" }));
export {
  Pn as Combobox,
  En as Select,
  An as composeEventHandlers,
  Dt as createCollection,
  Mn as useCallbackRef
};
