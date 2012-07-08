/**
 * @fileOverview This file defines the View object
 *
 * The View object creates/ manipulates and normalizes windows
 *
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function View(options) {

    var self = this;

    // extend Entity class for common methods
    util.extend(this, new vegas._Entity(this.constructor.name, options));

    // Merge in default settings with provided options into the objects settings
    this.useSettings({
      useBaseWindow: false,
      windowContext: window
    }, options);

    // If first param is false, do not open a window, use the original vegas
    // window to create the view. This is typical for the first view.
    this.settings('useBaseWindow', true);

    // Let the view know about its context.
    this.setViewContext();

    // If we shouldn't use the base window
    if (!this.settings('useBaseWindow')) {
      // then open the new window.
      this._openWindow();
    }
    else {
      // We are using a window thats already open, so its ready.
      this.trigger('load');
      console.info('Using current window for view');
    }

    // When the view window has loaded.
    this.on('load', function () {
      console.info('View loaded');

      // Render the window
      self.render();

      // Insert a region into the view
      var region = self.createRegion({
        regionSetting1: 'regionSetting1Value'
      });

      // Insert a component into the region
      var component = region.createComponent();

    });

    // Add the object to the collection
    this.collection().add(this);

  };

  View.prototype.createRegion = function (options) {
      options = options || {};
      options.context = this.getContext();
      return new vegas._Region(options);
  };

  View.prototype.setViewContext = function () {

    // Add the view context
    this._setContext('view', this, true);

    // Let the view know about its window
    this._setContext('window', this.settings('windowContext'));

    // Let the view know about its document
    this._setContext('document', this.settings('windowContext').document);

  };

  View.prototype.render = function (options) {
    // Set the title of the window
    this.setTitle();

    var body = jQuery(this.getDocument().body);

    var viewContainer = vegas.tpl('viewContainer', this._getTemplateVariables());

    body.html(viewContainer);
  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  View.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    var vars = {
      id: this.getId(),
      entity: this.getEntityName(),
      //tab: tab._getTemplateVariables()
    };

    return vars;
  }


  // Opens the view window
  View.prototype._openWindow = function () {
    var options = 'width=200,height=100'
    var win = window.open('view.html?' + Math.random(0,9), this.name, options);
    // Let the view know about the new window reference
    this._setContext('window', win);
  };

  View.prototype.setTitle = function (title) {
    title = title || 'New Window ' +  this.collection().length;
    this.getDocument().title = title;
  };

  // Closes the view window
  View.prototype.close = function () {
    this.getWindow().close();
    vegas.views.remove(this);

    var self = this;
    setTimeout(function () {
      console.log(self);
    }, 500);

  };

  global.vegas.View = View;

})(this);
