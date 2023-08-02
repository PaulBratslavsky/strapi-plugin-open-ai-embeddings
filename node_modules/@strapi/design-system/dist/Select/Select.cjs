"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("react/jsx-runtime"),o=require("react"),r=require("./MultiSelect.cjs"),s=require("./SingleSelect.cjs");function a(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const u=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,u.get?u:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const l=a(o),i=l.createContext({multi:!1}),S=()=>l.useContext(i);/**
 * @preserve
 * @deprecated You should import the specific type of select you want to render
 *
 * e.g. `import { MultiSelect } from '@strapi/design-system';`
 */const g=e=>{const t=l.useMemo(()=>({multi:!!(e.multi||e.withTags)}),[e.multi,e.withTags]);return c.jsx(i.Provider,{value:t,children:e.multi||e.withTags?c.jsx(r.MultiSelect,{...e}):c.jsx(s.SingleSelect,{...e})})};exports.Select=g;exports.useSelectContext=S;
