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
    util.extend(this, new vegas._ObjectCollection());
  };

  RegionCollection.prototype.getObject = function (id) {
    var self = this;

    this.each(function (item) {
      if (item.getId() == id) {
        return item;
      }
    });

    return false;

  };

  global.vegas._RegionCollection = RegionCollection;

})(this);
