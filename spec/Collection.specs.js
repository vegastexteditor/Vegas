pavlov.specify.globalApi = true;

pavlov.specify("Collections", function(){

  describe("when having multiple items in the constructor", function () {

    var collection;
    var initArray = ['one', 'two', 'three'];

    before(function () {
      collection = new vegas._Collection(initArray);
    });

    it("should contain the proper length specified by constructor arguments", function () {
      assert(collection.length).equals(3);
    });

    it("should contains keys that can be looped through via a standard for loop", function () {
      for (var i = 0; i < collection.length; i++) {
        assert(collection[i]).equals(initArray[i]);
      }
    });

    after(function () {
      delete collection;
    });

  });

  describe("when the collection starts with zero items", function () {

    var collection;

    before(function () {
      collection = new vegas._Collection();
    });

    it("should be able to initialize the constructor with an empty array", function () {
      assert(collection.length).equals(0);
    });

    it("should be able to add a single item to the array via add method", function () {
      collection.add('one');
      assert(collection.length).equals(1);
      assert(collection[0]).equals('one');
    });

    it("should be able to add multiple items at once, via add method", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      assert(collection.length).equals(5);
    });

    it("should be able to do a regular for i loop", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      for (var i = 0; i < collection.length; i++) {
        assert(collection[i]).equals(initArray[i]);
      }
    });

    it("should iterate properly over a forEach method", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      var i = 0;
      collection.forEach(function (value, j) {
        assert(value).equals(initArray[i]);
        i++;
      });
    });

    it("should iterate properly over a each method", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      var i = 0;
      collection.each(function (value, j) {
        assert(value).equals(initArray[i]);
        i++;
      });
    });

    it("should be able to put something at the begining of the array", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      collection.addToBegining('zero');
      for (var i = 0; i < collection.length; i++) {
        assert(collection[i + 1]).equals(initArray[i]);
      }
      assert(collection[0]).equals('zero');
    });

    it("should be able to put something at the end of the array", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      collection.addToEnd('six');
      assert(collection[collection.length - 1]).equals('six');
    });

    it("should be able to put something at the at a specific position in the array", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      collection.addItemToPos('one and a half', 1);
      assert(collection[1]).equals('one and a half');
    });

    it("should be able to remove something at the begining of the array", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      collection.removeFirst();
      assert(collection.length).equals(4);
      for (var i = 0; i < collection.length; i++) {
        assert(collection[i]).equals(initArray[i + 1]);
      }
    });

    it("should be able to remove something at the end of the array", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      collection.removeLast();
      assert(collection.length).equals(4);
      assert(collection[collection.length - 1]).equals('four');
    });

    it("should be able to remove something at a specific position in the array", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      collection.removeFromPos(2);
      assert(collection[2]).equals('four');
      assert(collection.length).equals(4);
    });

    it("should be able to remove all items of the array", function () {
      var initArray = ['one', 'two', 'three', 'four', 'five'];
      collection.add(initArray);
      collection.removeAll();
      assert(collection.length).equals(0);
    });

  });

});
