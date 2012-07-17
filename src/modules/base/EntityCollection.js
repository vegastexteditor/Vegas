define(function(require, exports, module) {
  "use strict";

  var Collection = require('base/Collection');
  var util = require('util');

  function EntityCollection() {
    util.extend(this, new Collection());
  }

  return EntityCollection;

});
