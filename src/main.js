var requireConfig = {
  baseUrl: "modules",
  paths: {
    flavors: '../flavors',
    vegas: '../vegas',
    underscore: '../libraries/underscore/underscore',
    jquery: '../libraries/jquery/jquery',
    mustache: '../libraries/mustache/mustache',
    less: '../libraries/less/less',
    LAB: '../libraries/LAB/LAB',
    settings: '../settings'

  }
};

var require = require.config(requireConfig);

require(['vegas'], function (vegas) {
  // once loaded, say hello
  console.log('i went to vegas and all i got was this lousy text editor.');
  console.info('api: vegas.', vegas);
});
