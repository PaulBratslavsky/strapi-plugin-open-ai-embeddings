import React from "react";
import { Box, Typography } from "@strapi/design-system";
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;


function RenderMetadata({ metadata }) {
  if (!metadata) return <StyledTypography>No metadata found</StyledTypography>;
  return Object.entries(metadata).map(([key, value]) => (
    <Box key={key} padding={1}>
      <Typography>
        {key}: {value}
      </Typography>
    </Box>
  ));
}

export default function Metadata({ metadata }) {
  return (
    <Box padding={4} background="neutral0">
      <Typography variant="beta">Meta Data</Typography>
      <RenderMetadata metadata={metadata} />
    </Box>
  );
}
