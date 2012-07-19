define(function(require, exports, module) {
  "use strict";

  var EntityCollection = require('base/EntityCollection');
  var util = require('util');

  function SpaceCollection(context) {
    util.extend(this, new EntityCollection(context));
  }

  return SpaceCollection;

});
