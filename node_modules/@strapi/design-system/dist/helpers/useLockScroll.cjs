"use strict";const e=require("./deprecations.cjs"),s=require("../hooks/useLockScroll.cjs"),r=e.once(console.warn);/**
 * @preserve
 * @deprecated useLockScroll has moved. Please import it from "@strapi/design-system/hooks/useLockScroll"
 */const c=(...o)=>(r(`${e.PREFIX} useLockScroll has moved. Please import it from "@strapi/design-system/hooks/useLockScroll"`),s(...o));module.exports=c;
