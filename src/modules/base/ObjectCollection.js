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
    util.extend(this, new vegas.Collection());
  };

  ObjectCollection.prototype.hi = function () {
    console.log('hi');
  };

  global.vegas.ObjectCollection = ObjectCollection;

})(this);
