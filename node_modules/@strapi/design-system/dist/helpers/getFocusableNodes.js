const u = (t, e) => [
  ...t.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')
].filter((r) => r.hasAttribute("disabled") ? !1 : e ? !0 : r.getAttribute("tabindex") !== "-1"), n = (t) => t.filter((e) => e.tagName === "INPUT" ? e.type !== "checkbox" && e.type !== "radio" : !1);
export {
  u as getFocusableNodes,
  n as getFocusableNodesWithKeyboardNav
};
