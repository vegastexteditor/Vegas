define(function(require, exports, module) {
  "use strict";

  var EntityCollection = require('base/EntityCollection');
  var util = require('util');

  function ViewCollection(context) {
    util.extend(this, new EntityCollection(context));
  }

  return ViewCollection;

});
