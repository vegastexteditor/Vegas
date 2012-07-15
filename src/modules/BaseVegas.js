define(function(require, exports, module) {
  "use strict";

  var ViewCollection  = require('ViewCollection');
  var RegionCollection  = require('RegionCollection');
  var ComponentCollection = require('ComponentCollection');
  var TabCollection = require('TabCollection');

  function BaseVegas() {
    this.views = new ViewCollection();
    this.regions = new RegionCollection();
    this.components = new ComponentCollection();
    this.tabs = new TabCollection();
  }

  BaseVegas.prototype.tpl = function () {
    console.log('template function');
  };

  return BaseVegas;

});
