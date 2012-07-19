define(function(require, exports, module) {
  "use strict";

  var EntityCollection = require('base/EntityCollection');
  var util = require('util');

  function TabCollection(vegas, options) {
    util.extend(this, new EntityCollection(vegas, options));
  }

  return TabCollection;

});
