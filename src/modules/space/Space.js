define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var util = require('util');

  function Space(viewInstance, options) {
    // extend Entity class for common methods
    util.extend(this, new Entity('Space', viewInstance, options));

    this.useContextFrom(viewInstance);

    // display the space
    this.render();

    // Add the object to the collection
    this.collection().add(this);

    this.collection()._pluralizeMethods(this);
  }

  Space.prototype.render = function (options) {
    var viewElement = this.getView().getElement();

    var spaceContainer = util.tpl('spaceContainer', this._getTemplateVariables());

    viewElement.append(spaceContainer);
  };

  /**
   * Gets the required variables in order to render the component into the
   * application.
   */
  Space.prototype._getTemplateVariables = function () {
    // Gather up variables for the template
    var vars = {
      id: this.getId(),
      entity: this.getEntityName()
    };

    return vars;
  };

  return Space;

});
