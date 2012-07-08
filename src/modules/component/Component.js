/**
 * @fileOvercomponent This file defines the Component object
 *
 * The Component object creates/ manipulates and normalizes windows
 *
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function Component(options) {

    // extend Entity class for common methods
    util.extend(this, new vegas._Entity(this.constructor.name, options));

    // Merge in default settings with provided options into the objects settings
    this.useSettings({
      componentSetting1: 'componentSetting1Value'
    }, options);

    // Render the item to the application
    this.render();

    // Create a new tab for the component
    var tab = new vegas._Tab({
      // A friendly name for the tab
      title: this.getTitle(),
      // Lets the tab know what it belongs to
      context: this.getContext()
    });

  };

  Component.prototype.setTitle = function (title) {
    this._title = title;
  };

  Component.prototype.getTitle = function () {
    return this._title || this.settings('title');
  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  Component.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    var vars = {
      title: this.getTitle(),
      id: this.getId(),
      entity: this.getEntityName(),
      //tab: tab._getTemplateVariables()
    };

    return vars;
  }

  /**
   * Renders the component and inserts it into the application for display.
   */
  Component.prototype.render = function () {
    var componentContainer = vegas.tpl('componentContainer', this._getTemplateVariables());
    this.getRegion().getElement().find('.components').html(componentContainer);
  };

  global.vegas._Component = Component;

})(this);

