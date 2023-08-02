// @ts-nocheck
import React from "react";
import { Box, SearchForm, Searchbar } from "@strapi/design-system";

export default function Search({ search, setSearch, onChange }) {
  return (
    <Box paddingLeft={8} paddingRight={8} paddingTop={1} paddingBottom={1}>
      <SearchForm>
        <Searchbar
          name="searchbar"
          onClear={() => setSearch("")}
          value={search}
          onChange={onChange}
          clearLabel="Clearing the plugin search"
          placeholder="Search embeddings..."
        >
          Searching embeddings...
        </Searchbar>
      </SearchForm>
    </Box>
  );
}
