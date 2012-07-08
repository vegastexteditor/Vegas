vegas.modules.component = {
  name: 'Component Module',
  version: 'dev',
  files: [
    {
      name: 'Component',
      version: 'dev',
      namespace: 'vegas.Component',
      src: 'modules/component/Component.js',
      requires: ['util','Base']
    },
    {
      name: 'components',
      version: 'dev',
      namespace: 'vegas.components',
      src: 'modules/component/components.js',
      requires: ['util', 'ComponentCollection']
    },
    {
      name: 'ComponentCollection',
      version: 'dev',
      namespace: 'vegas.ComponentCollection',
      src: 'modules/component/ComponentCollection.js',
      requires: ['util', 'ObjectCollection']
    }
  ]
};

