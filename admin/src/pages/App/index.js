// @ts-nocheck
/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnErrorOccurred } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import HomePage from "../HomePage";
import CreateEmbeddings from "../CreateEmbeddings";
import EmbeddingDetails from "../EmbeddingDetails";
import ChatModal from '../../components/ChatModal';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route
          path={`/plugins/${pluginId}/embeddings`}
          component={CreateEmbeddings}
          exact
        />
        <Route
          path={`/plugins/${pluginId}/embeddings/:id`}
          component={EmbeddingDetails}
        />
        <Route component={AnErrorOccurred} />
      </Switch>
      <ChatModal />
    </div>
  );
};

export default App;
