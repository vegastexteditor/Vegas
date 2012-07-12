/**
 * @fileOverview Defines a generic object for keeping track of a collection of
 * objects and provides array like convinience methods for working with
 * manipulating these collections.
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {}, // Get the application object
    util = vegas.util; // utility methods

  /**
   * @class ObjectCollection
   * @memberOf vegas
   * @extends vegas._Collection
   * @description A generic array like object that is used for keeping track of
   * a collection of objects, provides utility methods working with the
   * collections.
   */
  function ObjectCollection() {
    util.extend(this, new vegas._Collection());
  };

  ObjectCollection.prototype._pluralizeMethods = function (className) {
    var self = this;

    var tabClassMethods = vegas[className].prototype;
    // Loop through class methods
    for (var classMethodName in tabClassMethods) {
      // and find public methods only
      if (classMethodName.indexOf('_') !== 0) {

        (function (classMethodName) {
          // create a method that runs the class method on each instance
          self[classMethodName] = function () {
            var classMethod = tabClassMethods[classMethodName];
            var classMethodArguments = _(arguments).toArray();
            return self._pluralMethod(classMethod, classMethodArguments);
          };
        })(classMethodName);

     }
    }
  };

  ObjectCollection.prototype._pluralMethod = function (classMethod, classMethodArguments) {
    var self = this;
    // Safely iterate over the collection
    var len = self.length;
    var adjustedLen = 0; // The amount of change from the original length
    var results = [];
    for (var i = 0; i < len; i++) {
      adjustedLen = len - self.length; // observe any changes in length
      results.push(classMethod.apply(self[i - adjustedLen], classMethodArguments));
    }
    return results;
  };

  ObjectCollection.prototype.removeItem = function (itemToRemove) {
    var self = this;
    this.each(function (item, i) {
      if (item.getId() === itemToRemove.getId()) {
        self.remove(itemToRemove); // fix lower level collections.
      }
    });
  };

  global.vegas._ObjectCollection = ObjectCollection;

})(this);
