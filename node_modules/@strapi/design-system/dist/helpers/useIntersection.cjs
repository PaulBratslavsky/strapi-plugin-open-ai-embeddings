"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./deprecations.cjs"),s=require("../hooks/useIntersection.cjs"),n=e.once(console.warn);/**
 * @preserve
 * @deprecated useId has moved. Please import it from "@strapi/design-system/hooks/useId"
 */const o=(...t)=>(n(`${e.PREFIX} useIntersection has moved. Please import it from "@strapi/design-system/hooks/useIntersection"`),s.useIntersection(...t));exports.useIntersection=o;
