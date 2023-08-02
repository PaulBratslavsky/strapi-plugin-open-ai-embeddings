import { SUCCESS_LIGHT as $, DANGER_LIGHT as n, TERTIARY as s, DEFAULT as d, SECONDARY as u, VARIANTS as p, LIGHT_VARIANTS as g, GHOST as b, DANGER as t, SUCCESS as f } from "./constants.js";
import { Typography as c } from "../Typography/Typography.js";
const l = (o) => o === $ || o === n ? `${o.substring(0, o.lastIndexOf("-"))}` : o === s ? "neutral" : o === d || o === u || p.every((r) => r !== o) ? "primary" : `${o}`, k = ({ theme: o }) => `
    border: 1px solid ${o.colors.neutral200};
    background: ${o.colors.neutral150};
    ${c} {
      color: ${o.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${o.colors.neutral600};
      }
    }
  `, i = ({ theme: o, variant: r }) => [...g, u].includes(r) ? `
      background-color: ${o.colors.neutral0};
    ` : r === s ? `
      background-color: ${o.colors.neutral100};
    ` : r === b ? `
      background-color: ${o.colors.neutral100};
    ` : r === d ? `
      border: 1px solid ${o.colors.buttonPrimary500};
      background: ${o.colors.buttonPrimary500};
    ` : `
    border: 1px solid ${o.colors[`${l(r)}500`]};
    background: ${o.colors[`${l(r)}500`]};
  `, x = ({ theme: o, variant: r }) => [...g, u].includes(r) ? `
      background-color: ${o.colors.neutral0};
      border: 1px solid ${o.colors[`${l(r)}600`]};
      ${c} {
        color: ${o.colors[`${l(r)}600`]};
      }
      svg {
        > g, path {
          fill: ${o.colors[`${l(r)}600`]};
        }
      }
    ` : r === s ? `
      background-color: ${o.colors.neutral150};
    ` : `
    border: 1px solid ${o.colors[`${l(r)}600`]};
    background: ${o.colors[`${l(r)}600`]};
  `, a = ({ theme: o, variant: r }) => {
  switch (r) {
    case n:
    case $:
    case u:
      return `
          border: 1px solid ${o.colors[`${l(r)}200`]};
          background: ${o.colors[`${l(r)}100`]};
          ${c} {
            color: ${o.colors[`${l(r)}700`]};
          }
          svg {
            > g, path {
              fill: ${o.colors[`${l(r)}700`]};
            }
          }
        `;
    case s:
      return `
          border: 1px solid ${o.colors.neutral200};
          background: ${o.colors.neutral0};
          ${c} {
            color: ${o.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${o.colors.neutral800};
            }
          }
        `;
    case b:
      return `
        border: 1px solid transparent;
        background: transparent;

        ${c} {
          color: ${o.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${o.colors.neutral500};
          }
        }
      `;
    case f:
    case t:
      return `
          border: 1px solid ${o.colors[`${l(r)}600`]};
          background: ${o.colors[`${l(r)}600`]};
          ${c} {
            color: ${o.colors.neutral0};
          }
        `;
    default:
      return `
          svg {
            > g, path {
              fill: ${o.colors.buttonNeutral0};
            }
          }
        `;
  }
};
export {
  x as getActiveStyle,
  k as getDisabledStyle,
  i as getHoverStyle,
  l as getVariantColorName,
  a as getVariantStyle
};
