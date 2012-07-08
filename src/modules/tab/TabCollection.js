/**
 * @fileOverview Keeps track of tabs that have been created, and provides
 * methods for manipulating the tabs, this collection is made available to the
 * global vegas object via tabs.js
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function TabCollection() {
    util.extend(this, new vegas._ObjectCollection());
  };

  TabCollection.prototype.tabCollectionMethod = function () {
    console.log('tabCollectionMethod');
  };

  global.vegas._TabCollection = TabCollection;

})(this);
