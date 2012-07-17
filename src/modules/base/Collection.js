define(function(require, exports, module) {
  "use strict";

  var util = require('util');

  /**
   * @class _Collection
   * @memberOf vegas
   * @extends vegas._Base
   * @description Acts much like an array and is used as a base class of
   * ObjectCollections
   */
  function Collection(items) {

    this.length = 0;

    if (util.isArray(items)) {
      for (var i = 0; i < items.length; i++) {
        this.add(items[i]);
      }
    }

    // For console to recognize as an array
    this.splice = Array.prototype.splice;

  }

  Collection.prototype.add = function (item) {
    if (util.isArray(item)) {
      var items = item;
      for (var i = 0; i < items.length; i++) {
        this._add(items[i]);
      }
    }
    else {
      this._add(item);
    }
  };

  Collection.prototype._add = function (item) {
    this[this.length] = item;
    this.length++;
  };

  Collection.prototype.each = function (iterator, context) {
    var obj = this;
    if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (i in obj && iterator.call(context, obj[i], i, obj) === {}) return;
      }
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty.call(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === {}) return;
        }
      }
    }
  };

  Collection.prototype.addToBegining = function (item) {
    var tmpArr = [item]; // Put the first item at the begining
    // Reposition all of the other items up one
    for (var i = 0; i < this.length; i++) {
      tmpArr[i + 1] = this[i];
      // Delete all existing items
      delete this[i];
    }

    // Apply the temporary array to the collection
    for (var i = 0; i < tmpArr.length; i++) {
      this[i] = tmpArr[i];
    }

  };

  Collection.prototype.addToEnd = function (item) {
    this.add(item);
  };

  Collection.prototype.addItemToPos = function (item, position) {
     this.splice(position, 0, item);
  };

  Collection.prototype.removeFirst = function () {
    var tmpArr = [];
    for (var i = 1; i < this.length; i++) {
      tmpArr[i - 1] = this[i];
    }

    for (var i = 0; i < tmpArr.length; i++) {
      this[i] = tmpArr[i];
    }

    this.length--;
    delete this[this.length];
  };

  Collection.prototype.removeLast = function () {
    this.length--;
    delete this[this.length];
  };

  Collection.prototype.removeFromPos = function (pos) {
    this.splice(pos, 1);
  };

  Collection.prototype.removeAll = function () {
    // Go through all of the items in the collection
    for (var i = 0; i < this.length; i++) {
      // and delete their indexed properties
      delete this[i];
    }
    // Update the collection length to zero
    this.length = 0;
  };

  Collection.prototype.forEach = Collection.prototype.each;

  return Collection;

});
