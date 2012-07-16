var require = require.config(commonRequireConfig);

require(['vegas'], function (vegas) {
  // once loaded, say hello
  console.log('i went to vegas and all i got was this lousy text editor.');
  console.info('api: vegas.', vegas);
});
