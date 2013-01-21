define(function(require, exports, module) {

  var global = (function() {return this;})();

  // Gather up dependencies
  var ViewCollection  = require('view/ViewCollection');
  var SpaceCollection  = require('space/SpaceCollection');
  var RegionCollection  = require('region/RegionCollection');
  var ComponentCollection = require('component/ComponentCollection');
  var TabCollection = require('tab/TabCollection');
  var View = require('view/View');
  var Space = require('space/Space');
  var Region = require('region/Region');
  var Component = require('component/Component');
  var Tab = require('tab/Tab');
  var Settings = require('Settings'); // @TODO: require settings.json instead.
  var Theme = require('theme/Theme');
  var tabApi = require('tab/tabApi');

  // Provide the application object
  global.vegas = {};

  for (var apiMethod in tabApi) {
    vegas[apiMethod] = tabApi[apiMethod];
  }

  // Create a new settings object for use by the application
  var settings = new Settings();

  /** Public Properties */
  vegas.settings = settings;

  vegas.theme = new Theme(settings.theme);

  vegas._context = {vegas: vegas}; // FUCK YEA>.

  var _views; // Scoped variable for on on demand collection instantiation
  /** Accesses collection of views */
  vegas.views = function views() {
    if (!_views) _views = new ViewCollection(vegas);
    return _views;
  };

  var _spaces; // Scoped variable for on on demand collection instantiation
  /** Accesses collection of spaces */
  vegas.spaces = function spaces() {
    if (!_spaces) _spaces = new SpaceCollection(vegas);
    return _spaces;
  };

  var _regions = null; // Scoped variable for on on demand collection instantiation
  /** Accesses collection of regions */
  vegas.regions = function regions() {
    if (!_regions) _regions = new RegionCollection(vegas);
    return _regions;
  };

  var _components = null; // Scoped variable for on on demand collection instantiation
  /** Accesses collection of components */
  vegas.components = function components() {
    if (!_components) _components = new ComponentCollection(vegas);
    return _components;
  };

  var _tabs = null; // Scoped variable for on on demand collection instantiation
  /** Accesses collection of tabs */
  vegas.tabs = function tabs() {
    if (!_tabs) _tabs = new TabCollection(vegas);
    return _tabs;
  };

  vegas.view = function () {
    // If new operator wasn't used, get current
    if (!(this instanceof vegas.view)) {
      return vegas.views().current();
    }
    return new View(vegas);
  };

  vegas.space = function () {
    // If new operator wasn't used, get current
    if (!(this instanceof vegas.space)) {
      return vegas.spaces().current();
    }
    var currentView = vegas.views().current();
    return new Space(currentView);
  };

  vegas.region = function () {
    // If new operator wasn't used, get current
    if (!(this instanceof vegas.region)) {
      return vegas.regions().current();
    }
    var currentSpace = vegas.spaces().current();
    return new RegionPair(currentSpace);
  };

  vegas.component = function () {
    // If new operator wasn't used, get current
    if (!(this instanceof vegas.component)) {
      return vegas.components().current();
    }
    var currentRegion = vegas.regions().current();
    return new Component(currentRegion);
  };

  vegas.tab = function () {
    // If new operator wasn't used, get current
    if (!(this instanceof vegas.tab)) {
      return vegas.tabs().current();
    }
    var currentComponent = vegas.components().current();
    return new Tab(currentComponent);
  };

  vegas.theme.on('ready', function () {

    /** Create a new view */
    var initialView = new View(vegas);
    var initialSpace = new Space(initialView);
    var initialRegion = new Region(initialSpace);
    var initialComponent = new Component(initialRegion);
  });

  return global.vegas;

});
