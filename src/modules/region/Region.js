/**
 * @fileOverregion This file defines the Region object
 *
 * The Region object creates/ manipulates and normalizes windows
 *
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function Region(context) {

    // Use base class for utility methods
    util.extend(this, new vegas.Base());

    this.name = 'Region ' +  this.collection().length;

    // Add the object to the collection
    this.collection().add(this);

  };

  /**
   * The collection the object belongs to.
   */
  Region.prototype.collection = function () {
    return vegas.regions;
  };

  global.vegas.Region = Region;

})(this);
