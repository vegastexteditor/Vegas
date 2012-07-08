/**
 * @fileOverregion This file defines the templates object
 *
 * The templates object creates/ manipulates and normalizes windows
 *
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  var tpl = function (templateName, templateData) {
    var template = vegas.templates[templateName];

    if (templateName in vegas.templates) {
      return Mustache.render(template, templateData);
    }
    else {
      util.error('Could not find template: ' + templateName);
      return false;
    }

  };

  global.vegas.tpl = tpl;

})(this);
