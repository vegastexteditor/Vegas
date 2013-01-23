define(function(require, exports, module) {
  "use strict";

  var Entity = require('base/Entity');
  var Region = require('region/Region');
  var util = require('util');

  function RegionPair(spaceInstance, options) {
    // extend Entity class for common methods
    util.extend(this, new Entity('RegionPair', spaceInstance, options));

    //function regionRegionHtml() {
      //var region = vegas.region();
      //var regionElement = region.getElement();
      //var regionContent = regionElement.html();
      //var regionWrapper = this.getRegionWrapper(region);
      //var regionHtml = regionWrapper.append(regionContent);
    //}
    //


    var region1 = vegas.region();
    region1.width('50%');


    // inherit options and allow a second region to make a pair.
    options = options || {};
    options.allowPair = true;

    var region2 = new Region(spaceInstance, options);
    region2.width('50%');

  }

  RegionPair.prototype.getRegionWrapper = function (region) {
    var regionContainer = util.tpl('regionContainer', region._getTemplateVariables());
    regionContainer = jQuery(regionContainer);
    regionContainer.html('');
    return regionContainer;
  };


  return RegionPair;

});
