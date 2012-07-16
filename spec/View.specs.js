require(['view/View', 'view/ViewCollection'], function (View, ViewCollection) {

  pavlov.specify.globalApi = true;

  pavlov.specify.extendAssertions({
      exists: function(value, expected, message) {
          ok(true, message);
      },
      isGreaterThan: function(actual, expected, message) {
          ok(actual > expected, message);
      },
      isLessThan: function(actual, expected, message) {
          ok(actual < expected, message);
      }
  });

  pavlov.specify("View", function(){

    describe("When creating a single view", function () {

      var view;
      before(function () {

        // Mock collection in global object.
        window.vegas = {};
        vegas.views = function () {
          if (!this._views) this._views = new ViewCollection({vegas: vegas});
          return this._views;
        };

        view = new View({context: {vegas: window.vegas}});
      });

      it('should have a collection length of one', function () {
        assert(view.collection().length).equals(1);
      });

    });

  });

});
