define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var Tab = require('tab/Tab');
  var util = require('util');

  function Component(regionInstance, options) {
    // extend Entity class for common methods
    util.extend(this, new Entity('Component', regionInstance, options));

    // Add the object to the collection
    this.collection().add(this);

    // Display the component
    this.render();

    var tabInstance = new Tab(this);

    // Create a correlating tab.
    this._setContext('tab', tabInstance);

    //this.setTitle();

    //this.collection()._pluralizeMethods(this);
  }

  Component.prototype.setTitle = function (title) {
    //this.getTab().setTitle(title);
  }

  Component.prototype.getTitle = function () {
    return this.getTab().getTitle();
  }

  Component.prototype.render = function (options) {
    var regionElement = this.getRegion().getElement();

    var componentArea = regionElement.find('.components');

    // hide currently displayed components.
    componentArea.find('.component').hide();

    var componentContainer = util.tpl('componentContainer', this._getTemplateVariables());

    componentArea.append(componentContainer);
  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  Component.prototype._getTemplateVariables = function () {
    var self = this;
    // Gather up variables for the template
    var vars = {
      id: self.getId(),
      entity: self.getEntityName(),
      title: 'component: ' + self.collection().length
    };

    return vars;
  };


  return Component;

});
