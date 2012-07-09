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
    this._pluralizeMethods('_Tab');
  };

  TabCollection.prototype._pluralizeMethods = function (className) {
    var self = this;
    var tabClassMethods = vegas[className].prototype;
    // Loop through class methods
    for (var classMethodName in tabClassMethods) {
      // and find public methods only
      if (classMethodName.indexOf('_') !== 0) {

        (function (classMethodName) {

          // create a method that runs the class method on each instance.
          self[classMethodName] = function () {
            self.each(function (tab) {
              tabClassMethods[classMethodName].call(tab);
            });
          };

        })(classMethodName);

     }
    }
  };

  TabCollection.prototype.tabCollectionMethod = function () {
    console.log('tabCollectionMethod');
  };

  global.vegas._TabCollection = TabCollection;

})(this);
