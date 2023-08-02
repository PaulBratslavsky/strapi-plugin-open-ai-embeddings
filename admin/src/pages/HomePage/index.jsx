// @ts-nocheck
/*
 *
 * HomePage
 *
 */
import React, { useEffect, useState, useCallback } from "react";
import _ from "lodash";
import qs from "qs";
import { useFetchClient } from "@strapi/helper-plugin";
import { useHistory } from "react-router-dom";
import { EmptyStateLayout, Box, Button, ContentLayout } from "@strapi/design-system";
import { Plus } from "@strapi/icons";
import pluginId from "../../pluginId";
import Illo from "../../components/Illo";
import ButtonLink from "../../components/ButtonLink";
import Header from "../../components/Header";
import PluginTable from "../../components/Table";
import Search from "../../components/Search";

function EmptyState() {
  const history = useHistory();
  return (
    <Box padding={8}>
        <EmptyStateLayout
          icon={<Illo />}
          content="Let's create our first embedding..."
          action={
            <Button
              onClick={() => history.push(`/plugins/${pluginId}/embeddings`)}
              startIcon={<Plus />}
            >
              Create new embedding
            </Button>
          }
        />
      </Box>
  );
}

const query = (searchTerm) =>
  qs.stringify({
    filters: {
      $or: [
        {
          title: {
            $contains: searchTerm,
          },
        },
        {
          content: {
            $contains: searchTerm,
          },
        },
      ],
    },
  });

export default function HomePage() {
  const { get } = useFetchClient();
  const [embeddings, setEmbeddings] = useState([]);
  const [search, setSearch] = useState("");

  //TODO: LEARN MORE ABOUT DEBOUNCE
  const fetchData = useCallback(
    _.debounce(async (searchTerm) => {
      const response = await get(
        `/open-ai-embeddings/embeddings/find?${query(searchTerm)}`
      );
      setEmbeddings(response.data);
    }, 500),
    [get]
  );

  useEffect(() => {
    fetchData(search);
  }, [search, fetchData]);

  function handleSearchChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }
  const { data, count, totalCount } = embeddings;

  if (!data) return null;
  if (totalCount === 0) return <EmptyState />;

  return (
    <ContentLayout>
      <Header
        title="Embeddings"
        subtitle={`${count} results found`}
        primaryAction={
          <ButtonLink
            to={`/plugins/${pluginId}/embeddings`}
            icon={<Plus />}
            text="Create new embedding"
          />
        }
      />
      <Search
        search={search}
        setSearch={setSearch}
        onChange={handleSearchChange}
      />
      <PluginTable data={data} />
    </ContentLayout>
  );
}
