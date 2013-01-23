define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var Region = require('region/Region');
  var util = require('util');

  function RegionPair(spaceInstance, options) {
    // extend Entity class for common methods
    util.extend(this, new Entity('RegionPair', spaceInstance, options));
    // inherit options and allow a second region to make a pair.
    options = options || {};
    options.allowPair = true;

    new Region(spaceInstance, options);
  }

  return RegionPair;

});
