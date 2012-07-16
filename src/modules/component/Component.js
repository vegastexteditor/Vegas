define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var utils = require('utils');

  function Component(options) {
    utils.extend(this, new Entity('Entity', options));
  }

  return Component;

});