"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("./constants.cjs"),s=require("../Typography/Typography.cjs"),c=o=>o===l.SUCCESS_LIGHT||o===l.DANGER_LIGHT?`${o.substring(0,o.lastIndexOf("-"))}`:o===l.TERTIARY?"neutral":o===l.DEFAULT||o===l.SECONDARY||l.VARIANTS.every(r=>r!==o)?"primary":`${o}`,u=({theme:o})=>`
    border: 1px solid ${o.colors.neutral200};
    background: ${o.colors.neutral150};
    ${s.Typography} {
      color: ${o.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${o.colors.neutral600};
      }
    }
  `,$=({theme:o,variant:r})=>[...l.LIGHT_VARIANTS,l.SECONDARY].includes(r)?`
      background-color: ${o.colors.neutral0};
    `:r===l.TERTIARY?`
      background-color: ${o.colors.neutral100};
    `:r===l.GHOST?`
      background-color: ${o.colors.neutral100};
    `:r===l.DEFAULT?`
      border: 1px solid ${o.colors.buttonPrimary500};
      background: ${o.colors.buttonPrimary500};
    `:`
    border: 1px solid ${o.colors[`${c(r)}500`]};
    background: ${o.colors[`${c(r)}500`]};
  `,n=({theme:o,variant:r})=>[...l.LIGHT_VARIANTS,l.SECONDARY].includes(r)?`
      background-color: ${o.colors.neutral0};
      border: 1px solid ${o.colors[`${c(r)}600`]};
      ${s.Typography} {
        color: ${o.colors[`${c(r)}600`]};
      }
      svg {
        > g, path {
          fill: ${o.colors[`${c(r)}600`]};
        }
      }
    `:r===l.TERTIARY?`
      background-color: ${o.colors.neutral150};
    `:`
    border: 1px solid ${o.colors[`${c(r)}600`]};
    background: ${o.colors[`${c(r)}600`]};
  `,g=({theme:o,variant:r})=>{switch(r){case l.DANGER_LIGHT:case l.SUCCESS_LIGHT:case l.SECONDARY:return`
          border: 1px solid ${o.colors[`${c(r)}200`]};
          background: ${o.colors[`${c(r)}100`]};
          ${s.Typography} {
            color: ${o.colors[`${c(r)}700`]};
          }
          svg {
            > g, path {
              fill: ${o.colors[`${c(r)}700`]};
            }
          }
        `;case l.TERTIARY:return`
          border: 1px solid ${o.colors.neutral200};
          background: ${o.colors.neutral0};
          ${s.Typography} {
            color: ${o.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${o.colors.neutral800};
            }
          }
        `;case l.GHOST:return`
        border: 1px solid transparent;
        background: transparent;

        ${s.Typography} {
          color: ${o.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${o.colors.neutral500};
          }
        }
      `;case l.SUCCESS:case l.DANGER:return`
          border: 1px solid ${o.colors[`${c(r)}600`]};
          background: ${o.colors[`${c(r)}600`]};
          ${s.Typography} {
            color: ${o.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${o.colors.buttonNeutral0};
            }
          }
        `}};exports.getActiveStyle=n;exports.getDisabledStyle=u;exports.getHoverStyle=$;exports.getVariantColorName=c;exports.getVariantStyle=g;
