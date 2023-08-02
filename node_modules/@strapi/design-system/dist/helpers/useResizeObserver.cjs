"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./deprecations.cjs"),r=require("../hooks/useResizeObserver.cjs"),o=e.once(console.warn);/**
 * @preserve
 * @deprecated useResizeObserver has moved. Please import it from "@strapi/design-system/hooks/useResizeObserver"
 */const t=(...s)=>(o(`${e.PREFIX} useResizeObserver has moved. Please import it from "@strapi/design-system/hooks/useResizeObserver"`),r.useResizeObserver(...s));exports.useResizeObserver=t;
