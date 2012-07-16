var require = require.config({
  // most module definitions are here
  baseUrl: "./modules/",
  paths: {
    flavors: '/src/flavors',
    settings: '/src/settings',
    base: '/src/modules/base',
    component: '/src/modules/component',
    region: '/src/modules/region',
    tab: '/src/modules/tab',
    view: '/src/modules/view',
    vegas: '/src/vegas',
    underscore: '/src/libraries/underscore/underscore'
  }
});

require(['vegas'], function (vegas) {
  // once loaded, say hello
  console.log('i went to vegas and all i got was this lousy text editor.');
  console.info('api: vegas.', vegas);
});
