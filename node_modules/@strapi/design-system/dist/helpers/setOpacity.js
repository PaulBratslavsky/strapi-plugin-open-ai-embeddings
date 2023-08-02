const a = (t, o) => `${t}${Math.floor(o * 255).toString(16).padStart(2, "0")}`;
export {
  a as setOpacity
};
