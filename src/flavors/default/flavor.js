vegas = vegas || {};
vegas.flavors = vegas.flavors || {};

vegas.flavors.default = {
  name: 'Default',
  version: 'dev',
  description: 'This is the default flavor for vegas',
  libraries: ['jquery', 'underscore', 'mustache', 'less'],
  modules: ['util', 'base', 'template', 'view', 'region', 'component', 'tab'],
  theme: 'default',
  settings: {
    flavor: 'default',
    theme: 'default'
  }
};

