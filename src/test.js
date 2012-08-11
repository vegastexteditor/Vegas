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

require(['jquery'], function ($) {
debugger;
});
