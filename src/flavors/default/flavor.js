vegas = vegas || {};
vegas.flavors = vegas.flavors || {};

vegas.flavors.default = {
  name: 'Default',
  version: 'dev',
  description: 'This is the default flavor for vegas',
  libraries: ['jquery', 'underscore', 'mustache'],
  modules: ['util', 'base', 'template', 'view', 'region'],
  theme: 'default',
  settings: {
    flavor: 'default',
    theme: 'default'
  }
}
