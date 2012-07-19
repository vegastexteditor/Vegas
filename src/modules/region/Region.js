define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var util = require('util');

  function Region(spaceInstance, options) {
    // extend Entity class for common methods
    util.extend(this, new Entity('Region', spaceInstance, options));

    // Add the object to the collection
    this.collection().add(this);

    // Display the region
    this.render();

    this.collection()._pluralizeMethods(this);
  }

  Region.prototype.render = function (options) {
    var spaceElement = this.getSpace().getElement();

    var regionContainer = util.tpl('regionContainer', this._getTemplateVariables());

    spaceElement.append(regionContainer);
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
