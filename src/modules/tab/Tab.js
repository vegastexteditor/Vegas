define(function(require, exports, module) {
  "use strict";

  var Entity = require('Entity');
  var util = require('util');

  function Tab(options) {
    util.extend(this, new Entity('Tab',  options));
  }

  return Tab;

});
