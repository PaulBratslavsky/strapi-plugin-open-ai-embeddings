"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./deprecations.cjs"),o=require("../hooks/usePrevious.cjs"),r=e.once(console.warn);/**
 * @preserve
 * @deprecated usePrevious has moved. Please import it from "@strapi/design-system/hooks/usePrevious"
 */const u=(...s)=>(r(`${e.PREFIX} usePrevious has moved. Please import it from "@strapi/design-system/hooks/usePrevious"`),o.usePrevious(...s));exports.usePrevious=u;
