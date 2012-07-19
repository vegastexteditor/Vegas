define(function(require, exports, module) {
  "use strict";

  require('underscore');
  require('mustache');

  var util = {};

  util.extend = function (obj1, obj2) {
    return _.extend(obj1, obj2);
  };

  util.isArray = function (array) {
    return _(array).isArray();
  };

  util.info = function (message) {
    // Pretty message.
    var console = console || {info: function() {}};
    console.info(message); // See expand stacktrace for original error location.
  };

  util.error = function (message) {
    // Pretty message.
    var console = console || {error: function() {}};
    console.error(message); // See expand stacktrace for original error location.
    throw message; // Stop execution
  };

  util.debug = function (message) {
    var console = console || {trace: function() {}};
    console.trace();
    throw message;
  };

  util.log = function (message) {
    var console = console || {log: function() {}};
    console.log(message);
  };

  util.generateId = function () {

    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
      uuid = new Array(36),
      rnd = 0,
      r;

    for (var i = 0; i < 36; i++) {

      if (i == 8 || i == 13 || i== 18 || i == 23) {
        uuid[i] = '_';
      }
      else if (i == 14) {
        uuid[i] = '4';
      }
      else {
        if (rnd <= 0x02) {
          rnd = 0x2000000 + (Math.random()*0x1000000)|0;
        }
        r = rnd & 0xf;
        rnd = rnd >> 4;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
    return uuid.join('');
  };

  util.pluralize = function(string, count) {
    if (count == 1) {
      return string;
    }
    else {
      return string + 's';
    }
  };

  util.capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  util.tpl = function (templateName, templateData) {
    vegas.templates = vegas.templates || {};
    var template = vegas.templates[templateName] || {};

    if (templateName in vegas.templates) {
      return Mustache.render(template, templateData);
    }
    else {
      util.error('Could not find template: ' + templateName);
      return false;
    }

  };

  return util;
});
