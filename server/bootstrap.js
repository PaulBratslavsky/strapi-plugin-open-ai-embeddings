'use strict';
const pluginManager = require("./initialize");


module.exports = async ({ strapi }) => {
  const actions = [
    {
      section: 'plugins',
      displayName: 'Read',
      uid: 'read',
      pluginName: 'open-ai-embeddings',
    },
    {
      section: 'plugins',
      displayName: 'Update',
      uid: 'update',
      pluginName: 'open-ai-embeddings',
    },
    {
      section: 'plugins',
      displayName: 'Create',
      uid: 'create',
      pluginName: 'open-ai-embeddings',
    },
    {
      section: 'plugins',
      displayName: 'Delete',
      uid: 'delete',
      pluginName: 'open-ai-embeddings',
    },
    {
      section: 'plugins',
      displayName: 'Chat',
      uid: 'chat',
      pluginName: 'open-ai-embeddings',
    },
  ];

  await strapi.admin.services.permission.actionProvider.registerMany(actions);

  const pluginSettings = await strapi.config.get("plugin.open-ai-embeddings");
  pluginManager.initialize(pluginSettings);
};
