define(function(require, exports, module) {
  "use strict";

  // Default to the settings of the flavor.
  var settings = require('flavors/default/settings');

  // Throw in the flavor into settings.
  settings.flavor = require('flavors/default/flavor');

  /** START USER SETTINGS **/

  settings.exampleSetting = 'Example Setting';

  /** END USER SETTINGS **/

  // Notate that the user settings have been read.
  settings._userSettingsRead= true;

  return settings;
});
