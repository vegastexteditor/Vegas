define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var Space = require('space/Space');
  var util = require('util');
  var $ = require('jquery');

  function View(vegasObject, options) {
    // extend Entity class for common methods
    util.extend(this, new Entity('View', vegasObject, options));

    // Merge in default settings with provided options into the objects settings
    this.useSettings({
      // Whether or not to use the window the script is running in.
      useBaseWindow: false,
     // Changed if / when the window is opened, otherwise use primary window
      //windowContext: window // (function(){return this;}())
    }, options);

    // If first param is false, do not open a window, use the original vegas
    // window to create the view. This is typical for the first view.
    //this.settings('useBaseWindow', true);

    // Let the view know about its context.
    this._setViewContext();

    // Give the view a name, to be used on the window.
    this.name = this.getId();

    // If we shouldn't use the base window
    if (this.collection().length > 0) {
      // then open the new window.
      var win = this._openWindow();

      // and set the context to the opened window
      this._setContext('window', win);
    }
    else {
      // We are using a window thats already open, so its ready.
      this.trigger('load');

      // Set the window context to the base window.
      this._setContext('window', window);

      // Notate that we are using the base window
      util.info('Using current window for view');
    }

    this._setContext('document', this.getContext('window').document);

    var win = this.getContext('window');
    var self = this;

    jQuery(win).bind('focus', function () {
      var views = self.collection();
      var view = views.getFromWindow(win);
      if (view) {
        view.setCurrent();
      }
    });

    var self = this;
    // When the view window has loaded.
    this.on('load', function () {
      util.info('View loaded');

      // Render the window
      self.render();

      //// Insert a region into the view
      //var region = self.createRegion({
        //regionSetting1: 'regionSetting1Value'
      //});

      //// Insert a component into the region
      //var component = region.createComponent({
        //title: 'title1'
      //});

      //// Insert a component into the region
      //var component = region.createComponent({
        //title: 'title2'
      //});

    });

    // Add the object to the collection
    this.collection().add(this);

    //this.collection()._pluralizeMethods(this);
  }

  // Opens the view window
  View.prototype._openWindow = function () {
    var win = this.getWindow();
    var options = 'width=200,height=100';
    var _win = win.open('view.html?' + Math.random(0,9), this.name, options);
    // Let the view know about the new window reference
    return _win;
  };

  // Closes the view window
  View.prototype.close = function () {
    var self = this;

    var win = this.getWindow();
    win.close();

    var vegas = this.getContext('vegas');

    // Remove the view elements
    vegas.views().each(function (view) {
      view.getElement().remove();
    });

    // Remove the view instances from the collection object.
    //vegas.views().removeAll();

    this.remove();

  };

  View.prototype.setTitle = function (title) {
    this._title = title || 'New Window ' +  this.collection().length;
    this.getDocument().title = this._title;
  };

  View.prototype.getTitle = function () {
    return this._title;
  };

  View.prototype.render = function (options) {
    // Set the title of the window
    this.setTitle();

    var body = $(this.getDocument().body);

    var viewContainer = util.tpl('viewContainer', this._getTemplateVariables());

    body.html(viewContainer);
  };

  View.prototype._setViewContext = function () {

    // Add the view context
    this._setContext('view', this, true);

    // Let the view know about its window
    //this._setContext('window', this.settings('windowContext'));

    // Let the view know about its document
    //this._setContext('document', this.settings('windowContext').document);

  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  View.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    var vars = {
      id: this.getId(),
      entity: this.getEntityName()
    };

    return vars;
  };

  return View;

});
