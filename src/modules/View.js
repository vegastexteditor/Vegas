define(function(require, exports, module) {
  "use strict";

  var Entity = require('Entity');
  var utils = require('utils');

  function View(options, vegas) {
    utils.extend(this, new Entity(this.constructor.name, options));

    // Add the object to the collection
    //this.collection().add(this);
  }

  return View;

});
