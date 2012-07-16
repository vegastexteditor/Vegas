define(function(require, exports, module) {

  function ViewCollectionSpec() {

    pavlov.specify.globalApi = true;

    pavlov.specify("ViewCollections", function(){

      describe("View Collection", function () {

        it("make do stuff", function () {
          assert(true).equals(false);
        });

      });

    });

  }

  return ViewCollectionSpec;

});

