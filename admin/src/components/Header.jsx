import React from "react";
import { Box, BaseHeaderLayout } from "@strapi/design-system";

export default function Header({
  navigationAction,
  primaryAction,
  title,
  subtitle,
}) {
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        navigationAction={navigationAction}
        primaryAction={primaryAction}
        title={title}
        subtitle={subtitle}
        as="h2"
      />
    </Box>
  );
}
