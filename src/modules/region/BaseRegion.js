/**
 * @fileOverregion This file defines the BaseRegion object
 *
 * The BaseRegion object creates/ manipulates and normalizes windows
 *
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function BaseRegion(options) {

    // extend Entity class for common methods
    util.extend(this, new vegas._Entity(this.constructor.name, options));

    // Use the passed in context
    this._useContext(this.settings('context'));

    // Add the region context
    this._setContext('region', this, true);

    // Add the object to the collection
    this.collection().add(this);

    // Render the item to the application
    this.render();

  };

  BaseRegion.prototype.Component = function (options) {
    return new vegas._Component(options);
  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  BaseRegion.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    return {
      id: this.getId(),
      entity: this.getEntityName(),
      tab: tab._getTemplateVariables()
    };
  }

  /**
   * Renders the region and inserts it into the application for display.
   */
  BaseRegion.prototype.render = function () {
    var baseRegionContainer = vegas.tpl('baseRegionContainer', this._getTemplateVariables());
    this.getView().getElement().html(baseRegionContainer);
  };

  global.vegas._BaseRegion = BaseRegion;

})(this);
