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

    // A place to Keep track of the components tabs
    this.tabs = new global.vegas._TabCollection();

    // Add the object to the collection
    this.collection().add(this);

    // Render the item to the application
    this.render();

    // Add component to the region's component collection
    this._getRegion().components().add(this);

/*
    // Add component to the view's component collection
    this.getView().components().add(this);
*/

    // Create a new tab for the component
    this._tab = new vegas._Tab({
      // A friendly name for the tab
      title: this.getTitle(),

      // Lets the tab know what it belongs to
      context: this.getContext()
    });

  };

  Component.prototype._getRegion = function () {
    var regionId = this.getContext().region.getId();
    var foundRegion = false;
    vegas.regions.each(function (region) {
        if (region.getId() == regionId) {
          foundRegion = region;
        }
    });
    return foundRegion;
  };

  Component.prototype.getTab = function () {
    return this._tab;
  };

  Component.prototype.setTitle = function (title) {
    this._title = title;
    this.tab.setTitle(title);
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

