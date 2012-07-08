/**
 * @fileOverview Defines a generic object for keeping track of a collection of
 * objects and provides array like convinience methods for working with
 * manipulating these collections.
 *
 * Talk more about ObjectCollections
 *
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function ObjectCollection() {
    util.extend(this, new vegas._Collection());
  };

  ObjectCollection.prototype.removeItem = function (itemToRemove) {
    var self = this;
    this.each(function (item, i) {
      if (item.getId() === itemToRemove.getId()) {
        debugger;
        self.remove(this); // fix lower level collections.
      }
    });
  };

  global.vegas._ObjectCollection = ObjectCollection;

})(this);
