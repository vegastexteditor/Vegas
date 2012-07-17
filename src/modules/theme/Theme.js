define(function(require, exports, module) {

  require('LAB');
  require('less');

  var LAB = $LAB;

  LAB.setGlobalDefaults({
    ErrorHandler: function(err){
        throw err;
    },
    UseLocalXHR: false,
    CacheBust: true,
    AlwaysPreserveOrder: true
  });

  function Theme(themeName) {

    var self = this;

    this.setName(themeName);

    this.fetchTheme(function (theme) {
      self.fetchTemplates(theme.templates, function (templates) {
        self.trigger('ready');
      });
      self.fetchStyles(theme.styles, function () {

      });
    });

  }

  Theme.prototype.fetchStyles = function (styles) {

    var i = 0;
    styles.forEach(function (style) {
      i++;
      var link = document.createElement('link');
      link.rel = 'stylesheet/less';
      link.href = style;
      link.id = 'stylesheet' + i;
      jQuery('head').append(link);
      less.sheets.push(document.getElementById(link.id));
    });

    less.refresh(true);

  };

  Theme.prototype.fetchTemplates = function (templates, callback) {

    var themeName = this.getName();
    var templatesLoaded = 0;

    var templateFile;
    for (var i = 0; i < templates.length; i++) {

      var templateName = templates[i];

      (function (templateName) {

        var time = (+new Date());

        templateFile = 'themes/' + themeName + '/templates/' + templateName + '.html?' + time;

         jQuery.ajax({
           url: templateFile,
           dataType: "html",
           success: function(template){
             vegas.templates = vegas.templates || {};
             vegas.templates[templateName] = template;
             templatesLoaded++;
             if (templatesLoaded == templates.length) {
               callback.call(vegas, vegas.templates);
             }
           }
        });

      })(templateName);

    }

  };

  Theme.prototype.fetchTheme = function (themeName, callback) {

    if (typeof(themeName) == 'function') {
      callback = themeName;
      themeName = false;
    }

    themeName = themeName || this.getName();

    var themeFile = this.getFileFromName(themeName);

    LAB.script(themeFile).wait(function () {
      if (vegas.themes && vegas.themes[themeName]) {
        callback.call(this, vegas.themes[themeName]);
      }
      else {
        util.error('Could not process theme file');
      }
    });

  };

  Theme.prototype.getName = function () {
    return this._themeName;
  };

  Theme.prototype.setName = function (themeName) {
    this._themeName = themeName;
  };

  Theme.prototype.getFileFromName = function (themeName) {
    var themeFile = 'themes/' + themeName + '/theme.js';
    return themeFile;
  };

  Theme.prototype.trigger = function (event) {
    this._on = this._on || {};

    if (!this._on[event]) {
      this._on[event] = [];
    }

    this._on[event].forEach(function (hook) {
      hook.call(this, this);
    });
  };

  Theme.prototype.on = function (event, callback) {
    this._on = this._on || {};

    if (!this._on[event]) {
      this._on[event] = [];
      this._on[event].push(callback);
    }
    else {
      this._on[event].push(callback);
      this.trigger(event);
    }

  };

  return Theme;

});
