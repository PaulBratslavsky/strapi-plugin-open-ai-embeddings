import { jsx as n, jsxs as O } from "react/jsx-runtime";
import { useRef as l, useEffect as J } from "react";
import { json as j, jsonParseLinter as H } from "@codemirror/lang-json";
import { useCodeMirror as L } from "@uiw/react-codemirror";
import { JSONInputContainer as z } from "./JSONInputContainer.js";
import { markField as A, addMarks as B, lineHighlightMark as R, filterMarks as q } from "./utils/decorationExtension.js";
import { Field as y } from "../Field/Field.js";
import { Flex as P } from "../Flex/Flex.js";
import { FieldLabel as V } from "../Field/FieldLabel.js";
import { FieldError as D } from "../Field/FieldError.js";
import { FieldHint as G } from "../Field/FieldHint.js";
const v = ({ label: a, error: d, hint: g, labelAction: p, value: E = "", required: S = !1, disabled: u = !1, onChange: k = () => null, ...C }) => {
  const o = l(), i = l(), c = l(), F = !!d, b = (r) => {
    const t = i.current?.doc;
    if (t) {
      const { text: s, to: e } = t.line(r), m = e - s.trimStart().length;
      e > m && c.current?.dispatch({
        effects: B.of([R.range(m, e)])
      });
    }
  }, x = () => {
    const r = i.current?.doc;
    if (r) {
      const t = r.length || 0;
      c.current?.dispatch({
        effects: q.of((s, e) => e <= 0 || s >= t)
      });
    }
  }, f = ({ state: r, view: t }) => {
    c.current = t, i.current = r, x();
    const e = H()(t);
    e.length && b(r.doc.lineAt(e[0].from).number);
  }, M = (r, t) => {
    f(t), k(r);
  }, I = (r, t) => {
    c.current = r, i.current = t, f({ view: r, state: t });
  }, { setContainer: h } = L({
    value: E,
    onCreateEditor: I,
    container: o.current,
    editable: !u,
    extensions: [j(), A],
    onChange: M,
    theme: "dark",
    basicSetup: {
      lineNumbers: !0,
      bracketMatching: !0,
      closeBrackets: !0,
      indentOnInput: !0,
      syntaxHighlighting: !0,
      highlightSelectionMatches: !0,
      tabSize: 2
    }
  }), N = () => {
    u || o.current?.children[0].children[1].children[1]?.focus();
  };
  return J(() => {
    const r = o.current;
    r && h(r);
  }, [h]), n(y, { error: d, hint: g, required: S, children: O(P, { direction: "column", alignItems: "stretch", gap: 1, children: [a && n(V, { onClick: N, action: p, children: a }), n(z, { ref: o, hasError: F, alignItems: "stretch", fontSize: 2, hasRadius: !0, ...C }), n(D, {}), n(G, {})] }) });
};
export {
  v as JSONInput
};
