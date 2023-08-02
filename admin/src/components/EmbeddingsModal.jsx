// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useFetchClient } from "@strapi/helper-plugin";
import { useHistory } from "react-router-dom";
import pluginId from "../pluginId";
import {
  Button,
  Typography,
  Box,
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@strapi/design-system";
import { Plus, Eye } from "@strapi/icons";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useNotification } from "@strapi/helper-plugin";
import CreateEmbeddingsForm from "./CreateEmbeddingsForm";

const StyledTypography = styled(Typography)`
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export default function EmbeddingsModal() {
  const { post } = useFetchClient();
  const toggleNotification = useNotification();
  const history = useHistory();
  const dataManager = useCMEditViewDataManager();
  const initialData = dataManager.initialData;

  const [isVisible, setIsVisible] = useState(false);
  const [input, setInput] = React.useState("");
  const [fieldname, setFieldname] = React.useState("");
  const [markdown, setMarkdown] = React.useState("Enter text here");
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [response, setResponse] = React.useState(null);

  useEffect(() => {
    for (const [key, value] of Object.entries(dataManager.layout.attributes)) {
      if (value.type === "richtext") {
        setFieldname(key);
        setMarkdown(dataManager.modifiedData[key]);
      }
    }
  }, [dataManager.modifiedData]);

  const createEmbeddings = async () => {
    if (isLoading === false) setIsLoading(true);
    return await post("/open-ai-embeddings/embeddings/create-embedding", {
      data: {
        title: input,
        content: markdown,
        collectionType: dataManager.slug,
        fieldName: fieldname,
        related: {
          __type: dataManager.slug,
          id: initialData.id,
        },
      },
    });
  };

  function handleMarkdownChange(value) {
    if (value.length > 4000) {
      setError("Chunk size limit reached");
    }
    setMarkdown(value);
  }

  function checkIfFieldIsBlank() {
    if (markdown === "") return { error: true, type: "warning", message: "Embeddings text is required" };
    if (input === "") return { error: true, type: "warning", message: "Embeddings title is required" };
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (checkIfFieldIsBlank()) {
      toggleNotification(checkIfFieldIsBlank());
      return;
    };

    setIsLoading(true);
    const response = await createEmbeddings();
    setIsVisible(false);
    setResponse(response);
  }

  function hasEmbedding() {
    if (response) return response.data.id;
    if (initialData?.embedding) return initialData?.embedding.id;
    return null;
  }

  return (
    <div>
      {hasEmbedding() ? (
        <Button
          onClick={() =>
            history.push(
              "/plugins/" + pluginId + "/embeddings/" + hasEmbedding()
            )
          }
          startIcon={<Eye />}
          fullWidth
        >
          View Embedding
        </Button>
      ) : (
        <Button
          onClick={() => setIsVisible(true)}
          startIcon={<Plus />}
          disabled={!initialData.publishedAt}
          fullWidth
        >
          Create new embedding
        </Button>
      )}

      {isVisible && (
        <ModalLayout
          onClose={() => setIsVisible((prev) => !prev)}
          labelledBy="title"
        >
          <ModalHeader>
            <Typography
              fontWeight="bold"
              textColor="neutral800"
              as="h2"
              id="title"
            >
              Create A New Embedding
            </Typography>
          </ModalHeader>
          <ModalBody>
            <Box padding={2}>
              <StyledTypography>{`Chunk Size: ${markdown.length}`}</StyledTypography>
              <CreateEmbeddingsForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
                input={input}
                setInput={setInput}
                markdown={markdown}
                handleMarkdownChange={handleMarkdownChange}
                error={error}
                height={300}
              />
            </Box>
          </ModalBody>
          <ModalFooter
            endActions={
              <Button onClick={handleSubmit} disabled={isLoading || error}>
                {isLoading ? "Creating Embeddings" : "Create Embeddings"}
              </Button>
            }
          />
        </ModalLayout>
      )}
    </div>
  );
}
