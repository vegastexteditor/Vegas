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

  function View(context) {

    var self = this;

    // Use base class for utility methods
    util.extend(this, new vegas.Base());

    // Object settings
    this.settings = {};
    // Whether or not to use the primary window for this view.
    this.settings.useBaseWindow = false;

    // If first param is false, do not open a window, use the original vegas
    // window to create the view. This is typical for the first view.
    if (context === false) {
      this.settings.useBaseWindow = true;
    }

    // The window context the view should operate in
    this.context = context || window;

    // Name the current window
    this.name = 'New Window ' +  this.collection().length;

    // When the view window has loaded.
    this.on('load', function () {
      self.viewOpen = true;
      // Set the title of the window
      self.setTitle(self.name);
      // Insert a region in the window.
      new vegas.BaseRegion(self.context);
    });

    // Determine if we should use the base window
    var shouldUseBaseWindow = this.shouldUseBaseWindow();

    // If we shouldn't use the base window
    if (!shouldUseBaseWindow) {
      // and the new view isn't already open
      if (!this.viewOpen) {
        // then open the new window.
        this.open();
      }
    }
    else {
      // We are using a window thats already open, so its ready.
      this.trigger('load');
    }

    // Add the object to the collection
    this.collection().add(this);


  };

  View.prototype.shouldUseBaseWindow = function () {

    if (this.settings.useBaseWindow) {
      return true;
    }

    return (this.collection().length > 0);
  };

  /**
   * The collection the object belongs to.
   */
  View.prototype.collection = function () {
    return vegas.views;
  };

  // Checks to see if the window is the primary window
  View.prototype.isRootView= function () {
    return (vegas.views.length <= 1);
  };

  // Checks to see if the window is the primary window
  View.prototype.isPrimary = function () {
    return (this.context === window);
  };

  // Opens the view window
  View.prototype.open = function () {
    var options = 'width=200,height=100'
    this.context = window.open('view.html?' + Math.random(0,9), this.name, options);
  };

  View.prototype.trigger = function (event) {
    this._on = this._on || {};

    if (!this._on[event]) {
      this._on[event] = [];
    }

    this._on[event].forEach(function (hook) {
      hook.call(this, this);
    });
  };

  View.prototype.on = function (event, callback) {
    this._on = this._on || {};
    if (!this._on[event]) {
      this._on[event] = [];
    }
    this._on[event].push(callback);
  };

  View.prototype.setTitle = function (title) {
    this.context.document.title = title;
  };

  // Closes the view window
  View.prototype.close = function () {
    this._viewOpen = false;
    this.context.close();
    vegas.views.remove(this);

    var self = this;
    var context = this.context;
    var name = this.name;
    setTimeout(function () {
      console.log(context.closed, name);
    }, 500);

  };

  global.vegas.View = View;

})(this);
