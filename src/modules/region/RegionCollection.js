/**
 * @fileOverview Keeps track of regions that have been created, and provides
 * methods for manipulating the regions, this collection is made available to the
 * global vegas object via regions.js
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function RegionCollection() {
    util.extend(this, new vegas.ObjectCollection());
  };

  RegionCollection.prototype.regionCollectionMethod = function () {
    console.log('regionCollectionMethod');
  };

  global.vegas.RegionCollection = RegionCollection;

})(this);
