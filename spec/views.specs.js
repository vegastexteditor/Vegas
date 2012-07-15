pavlov.specify.globalApi = true;

pavlov.specify.extendAssertions({
    exists: function(value) {
        ok((value !== undefined), message);
    },
    isGreaterThan: function(actual, expected, message) {
        ok(actual > expected, message);
    },
    isLessThan: function(actual, expected, message) {
        ok(actual < expected, message);
    },
    containsExactlyTwoElements(actual, message) {
        // note this does not have an expected parameter
        ok(actual.length == 2);
    }
});

pavlov.specify("Vegas Views", function(){

    debugger;

  describe('views', function () {

    it('should exist', function () {
      assert(vegas).exists('sup');
    });


  });

});
