"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("lodash"),d=require("./lightTheme/index.cjs"),n=require("../helpers/objects.cjs"),h=r=>`
${r}

The following is an example:


import { lightTheme, extendTheme } from '@strapi/design-system';

const myCustomTheme = extendTheme(lightTheme, {
    ${Object.keys(d.lightTheme).map(t=>`${t}: /* put the overrides for the ${t} key */,`).join(`
`)}
})
`,a=(r,t)=>{if(!n.isObject(r)){const e=h("The first argument should be an object and corresponds to the theme you want to extend.");throw new Error(e)}if(!n.isObject(t)){const e=h("The second argument should be an object and corresponds to the keys of the theme you want to override.");throw new Error(e)}function c(e,s){if(Array.isArray(e))return s;if(n.isObject(e)&&n.isObject(s))return o.merge(e,s)}const i=o.cloneDeep(r??{}),m=o.cloneDeep(t??{});return o.assignWith(i,m,c),i};exports.extendTheme=a;
