/**
 * @fileOverview Keeps track of views that have been created, and provides
 * methods for manipulating the views, this collection is made available to the
 * global vegas object via views.js
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function ViewsCollection() {
    util.extend(this, new vegas.ObjectCollection());
  };

  ViewsCollection.prototype.close = function () {
    for (var i = 0; i < this.length; i++) {
      this[i].close();
      // update the length because its changing as we remove items from the
      // collection, otherwise it will seem weird and delete odd numbers and
      // stuff
      i--;
    }
  };

  global.vegas.ViewsCollection = ViewsCollection;

})(this);
