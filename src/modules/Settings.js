define(function(require, exports, module) {
  "use strict";

  // @TODO: Use /src/settings.json instead
  var userSettings = require('settings');
  var util = require('util');

  function Settings() {
    // Note that the user settings haven't been read in yet
    this._userSettingsRead = false;
    // Note that the flavor settings haven't been read in yet
    this._flavorSettingsRead = false;

    // Mixin settings specified by the user, the user settings should bring in
    // the flavor settings.
    util.extend(this, userSettings);
  }

  return Settings;

});

