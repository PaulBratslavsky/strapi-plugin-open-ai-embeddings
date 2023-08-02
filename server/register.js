"use strict";

module.exports = ({ strapi }) => {
  // registeration phase
  Object.values(strapi.contentTypes).forEach((contentType) => {
    contentType.attributes.embedding = {
      type: "relation",
      relation: "morphOne",
      target: "plugin::strapi-plugin-open-ai-embeddings.embedding",
      morphBy: "related",
      private: false,
      configurable: false,
    };
  });
};
