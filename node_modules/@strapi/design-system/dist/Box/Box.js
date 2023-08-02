import d from "styled-components";
import r from "../helpers/handleResponsiveValues.js";
import { extractStyleFromTheme as s } from "../helpers/theme.js";
const t = {
  color: !0,
  cursor: !0,
  height: !0,
  width: !0
}, l = d.div.withConfig({
  shouldForwardProp: (e, o) => !t[e] && o(e)
})`
  // Font
  font-size: ${({ fontSize: e, theme: o }) => s(o.fontSizes, e, e)};

  // Colors
  background: ${({ theme: e, background: o }) => s(e.colors, o, o)};
  color: ${({ theme: e, color: o }) => s(e.colors, o, void 0)};

  // Spaces
  ${({ theme: e, padding: o }) => r("padding", o, e)}
  ${({ theme: e, paddingTop: o }) => r("padding-top", o, e)}
  ${({ theme: e, paddingRight: o }) => r("padding-right", o, e)}
  ${({ theme: e, paddingBottom: o }) => r("padding-bottom", o, e)}
  ${({ theme: e, paddingLeft: o }) => r("padding-left", o, e)}
  ${({ theme: e, marginLeft: o }) => r("margin-left", o, e)}
  ${({ theme: e, marginRight: o }) => r("margin-right", o, e)}
  ${({ theme: e, marginTop: o }) => r("margin-top", o, e)}
  ${({ theme: e, marginBottom: o }) => r("margin-bottom", o, e)}

  // Responsive hiding
  ${({ theme: e, hiddenS: o }) => o ? `${e.mediaQueries.tablet} { display: none; }` : void 0}
  ${({ theme: e, hiddenXS: o }) => o ? `${e.mediaQueries.mobile} { display: none; }` : void 0}
  

  // Borders
  border-radius: ${({ theme: e, hasRadius: o, borderRadius: i }) => o ? e.borderRadius : i};
  border-style: ${({ borderStyle: e }) => e};
  border-width: ${({ borderWidth: e }) => e};
  border-color: ${({ borderColor: e, theme: o }) => s(o.colors, e, void 0)};
  border: ${({ theme: e, borderColor: o, borderStyle: i, borderWidth: n }) => {
  if (o && !i && typeof n > "u")
    return `1px solid ${e.colors[o]}`;
}};

  // Shadows
  box-shadow: ${({ theme: e, shadow: o }) => s(e.shadows, o, void 0)};

  // Handlers
  pointer-events: ${({ pointerEvents: e }) => e};
  &:hover {
    ${({ _hover: e, theme: o }) => e ? e(o) : void 0}
  }

  // Display
  display: ${({ display: e }) => e};

  // Position
  position: ${({ position: e }) => e};
  left: ${({ left: e, theme: o }) => s(o.spaces, e, e)};
  right: ${({ right: e, theme: o }) => s(o.spaces, e, e)};
  top: ${({ top: e, theme: o }) => s(o.spaces, e, e)};
  bottom: ${({ bottom: e, theme: o }) => s(o.spaces, e, e)};
  z-index: ${({ zIndex: e }) => e};
  overflow: ${({ overflow: e }) => e};

  // Size
  width: ${({ width: e, theme: o }) => s(o.spaces, e, e)};
  max-width: ${({ maxWidth: e, theme: o }) => s(o.spaces, e, e)};
  min-width: ${({ minWidth: e, theme: o }) => s(o.spaces, e, e)};
  height: ${({ height: e, theme: o }) => s(o.spaces, e, e)};
  max-height: ${({ maxHeight: e, theme: o }) => s(o.spaces, e, e)};
  min-height: ${({ minHeight: e, theme: o }) => s(o.spaces, e, e)};

  // Animation
  transition: ${({ transition: e }) => e};
  transform: ${({ transform: e }) => e};
  animation: ${({ animation: e }) => e};

  //Flexbox children props
  flex-shrink: ${({ shrink: e }) => e};
  flex-grow: ${({ grow: e }) => e};
  flex-basis: ${({ basis: e }) => e};
  flex: ${({ flex: e }) => e};

  // Text
  text-align: ${({ textAlign: e }) => e};
  text-transform: ${({ textTransform: e }) => e};
  line-height: ${({ theme: e, lineHeight: o }) => s(e.lineHeights, o, o)};

  // Cursor
  cursor: ${({ cursor: e }) => e};
`;
export {
  l as Box
};
