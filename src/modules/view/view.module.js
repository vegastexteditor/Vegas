vegas.modules.view = {
  name: 'View Module',
  version: 'dev',
  files: [
    {
      name: 'ViewsCollection',
      version: 'dev',
      namespace: 'vegas.ViewsCollection',
      src: 'modules/view/ViewsCollection.js',
      requires: ['util', 'ObjectCollection']
    },
    {
      name: 'views',
      version: 'dev',
      namespace: 'vegas.views',
      src: 'modules/view/views.js',
      requires: ['ViewsCollection']
    },
    {
      name: 'View',
      version: 'dev',
      namespace: 'vegas.View',
      src: 'modules/view/View.js',
      requires: ['util','Base', 'BaseRegion']
    }
  ]
};

