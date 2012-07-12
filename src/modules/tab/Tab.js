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

  Tab.prototype.getComponent = function () {
    return this._component;
  };

  Tab.prototype.setTitle = function (title) {
    this.settings('title', title);
    this.getElement().find('.title').html(title);
  },

  Tab.prototype.getTitle = function () {
    return this.settings('title');
  };

  /**
   * Gets the required variables in order to render the tab into the
   * application.
   */
  Tab.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    var vars = {
      title: this.settings('title') + this.getId(),
      id: this.getId(),
      entity: this.getEntityName()
    };

    return vars;
  };

  Tab.prototype.close = function () {
    this.collection().removeItem(this);
    this.getElement().remove();
  };

  Tab.prototype._attachEvents = function () {

    var self = this;

    this.getRegion().getElement().bind('click', function (e) {
      if (e.target.className === "close") {
        var tab = self.getObjectFromElement((self.getFromAnElement(e.target)));
        if (tab) {
          self.trigger('beforeClose');
          tab.close();
          self.trigger('close');
        }
        else {
          console.error('could not get tab object from click');
        }
      }
    });

    this.collection()._attachedEvents = true;
  };

  /**
   * Renders the tab and inserts it into the application for display.
   */
  Tab.prototype.render = function () {
    var tabContainer = vegas.tpl('tabContainer', this._getTemplateVariables());
    this.getRegion().getElement().find('.tabs').append(tabContainer);
    if (!this.collection()._attachedEvents) {
      this._attachEvents();
    }
  };

  global.vegas._Tab = Tab;

})(this);
