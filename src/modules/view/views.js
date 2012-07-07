/**
 * @fileOverview Attaches views collection to vegas object for easy acess and
 * manipulations.
 */
(function(global) {
  "use strict";

  global.vegas = global.vegas || {};

  // Create a vegas collections object and attach it to the vegas object
  global.vegas.views = new global.vegas.ViewsCollection();

})(this);
