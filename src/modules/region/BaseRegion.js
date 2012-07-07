/**
 * @fileOverregion This file defines the BaseRegion object
 *
 * The BaseRegion object creates/ manipulates and normalizes windows
 *
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function BaseRegion(context) {

    this.context = context;

    // Use base class for utility methods
    util.extend(this, new vegas.Base());

    var regionName = 'BaseRegion';

    var view = {
      id: 'id-12093856125396',
      regionName: regionName
    };

    this.render(view);

  };

  BaseRegion.prototype.render = function (view) {
    var baseRegionContainer = vegas.tpl('baseRegionContainer', view);
    jQuery(this.context.document.body).html(baseRegionContainer);
  };

  global.vegas.BaseRegion = BaseRegion;

})(this);
