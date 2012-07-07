vegas.modules.template = {
  name: 'Template Module',
  version: 'dev',
  files: [
    {
      name: 'Template',
      version: 'dev',
      namespace: 'vegas.Template',
      src: 'modules/template/Template.js',
      requires: ['util']
    },
    {
      name: 'Templates',
      version: 'dev',
      namespace: 'vegas.templates',
      src: 'modules/template/templates.js',
      requires: ['util','Template']
    }
  ]
};

