/**
 * @fileOverTab This file defines the Tab object
 *
 * The Tab object creates/ manipulates and normalizes windows
 *
 */
(function(global) {
  "use strict";

  var vegas = global.vegas || {},
    util = vegas.util;

  function Tab(options) {

    // extend Entity class for common methods
    util.extend(this, new vegas._Entity(this.constructor.name, options));

    // Merge in default settings with provided options into the objects settings
    this.useSettings({
      tabSetting1: 'tabSetting1Value'
    }, options);

    // Use the passed in context
    this._useContext(this.settings('context'));

    // Add the tab context
    this._setContext('tab', this, true);

    // Add the object to the collection
    this.collection().add(this);

    // Render the item to the application
    this.render();

  };

  /**
   * Gets the required variables in order to render the tab into the
   * application.
   */
  Tab.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    var vars = {
      id: this.getId(),
      entity: this.getEntityName()
    };

    return vars;
  };

  /**
   * Renders the tab and inserts it into the application for display.
   */
  Tab.prototype.render = function () {
    var tabContainer = vegas.tpl('tabContainer', this._getTemplateVariables());
    this.getComponent().getElement().html(tabContainer);
  };

  global.vegas._Tab = Tab;

})(this);
