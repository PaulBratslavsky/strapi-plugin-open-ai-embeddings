import { StateEffect as o, StateField as d } from "@codemirror/state";
import { Decoration as i, EditorView as a } from "@codemirror/view";
const n = o.define(), s = o.define(), l = i.mark({
  attributes: { style: "background-color: yellow; color: black" }
}), m = d.define({
  // Start with an empty set of decorations
  create() {
    return i.none;
  },
  // This is called whenever the editor updates it computes the new set
  update(r, t) {
    return r = r.map(t.changes), t.effects.forEach((e) => {
      e.is(n) ? r = r.update({
        add: e.value,
        sort: !0
      }) : e.is(s) && (r = r.update({ filter: e.value }));
    }), r;
  },
  // Indicate that this field provides a set of decorations
  provide: (r) => a.decorations.from(r)
});
export {
  n as addMarks,
  s as filterMarks,
  l as lineHighlightMark,
  m as markField
};
