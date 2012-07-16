define(function(require, exports, module) {
  "use strict";

  var EntityCollection = require('base/EntityCollection');
  var utils = require('utils');

  function ViewCollection(context) {
    utils.extend(this, new EntityCollection(context));
  }

  return ViewCollection;

});
