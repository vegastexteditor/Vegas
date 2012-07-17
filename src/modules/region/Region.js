define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var util = require('util');

  function Region(options) {
    util.extend(this, new Entity('Region', options));
  }

  return Region;

});
