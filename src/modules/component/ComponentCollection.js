/**
 * @fileOverview Keeps track of components that have been created, and provides
 * methods for manipulating the components, this collection is made available to the
 * global vegas object via components.js
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function ComponentCollection() {
    util.extend(this, new vegas._ObjectCollection());
    this._pluralizeMethods('_Component');
  };

  ComponentCollection.prototype.componentCollectionMethod = function () {
    console.log('componentCollectionMethod');
  };

  global.vegas._ComponentCollection = ComponentCollection;

})(this);
