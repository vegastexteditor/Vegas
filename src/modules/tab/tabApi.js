define(function(require, exports, module) {

  var global = (function() {return this;})();

  // Gather up dependencies
  var ViewCollection = require('view/ViewCollection');
  var SpaceCollection = require('space/SpaceCollection');
  var RegionCollection = require('region/RegionCollection');
  var ComponentCollection = require('component/ComponentCollection');
  var TabCollection = require('tab/TabCollection');
  var View = require('view/View');
  var Space = require('space/Space');
  var Region = require('region/Region');
  var Component = require('component/Component');
  var Tab = require('tab/Tab');
  var Settings = require('Settings'); // @TODO: require settings.json instead.
  var Theme = require('theme/Theme');

  //var _tabs = null; // Scoped variable for on on demand collection instantiation
  //[>* Accesses collection of tabs <]
  //vegas.tabs = function tabs() {
    //if (!_tabs) _tabs = new TabCollection(vegas);
    //return _tabs;
  //};

  function getTab() {
    // If new operator wasn't used, get current
    if (!(this instanceof vegas.tab)) {
      return vegas.tabs().current();
    }
    var currentComponent = vegas.components().current();
    return new Tab(currentComponent);
  };

  var apiMethods = {
    getTab: getTab
  };

  return apiMethods;

});
