define(function(require, exports, module) {
  "use strict";

  var EntityCollection = require('base/EntityCollection');
  var util = require('util');

  function TabCollection(vegas) {
    util.extend(this, new EntityCollection(vegas));

    if (vegas.settings.newTabButtonLeftOfTabs) {
      var doc = vegas.view().getDocument();
      jQuery(doc.body).addClass('newTabButtonLeftOfTabs');
    }

    this.attachEvents();
  }

  TabCollection.prototype.attachEvents = function () {
    var self = this;

    if (!vegas._TabCollectionEventsAttached) {

      jQuery(document).bind('click', function (e) {
        if (e.target.className && e.target.className.indexOf('newTab') !=-1) {
          new vegas.tab();
        }
      });

      jQuery(document).bind('click', function (e) {
        if (e.target.className & e.target.className.indexOf('close') != -1) {
          var tab = self.getObjectFromElement(e.target.parentNode);
          tab.close();
        }
      });

    }

    vegas._TabCollectionEventsAttached = true;

  };

  return TabCollection;

});
