"use strict";

module.exports = ({ strapi }) => ({
  async createEmbedding(ctx) {
    try {
      return await strapi
        .plugin("open-ai-embeddings")
        .service("embeddings")
        .createEmbedding(ctx.request.body);
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async deleteEmbedding(ctx) {
    try {
      return await strapi
        .plugin("open-ai-embeddings")
        .service("embeddings")
        .deleteEmbedding(ctx.params);
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async getEmbeddings(ctx) {
    try {
      return await strapi
        .plugin("open-ai-embeddings")
        .service("embeddings")
        .getEmbeddings(ctx);
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async getEmbedding(ctx) {
    try {
      return await strapi
        .plugin("open-ai-embeddings")
        .service("embeddings")
        .getEmbedding(ctx);
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async queryEmbeddings(ctx) {
    try {
      return await strapi
        .plugin("open-ai-embeddings")
        .service("embeddings")
        .queryEmbeddings(ctx.query);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
});
