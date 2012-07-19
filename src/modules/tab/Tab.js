define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var util = require('util');

  function Tab(componentInstance, options) {
    // extend Entity class for common methods
    util.extend(this, new Entity('Tab', componentInstance, options));

    // Add the object to the collection
    this.collection().add(this);

    // Display the tab
    this.render();

    this.setTitle();

    this.collection()._pluralizeMethods(this);

  }

  Tab.prototype.setTitle = function (title) {

    title = title || 'tab ' + vegas.tabs().length;

    if (this._rendered) {
      var titleElement = this.getElement().find('.title');
      titleElement.html(title);
    }
    else {
      this._setTemplateVariable('title', title);
    }
    this._title = title;
  };

  Tab.prototype.getTitle = function () {
    return this._title;
  };

  Tab.prototype.render = function (options) {
    var regionElement = this.getRegion().getElement();

    var tabArea = regionElement.find('.tabs');

    var tabContainer = util.tpl('tabContainer', this._getTemplateVariables());

    tabArea.append(tabContainer);

    this._rendered = true;
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

    return vars;
  };



  return Tab;

});
