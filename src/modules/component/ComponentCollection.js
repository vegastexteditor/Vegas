define(function(require, exports, module) {
  "use strict";

  var EntityCollection = require('base/EntityCollection');
  var utils = require('utils');

  function ComponentCollection(options) {
    utils.extend(this, new EntityCollection(options));
  }

  return ComponentCollection;

});
