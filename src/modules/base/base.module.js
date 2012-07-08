vegas.modules.base = {
  name: 'Base Module',
  version: 'dev',
  files: [
    {
      name: 'Base',
      version: 'dev',
      namespace: 'vegas._Base',
      src: 'modules/base/Base.js',
      requires: ['util']
    },
    {
      name: 'Entity',
      version: 'dev',
      namespace: 'vegas._Entity',
      src: 'modules/base/Entity.js',
      requires: ['util']
    },
    {
      name: 'ObjectCollection',
      version: 'dev',
      namespace: 'vegas._ObjectCollection',
      src: 'modules/base/ObjectCollection.js',
      requires: ['util','Collection']
    },
    {
      name: 'Collection',
      version: 'dev',
      namespace: 'vegas._Collection',
      src: 'modules/base/Collection.js',
      requires: ['util','Base']
    }
  ]
};

