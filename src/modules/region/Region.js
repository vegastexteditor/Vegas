define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var utils = require('utils');

  function Region(options) {
    utils.extend(this, new Entity(this.constructor.name, options));
  }

  return Region;

});
