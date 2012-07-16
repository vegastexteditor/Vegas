var require = require.config({
  // most module definitions are here
  baseUrl: "modules",
  paths: {
    flavors: 'flavors',
    vegas: '../vegas',
    underscore: '../libraries/underscore/underscore'
  }
});

require(['vegas'], function (vegas) {
  // once loaded, say hello
  console.log('i went to vegas and all i got was this lousy text editor.');
  console.info('api: vegas.', vegas);
});
