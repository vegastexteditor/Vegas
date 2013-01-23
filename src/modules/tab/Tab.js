define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var util = require('util');

  function Tab(componentInstance, options) {
    // extend Entity class for common methods
    util.extend(this, new Entity('Tab', componentInstance, options));

    // Add the object to the collection
    this.collection().add(this);

    this.getRegion2().tabs().add(this);

    // Display the tab
    this.render();

    //this.collection()._pluralizeMethods(this);

    //console.log('triggering new', vegas.tabs().trigger);
    vegas.tabs().trigger('new');

  }

  Tab.prototype.getTitle = function () {
    if (!this._title) {
      this._setTitle('tab ' + vegas.tabs().length);
    }
    return this._title;
  };

  Tab.prototype._setTitle = function (title) {
    this._title = title;
    this._setTemplateVariable('title', title);
  };

  Tab.prototype.setTitle = function (title) {
    this._setTitle(title);
    this.render();
  };

  Tab.prototype.render = function (options) {
    var regionElement = this.getRegion().getElement();

    var tabArea = regionElement.find('.tabs');
    var tabContainer = util.tpl('tabContainer', this._getTemplateVariables());

    tabContainer = jQuery(tabContainer);

    if (this.getElement().length) {
      this.getElement().replaceWith(tabContainer);
    }
    else {
      tabArea.append(tabContainer);
    }

  };

  Tab.prototype._setTemplateVariable = function (key, value) {
    this._templateVars = this._templateVars || {};
    this._templateVars[key] = value;
  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  Tab.prototype._getTemplateVariables = function () {

    var vars = this._templateVars || {};

    // Gather up variables for the template
    vars.id = this.getId();
    vars.entity = this.getEntityName();
    vars.title = this.getTitle();

    return vars;
  };

  Tab.prototype.close = function () {
    this.getElement().remove()
    this.remove();
  };


  return Tab;

});
