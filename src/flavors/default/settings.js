define(function(require, exports, module) {
  "use strict";

  var settings = {};

  // When starting up vegas, say hello in the log
  settings.logHello = true;

  // notate that the flavor settings have been merged in
  settings._flavorSettingsRead =  true;

  return settings;

});
