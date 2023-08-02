// @ts-nocheck
import React from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { TextInput } from "@strapi/design-system";

const StyledForm = styled.form`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const StyledMDEditor = styled(MDEditor)`
  margin-top: 1rem;
  margin-bottom: 1rem; 
`;

export default function CreateEmbeddingsForm({
  onSubmit,
  isLoading,
  input,
  setInput,
  markdown,
  handleMarkdownChange,
  height,
  children,
}) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <fieldset disabled={isLoading}>
        <TextInput
          placeholder="Title"
          label="Title"
          name="input"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div data-color-mode="light">
          <StyledMDEditor
            value={markdown}
            onChange={handleMarkdownChange}
            height={height || 400}
          />
        </div>
        {children && children}
      </fieldset>
    </StyledForm>
  );
}
