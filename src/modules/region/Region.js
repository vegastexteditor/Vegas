/**
 * @fileOverregion This file defines the Region object
 *
 * The Region object creates/ manipulates and normalizes windows
 *
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function Region(options) {

    // extend Entity class for common methods
    util.extend(this, new vegas._Entity(this.constructor.name, options));

    // Merge in default settings with provided options into the objects settings
    this.useSettings({
      context: false,
      regionSetting1: 'regionSetting1Value'
    }, options);

    // Add the object to the collection
    this.collection().add(this);

    // Add region to the view's region collection
    this.getView().regions().add(this);

    // Render the item to the application
    this.render();

  };

  Region.prototype.tabs = function () {
    if (!this._tabs) {
      this._tabs= new global.vegas._TabCollection();
    }
    return this._tabs;
  };

  Region.prototype.components = function () {
    if (!this._components) {
      this._components = new global.vegas._ComponentCollection();
    }
    return this._components;
  };

  Region.prototype.createComponent = function (options) {
    options = options || {};
    options.context = this.getContext();
    return new vegas._Component(options);
  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  Region.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    return {
      id: this.getId(),
      entity: this.getEntityName(),
      //tab: this.getCollection('tabs')._getTemplateVariables()
    };
  };

  /**
   * Renders the region and inserts it into the application for display.
   */
  Region.prototype.render = function () {
    var regionContainer = vegas.tpl('regionContainer', this._getTemplateVariables());
    this.getView().getElement().html(regionContainer);
  };

  global.vegas._Region = Region;

})(this);
