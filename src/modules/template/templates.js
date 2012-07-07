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
    var result = Mustache.render(template, templateData);
    return result;
  };

  global.vegas.tpl = tpl;

})(this);
