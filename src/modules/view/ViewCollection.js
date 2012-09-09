define(function(require, exports, module) {
  "use strict";

  var EntityCollection = require('base/EntityCollection');
  var util = require('util');

  function ViewCollection(vegas, options) {
    util.extend(this, new EntityCollection(vegas, options));
  }

  ViewCollection.prototype.getFromWindow = function (win) {

  };

  return ViewCollection;

});
