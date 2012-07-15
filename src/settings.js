define(function(require, exports, module) {
  "use strict";

  var settings = require('flavors/default/settings');
  settings.flavor = require('flavors/default/flavor');
  settings._userSettingsRead= true;

  settings.exampleSetting = 'Example Setting';

  return settings;

});
