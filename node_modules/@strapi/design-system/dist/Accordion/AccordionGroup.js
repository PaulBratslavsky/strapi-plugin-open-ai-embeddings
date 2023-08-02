import { jsxs as l, jsx as o } from "react/jsx-runtime";
import * as n from "react";
import t from "styled-components";
import { KeyboardNavigable as b } from "../KeyboardNavigable/KeyboardNavigable.js";
import { Box as e } from "../Box/Box.js";
import { Flex as m } from "../Flex/Flex.js";
import { Typography as p } from "../Typography/Typography.js";
const $ = t(e)`
  border-bottom: 1px solid ${({ theme: r }) => r.colors.neutral200};
  border-right: 1px solid ${({ theme: r }) => r.colors.neutral200};
  border-left: 1px solid ${({ theme: r }) => r.colors.neutral200};
  border-radius: 0 0 ${({ theme: r }) => r.borderRadius} ${({ theme: r }) => r.borderRadius};
`, h = t(e)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({ theme: r }) => r.colors.neutral200};
    border-left: 1px solid ${({ theme: r }) => r.colors.neutral200};
    border-bottom: 1px solid ${({ theme: r }) => r.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({ theme: r }) => r.colors.neutral200};
    border-radius: ${({ theme: r }) => r.borderRadius} ${({ theme: r }) => r.borderRadius} 0 0;
    & > * {
      border-radius: ${({ theme: r }) => r.borderRadius} ${({ theme: r }) => r.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({ theme: r }) => r.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({ theme: r }) => r.colors.primary600};
  }

  ${({ theme: r, footer: d }) => `
    &:not(${d}) {
      & > *:last-of-type {
        border-radius: 0 0 ${r.borderRadius} ${r.borderRadius};
      }
    }
  `}
`, x = t(e)`
  svg path {
    fill: ${({ theme: r }) => r.colors.neutral500};
  }
`, C = ({ children: r, footer: d, label: i, labelAction: a, error: s }) => {
  const c = n.Children.toArray(r).map((u) => n.cloneElement(u, { hasErrorMessage: !1 }));
  return l(b, { attributeName: "data-strapi-accordion-toggle", children: [i && l(m, { paddingBottom: 1, children: [o(p, { variant: "pi", as: "label", textColor: "neutral800", fontWeight: "bold", children: i }), a && o(x, { paddingLeft: 1, children: a })] }), o(h, { footer: d, children: c }), d && o($, { children: d }), s && o(e, { paddingTop: 1, children: o(p, { variant: "pi", textColor: "danger600", children: s }) })] });
};
export {
  C as AccordionGroup
};
