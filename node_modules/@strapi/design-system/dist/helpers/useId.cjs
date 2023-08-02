"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./deprecations.cjs"),o=require("../hooks/useId.cjs"),r=e.once(console.warn);/**
 * @preserve
 * @deprecated useId has moved. Please import it from "@strapi/design-system/hooks/useId"
 */const t=(...s)=>(r(`${e.PREFIX} useId has moved. Please import it from "@strapi/design-system/hooks/useId"`),o.useId(...s));exports.useId=t;
