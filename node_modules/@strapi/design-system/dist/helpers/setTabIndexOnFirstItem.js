const n = (e, i) => {
  const t = e.querySelectorAll(i);
  t && t.length > 0 && t.item(0).setAttribute("tabindex", "0");
};
export {
  n as setTabIndexOnFirstItem
};
