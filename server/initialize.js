// @ts-nocheck
const { OpenAI } = require("langchain/llms/openai");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { PineconeClient } = require("@pinecone-database/pinecone");
const { PineconeStore } = require("langchain/vectorstores/pinecone");

class PluginManager {
  constructor() {
    this.model = null;
    this.embeddings = null;
    this.index = null;
    this.pineconeStore = null;
    this.pinecone = null;
  }

  async initializePinecone(pineconeEnv, pineconeKey, indexName) {
    if (this.pinecone && this.index)
      return { pinecone: this.pinecone, index: this.index };
    try {
      this.pinecone = new PineconeClient();
      await this.pinecone.init({ environment: pineconeEnv, apiKey: pineconeKey });
      this.index = this.pinecone.Index(indexName);
      return { pinecone: this.pinecone, index: this.index, pineconeStore: this.pineconeStore };
    } catch (error) {
      console.error(`Failed to initialize Pinecone: ${error}`);
      throw new Error(`Failed to initialize Pinecone: ${error}`);
    }
  }

  async initializeEmbeddings(openAiEmbeddingsKey) {
    if (this.embeddings) return this.embeddings;
    try {
      const config = {
        openAIApiKey: openAiEmbeddingsKey,
        model: "text-embedding-ada-002",
        maxTokens: 8000,
      };

      const embeddings = new OpenAIEmbeddings(config);
      this.embeddings = embeddings;
      return this.embeddings;
    } catch (error) {
      console.error(`Failed to initialize Embeddings: ${error}`);
      throw new Error(`Failed to initialize Embeddings: ${error}`);
    }
  }

  async initializePineconeStore() {
    if (this.pineconeStore) return this.pineconeStore;
    try {
      this.pineconeStore = new PineconeStore(this.embeddings, {
        pineconeIndex: this.index,
      });
      return this.pineconeStore;
    } catch (error) {
      console.error(`Failed to initialize Pinecone Store: ${error}`);
      throw new Error(`Failed to initialize Pinecone Store: ${error}`);
    }
  }

  async initializeModel(openAIApiKey, modelName) {
    if (this.model) return this.model;
    try {
      const model = new OpenAI({
        openAIApiKey: openAIApiKey,
        modelName: modelName,
      });
      this.model = model;
      return this.model;
    } catch (error) {
      console.error(`Failed to initialize Model: ${error}`);
      throw new Error(`Failed to initialize Model: ${error}`);
    }
  }

  async initialize(settings) {
    await this.initializePinecone(settings.pineconeApiEnv, settings.pineconeApiKey, settings.pineconeIndex);
    await this.initializeEmbeddings(settings.openAiApiKey);
    await this.initializePineconeStore();
    await this.initializeModel(settings.openAiApiKey, settings.openAiModelName);
  }

  async getSettings() {
    return { pinecone: this.pinecone, pineconeIndex: this.index, pineconeStore: this.pineconeStore, model: this.model };
  }
}

module.exports = new PluginManager();
