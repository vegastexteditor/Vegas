define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var TabCollection = require('tab/TabCollection');
  var util = require('util');

  function Region(spaceInstance, options) {
    // extend Entity class for common methods
    util.extend(this, new Entity('Region', spaceInstance, options));

    if (this.collection().length > 1 && (options.allowPair && this.collection().length > 2)) {
      var baseRegion = this.collection().first();
      new RegionPair(baseRegion);
      return true;
    }

    // Add the object to the collection
    this.collection().add(this);

    // Display the region
    this.render(options);

    vegas.tabs().on('new', function () {
      console.log('new tab created');

    });

  }

  var _tabs;
  Region.prototype.tabs = function () {
    if (!_tabs) {
      _tabs = new TabCollection(vegas);
    }
    return _tabs;
  };

  Region.prototype.width = function (value) {
    this.getElement().width(value)
  }

  Region.prototype.render = function (options) {
    var spaceElement = this.getSpace().getElement();

    var regionContainer = util.tpl('regionContainer', this._getTemplateVariables());

    if (this.getElement().length) {
      this.getElement().replaceWith(regionContainer);
    }
    else {
      spaceElement.append(regionContainer);
    }

    this.tabs().forEach(function (tab) {
      console.log('rendering tab', tab);
      tab.render();
    });

  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  Region.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    var vars = {
      id: this.getId(),
      entity: this.getEntityName()
    };

    return vars;
  };


  return Region;

});
