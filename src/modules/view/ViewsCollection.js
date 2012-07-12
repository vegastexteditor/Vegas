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
    util.extend(this, new vegas._ObjectCollection());
    this._pluralizeMethods('View');
  };

  ViewsCollection.prototype.viewCollectionMethod = function () {
    console.log('viewCollectionMethod');
  };

  global.vegas._ViewsCollection = ViewsCollection;

})(this);
