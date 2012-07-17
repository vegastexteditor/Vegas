define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var util = require('util');

  function Component(options) {
    util.extend(this, new Entity('Entity', options));
  }

  return Component;

});
