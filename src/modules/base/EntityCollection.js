define(function(require, exports, module) {
  "use strict";

  var Collection = require('base/Collection');
  var utils = require('utils');

  function EntityCollection() {
    utils.extend(this, new Collection());
  }

  return EntityCollection;

});
