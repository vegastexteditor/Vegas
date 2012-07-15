define(function(require, exports, module) {
  "use strict";

  // @TODO: use /src/settings.json instead.
  var userSettings = require('settings');
  var utils = require('utils');

  function Settings() {
    this._userSettingsRead = false;
    this._flavorSettingsRead = false;
    // Mixin settings specified by the user
    utils.extend(this, userSettings);
  }

  return Settings;

});


