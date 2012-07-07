/**
 * @fileOverview Talk about util
 *
 * Talk more about util 
 *
 */
(function(global) {
  "use strict";

  global.vegas = global.vegas || {};

  var util = {};

  util.example = function () {

  };

  util.extend = function (obj1, obj2) {
    return _.extend(obj1, obj2);
  };

  util.ObjectCollection = function () {
    util.extend(this, new Array());
  };

  util.ObjectCollection.prototype.hi = function () {
    console.log('hi');
  };

  global.vegas.util = util;

})(this);
