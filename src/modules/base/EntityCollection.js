define(function(require, exports, module) {
  "use strict";

  var Collection = require('base/Collection');
  var util = require('util');

  function EntityCollection() {
    util.extend(this, new Collection());
  }

  // @OTOD, right now its just the last one created.
  EntityCollection.prototype.current = function () {
    return this.last();
  };

  EntityCollection.prototype._pluralizeMethods = function (object) {
    var self = this;

    var classMethods = object;
    // Loop through class methods
    for (var classMethodName in classMethods) {
      // and find public methods only
      if (classMethodName.indexOf('_') !== 0 && typeof(classMethods[classMethodName]) == 'function') {
        (function (classMethodName) {
          // create a method that runs the class method on each instance
          self[classMethodName] = function () {
            var classMethod = classMethods[classMethodName];
            var classMethodArguments = _(arguments).toArray();
            return self._pluralMethod(classMethod, classMethodArguments);
          };
        })(classMethodName);

     }
    }
  };

  EntityCollection.prototype._pluralMethod = function (classMethod, classMethodArguments) {
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

  return EntityCollection;

});
