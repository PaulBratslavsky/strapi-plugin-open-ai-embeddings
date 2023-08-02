const s = (r) => {
  switch (r) {
    case "danger":
      return "danger100";
    case "success":
      return "success100";
    case "warning":
      return "warning100";
    default:
      return "primary100";
  }
}, c = (r) => s(r).replace("100", "200"), e = ({ theme: r, variant: n }) => n === "danger" ? r.colors.danger700 : n === "success" ? r.colors.success700 : n === "warning" ? r.colors.warning700 : r.colors.primary700;
export {
  s as handleBackgroundColor,
  c as handleBorderColor,
  e as handleIconColor
};
