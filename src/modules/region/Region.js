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

    // Render the item to the application
    this.render();

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
  Region.prototype.getTemplateVariables = function () {
    // Gather up variables for the template
    return {
      id: this.getId(),
      entity: this.getEntityName(),
      //tab: this.getCollection('tabs').getTemplateVariables()
    };
  };

  /**
   * Renders the region and inserts it into the application for display.
   */
  Region.prototype.render = function () {
    var regionContainer = vegas.tpl('regionContainer', this.getTemplateVariables());
    this.getView().getElement().html(regionContainer);
  };

  global.vegas._Region = Region;

})(this);
