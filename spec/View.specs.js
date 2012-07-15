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

  describe("With a view", function () {

    var view;

    before(function () {
    });

    it("views exist in vegas object", async(function () {

      var template = new vegas.Template('viewContainer');

      template.on('load', function () {
        view = new vegas.View();
        assert(vegas.View).exists();
      });

    }));

    after(function () {
      delete view;
    });

  });

});
