/**
 * @fileOverview Attaches components collection to vegas object for easy acess and
 * manipulations.
 */
(function(global) {
  "use strict";

  global.vegas = global.vegas || {};

  // Create a vegas collections object and attach it to the vegas object
  global.vegas.components = new global.vegas._ComponentCollection();

})(this);
