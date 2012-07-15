define(function(require, exports, module) {
  "use strict";

  var flavor = require('flavors/default/flavor');

  // Use flavor settings as a base
  var settings = flavor.settings;

  // remove settings from the flavor since we are using it already as our base
  // settings
  delete flavor.settings;

  // Put the flavor definition in our settings
  settings.flavor = flavor;

  settings._settingsProccessed = true;

  return settings;

});


