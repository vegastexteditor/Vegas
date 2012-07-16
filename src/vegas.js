define(function(require, exports, module) {

  var global = (function() {return this;})();

  // Gather up dependencies
  var ViewCollection  = require('view/ViewCollection');
  var RegionCollection  = require('region/RegionCollection');
  var ComponentCollection = require('component/ComponentCollection');
  var TabCollection = require('tab/TabCollection');
  var View = require('view/View');
  var Settings = require('Settings'); // @TODO: require settings.json instead.

  // Provide the application object
  global.vegas = {};

  // Create a new settings object for use by the application
  var settings = new Settings();

  /** Public Properties */
  vegas.settings = settings;


  /** Public Methods */

  // Gather up the current context object for collection methods below.
  var _context = {vegas: vegas};

  vegas.View = function ViewCreator(options) {
    options = options || {};
    options.context = _context;
    return new View(options);
  };

  var _views; // Scoped variable for on on demand collection instantiation
  /** Accesses collection of views */
  vegas.views = function views() {
    if (!_views) _views = new ViewCollection(_context);
    return _views;
  };

  var _regions = null;
  /** Accesses collection of regions */
  vegas.regions = function regions() {
    if (!_regions) _regions = new RegionCollection(_context);
    return _regions;
  };

  var _components = null;
  /** Accesses collection of components */
  vegas.components = function components() {
    if (!_components) components = new ComponentCollection(_context);
    return _components;
  };

  var _tabs = null;
  /** Accesses collection of tabs */
  vegas.tabs = function tabs() {
    if (!_tabs) new TabCollection(_context);
    return _tabs;
  };

  /** Create a new view */
  new vegas.View();

  /** Create a new view */
  new vegas.View();

  return global.vegas;

});
