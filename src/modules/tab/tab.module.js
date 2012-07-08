vegas.modules.tab = {
  name: 'Tab Module',
  version: 'dev',
  files: [
    {
      name: 'Tab',
      version: 'dev',
      namespace: 'vegas.Tab',
      src: 'modules/tab/Tab.js',
      requires: ['util','Base']
    },
    {
      name: 'tabs',
      version: 'dev',
      namespace: 'vegas.tabs',
      src: 'modules/tab/tabs.js',
      requires: ['util', 'TabCollection']
    },
    {
      name: 'TabCollection',
      version: 'dev',
      namespace: 'vegas.TabCollection',
      src: 'modules/tab/TabCollection.js',
      requires: ['util', 'ObjectCollection']
    }
  ]
};

