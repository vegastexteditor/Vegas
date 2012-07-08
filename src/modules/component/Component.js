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

    // Create a new tab for the component
    var tab = new vegas._Tab({
      // A friendly name for the tab
      title: 'tab title',
      // Lets the tab know what it belongs to
      context: this.getContext()
    });

    // Render the item to the application
    this.render();

  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  Component.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    var vars = {
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
    this.getRegion().getElement().html(componentContainer);
  };

  global.vegas._Component = Component;

})(this);

