define(function(require, exports, module) {
  "use strict";

  var EntityCollection = require('base/EntityCollection');
  var util = require('util');

  function RegionCollection(options) {
    util.extend(this, new EntityCollection(options));
  }

  return RegionCollection;

});
