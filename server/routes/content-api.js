module.exports = {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/',
      handler: 'myController.index',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/embeddings-query',
      handler: 'openAiEmbeddings.queryEmbeddings',
    }
  ]
};