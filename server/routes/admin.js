module.exports = {
  type: 'admin',
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
      method: 'POST',
      path: '/embeddings/create-embedding',
      handler: 'openAiEmbeddings.createEmbedding',
      config: {
        policies: [
          {
            name: 'admin::hasPermissions',
            config: { actions: ['plugin::open-ai-embeddings.create'] }
          },
        ]
      },
    },
    {
      method: 'DELETE',
      path: '/embeddings/delete-embedding/:id',
      handler: 'openAiEmbeddings.deleteEmbedding',
      config: {
        policies: [
          {
            name: 'admin::hasPermissions',
            config: { actions: ['plugin::open-ai-embeddings.delete'] }
          },
        ]
      },
    },
    {
      method: 'GET',
      path: '/embeddings/embeddings-query',
      handler: 'openAiEmbeddings.queryEmbeddings',
      config: {
        policies: [
          {
            name: 'admin::hasPermissions',
            config: { actions: ['plugin::open-ai-embeddings.chat'] }
          },
        ]
      },
    },
    {
      method: 'GET',
      path: '/embeddings/find/:id',
      handler: 'openAiEmbeddings.getEmbedding',
      config: {
        policies: [
          {
            name: 'admin::hasPermissions',
            config: { actions: ['plugin::open-ai-embeddings.read'] }
          },
        ]
      },
    },
    {
      method: 'GET',
      path: '/embeddings/find',
      handler: 'openAiEmbeddings.getEmbeddings',
      config: {
        policies: [
          {
            name: 'admin::hasPermissions',
            config: { actions: ['plugin::open-ai-embeddings.read'] }
          },
        ]
      },
    },
  ]
};
