import { jsxs as f, jsx as i } from "react/jsx-runtime";
import { useRef as h, useState as u, useEffect as g } from "react";
import r from "styled-components";
import { RawTable as b } from "../RawTable/RawTable.js";
import { Box as n } from "../Box/Box.js";
const p = r(n)`
  overflow: hidden;
  border: 1px solid ${({ theme: t }) => t.colors.neutral150};
`, w = r(b)`
  width: 100%;
  white-space: nowrap;
`, m = r(n)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: t }) => t === "both" || t === "left" ? "''" : void 0};
    box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
    width: ${({ theme: t }) => t.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: t }) => t === "both" || t === "right" ? "''" : void 0};
    box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
    width: ${({ theme: t }) => t.spaces[2]};
    right: 0;
    top: 0;
  }
`, x = r(n)`
  overflow-x: auto;
`, O = ({ footer: t, ...l }) => {
  const a = h(null), [s, o] = u(), d = (e) => {
    const c = e.target.scrollWidth - e.target.clientWidth;
    if (e.target.scrollLeft === 0) {
      o("right");
      return;
    }
    if (e.target.scrollLeft === c) {
      o("left");
      return;
    }
    e.target.scrollLeft > 0 && o("both");
  };
  return g(() => {
    a.current.scrollWidth > a.current.clientWidth && o("right");
  }, []), f(p, { shadow: "tableShadow", hasRadius: !0, background: "neutral0", children: [i(m, { overflowing: s, position: "relative", children: i(x, { ref: a, onScroll: d, paddingLeft: 6, paddingRight: 6, children: i(w, { ...l }) }) }), t] });
};
export {
  O as Table
};
