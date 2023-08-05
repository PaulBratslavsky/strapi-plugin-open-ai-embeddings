// @ts-nocheck
import React, { useEffect, useState } from "react";

import {
  Box,
  Flex,
  Button,
  Typography,
  Dialog,
  DialogBody,
  DialogFooter,
  Grid,
  GridItem,
  ContentLayout,
} from "@strapi/design-system";

import { ExclamationMarkCircle, Trash, Plus } from "@strapi/icons";
import { useFetchClient } from "@strapi/helper-plugin";
import Header from "../../components/Header";
import Markdown from "../../components/Markdown";
import BackLink from "../../components/BackLink";
import Metadata from "../../components/Metadata";
import pluginId from "../../pluginId";
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  display: block;
  margin-bottom: 1rem;
`;


function ensureParsedJSON(entity) {
  if (entity === null || entity === undefined) return null;
  if (typeof entity === "string") {
    try {
      return JSON.parse(entity);
    } catch (e) {
      console.error("Error Parsing JSON: ", e);
    }
  }
  return entity;
}

function ConfirmDeleteEmbedding({ callback, isLoading }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Deleting Embeddings</Button>
      <Dialog
        onClose={() => setIsVisible(false)}
        title="Confirmation"
        isOpen={isVisible}
      >
        <DialogBody icon={<ExclamationMarkCircle />}>
          <Flex direction="column" alignItems="center" gap={2}>
            <Flex justifyContent="center">
              <Typography id="confirm-description">
                Are you sure you want to delete this?
              </Typography>
            </Flex>
          </Flex>
        </DialogBody>
        <DialogFooter
          startAction={
            <Button onClick={() => setIsVisible(false)} variant="tertiary">
              Cancel
            </Button>
          }
          endAction={
            <Button
              variant="danger-light"
              onClick={callback}
              startIcon={<Trash />}
              disabled={isLoading}
            >
              {isLoading ? "Deleting Embeddings" : "Delete Embeddings"}
            </Button>
          }
        />
      </Dialog>
    </>
  );
}

export default function EmbeddingDetails() {
  const history = useHistory();
  const params = useParams();
  const { del, get } = useFetchClient();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await get(
          `/open-ai-embeddings/embeddings/find/${params.id}`
        );
        setData(data.data);
      } catch (error) {
        console.error("An error occurred while fetching the data: ", error);
      }
    }
    fetchData();
  }, []);

  const deleteEmbeddings = async (id) => {
    if (isLoading === false) setIsLoading(true);
    await del(`/open-ai-embeddings/embeddings/delete-embedding/${id}`);
  };

  async function handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    await deleteEmbeddings(params.id);
    history.push("/plugins/" + pluginId + "/");
  }

  if (!data?.id) return null;

  const embeddings = ensureParsedJSON(data.embeddings);
  const metadata = embeddings && embeddings[0].metadata;
  console.log("metadata", metadata);

  return (
    <ContentLayout>
      <Header
        title={data.title || "Embeddings Details"}
        subtitle={`Pinecone ID: ${data.embeddingsId || "N/A"}`}
        primaryAction={<ConfirmDeleteEmbedding callback={handleDelete} />}
        navigationAction={<BackLink to={"/plugins/" + pluginId + "/"} />}
      />
      <Box padding={8}>
        <Grid gap={6}>
          <GridItem background="neutral100" padding={1} col={8} s={12}>
            <Box padding={4} background="neutral0">
              <StyledTypography variant="beta">
                Embeddings Content
              </StyledTypography>
              <Markdown>{data.content}</Markdown>
            </Box>
          </GridItem>
          <GridItem background="neutral100" padding={1} col={4} s={12}>
            <Metadata metadata={metadata} />
          </GridItem>
        </Grid>
      </Box>
    </ContentLayout>
  );
}
