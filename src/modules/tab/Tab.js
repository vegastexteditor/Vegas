define(function(require, exports, module) {
  "use strict";

  var Entity = require('Entity');
  var utils = require('utils');

  function Tab(options) {
    utils.extend(this, new Entity('Tab',  options));
  }

  return Tab;

});
