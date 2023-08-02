// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import pluginId from "../pluginId";

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Typography,
  VisuallyHidden,
  Flex,
} from "@strapi/design-system";
import { ArrowLeft } from "@strapi/icons";

const StyledRow = styled(Tr)`
  cursor: pointer;
`;

export default function PluginTable({ data }) {
  const history = useHistory();
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  return (
    <Box padding={8} background="neutral100">
      <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Title</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Content</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Pinecone ID</Typography>
            </Th>
       
            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((entry) => {
              return (
                <StyledRow
                  key={entry.id}
                  onClick={() =>
                    history.push(
                      "/plugins/" + pluginId + "/embeddings/" + entry.id
                    )
                  }
                >
                  <Td>
                    <Typography textColor="neutral800">{entry.id}</Typography>
                  </Td>
                  <Td>
                    <Typography textColor="neutral800">
                      {entry.title.slice(0, 30)}...
                    </Typography>
                  </Td>
                  <Td>
                    <Typography textColor="neutral800">
                      {entry.content && entry.content.slice(0, 30)}...
                    </Typography>
                  </Td>
                  <Td>
                    <Typography textColor="neutral800">
                      {entry.embeddingsId && entry.embeddingsId}
                    </Typography>
                  </Td>
                 
                  <Td>
                    <Flex>
                      <Link
                        to={"/plugins/" + pluginId + "/embeddings/" + entry.id}
                      >
                        <ArrowLeft />
                      </Link>
                    </Flex>
                  </Td>
                </StyledRow>
              );
            })}
        </Tbody>
      </Table>
    </Box>
  );
}
