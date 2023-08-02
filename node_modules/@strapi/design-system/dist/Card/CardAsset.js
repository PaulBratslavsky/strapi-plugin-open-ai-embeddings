import { jsx as t } from "react/jsx-runtime";
import r from "styled-components";
import { Flex as s } from "../Flex/Flex.js";
const a = r.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`, n = {
  S: 88,
  M: 164
}, d = r.div`
  display: flex;
  justify-content: center;
  height: ${({ size: e }) => n[e] / 16}rem;
  width: 100%;
  background: repeating-conic-gradient(${({ theme: e }) => e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({ theme: e }) => e.borderRadius};
  border-top-right-radius: ${({ theme: e }) => e.borderRadius};
`, m = ({ size: e = "M", children: i, ...o }) => t(d, { size: e, children: i ? t(s, { children: i }) : t(a, { ...o, "aria-hidden": !0 }) });
export {
  m as CardAsset
};
