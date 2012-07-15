Decision to not use prototypal inheritance is based on as follows.

  function MyClass() {

  }

  MyClass.prototype.myClassFunction = function () {

  };

  new MyClass()

If you want MyClass to use a method from MyBaseClass, you can do the following


  function MyBaseClass() {

  }

  MyBaseClass.prototype.myBaseClassMethod = function () {

  };

  function MyClass() {

  }

  MyClass.prototype = MyBaseClass.prototype;

  MyClass.prototype.myClassFunction = function () {

  };

  new MyClass()

The above will allow you to inherit the methods as desired

  Cons:
    run-time dependency, meaning that MyBaseClass is required before MyClass is even instantiated.
  pros:
    good for keeping things simple if you do not need a constructor, and just
    use another classes methods.


if you wanted to have the MyBaseClass constructor called every time you created
a new instance of MyClass you would have to look for a different solution.


  function MyBaseClass() {
    console.log('my base class constructor');
  }

  MyBaseClass.prototype.myBaseClassMethod = function () {

  };

  function MyClass() {
    console.log('my class constructor');
  }

  MyClass.prototype = new MyBaseClass();

  MyClass.prototype.myClassFunction = function () {

  };

  new MyClass()

  Cons:
    run-time dependency, meaning that MyBaseClass is required before MyClass is even instantiated.
    you can not pass in argument constructors to the base class constructor 
  Pros:
    Good for if you need to call the constructor of what your inheriting from.


  function MyBaseClass(option1) {
    console.log('my base class constructor', option1);
  }

  MyBaseClass.prototype.myBaseClassMethod = function () {

  };

  function MyClass(option1) {
    console.log('my class constructor', option1);
  }

  // how would you pass option one into base class?
  MyClass.prototype = new MyBaseClass(option1);

  MyClass.prototype.myClassFunction = function () {

  };

  new MyClass('option1')


