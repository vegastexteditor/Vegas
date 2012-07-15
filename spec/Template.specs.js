pavlov.specify.globalApi = true;

pavlov.specify.extendAssertions({
    exists: function(value, expected, message) {
        ok(true, message);
    },
    isGreaterThan: function(actual, expected, message) {
        ok(actual > expected, message);
    },
    isLike: function(actual, expected, message) {
        message = '"' + actual + '"' + ' is like ' + '"' + expected+ '"';
        ok(actual.match(expected).length > 0, message);
    },
    isLessThan: function(actual, expected, message) {
        //ok(false,  message);
        ok(actual < expected, message);
    }
});


pavlov.specify("Template", function(){

  describe("Templates", function () {

    var view;

    var templateData;

    before(async(function () {

      var template = new vegas.Template('testTemplate', function (templateDataResponse) {
        templateData = templateDataResponse;
        resume();
      });

    }));

    it("should be able to retrieve template data", function () {
      var templateString = 'this string will be matched against to ensure that templates work';
      assert(templateData).isLike(templateString);
    });

    it("after loading once, it should the loaded template... fast like", async(function () {

      var startTime = +new Date();
      var template = new vegas.Template('testTemplate', function (templateDataResponse) {
        templateData = templateDataResponse;
        var endTime = +new Date();
        var executionTime = (endTime - startTime);
        assert(executionTime).isLessThan(6);
        resume();
      });

    }));

    after(function () {
      delete view;
    });

  });

});
