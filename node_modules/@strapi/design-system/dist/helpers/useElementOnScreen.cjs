"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./deprecations.cjs"),r=require("../hooks/useElementOnScreen.cjs"),t=e.once(console.warn);/**
 * @preserve
 * @deprecated useElementOnScreen has moved. Please import it from "@strapi/design-system/hooks/useElementOnScreen"
 */const s=(...n)=>(t(`${e.PREFIX} useElementOnScreen has moved. Please import it from "@strapi/design-system/hooks/useElementOnScreen"`),r.useElementOnScreen(...n));exports.useElementOnScreen=s;
