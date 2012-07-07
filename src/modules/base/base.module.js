vegas.modules.base = {
  name: 'Base Module',
  version: 'dev',
  files: [
    {
      name: 'Base',
      version: 'dev',
      namespace: 'vegas.Base',
      src: 'modules/base/Base.js',
      requires: ['util']
    },
    {
      name: 'ObjectCollection',
      version: 'dev',
      namespace: 'vegas.ObjectCollection',
      src: 'modules/base/ObjectCollection.js',
      requires: ['util','Collection']
    },
    {
      name: 'Collection',
      version: 'dev',
      namespace: 'vegas.Collection',
      src: 'modules/base/Collection.js',
      requires: ['util','Base']
    }
  ]
};

