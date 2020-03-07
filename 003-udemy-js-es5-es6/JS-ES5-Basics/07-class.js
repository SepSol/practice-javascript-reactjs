/*
object is a type of class, CLASS is a type of function
so:              object > class > function

but instead of using the keyword 'function' to initiate it, we use the keyword 'class'

class (like objects) has properties
its properties are assigned inside a method
this method is called:   constructor ()

object = {key:'value'}
          ----------
      property / method



Use the keyword class to create a class,
and always add the constructor() method:
*/

class Rectangle {
    constructor(heightValue, widthValue) {
      this.nameKey = 'Rectangle';
      this.heightKey = heightValue;
      this.widthKey = widthValue;
    }
  }

/*
class = Rectangle (like Object, Boolean, Component etc, class names start with capital letters)
constructor = method

heightKey, widthKey = property key    (defined in the class)
heightValue, widthValue = poperty value  (to be assigned by an object)

Note: The constructor method is called automatically when the object is initialized.

The constructor method is special, it is where you initialize properties,
it is called automatically when a class is initiated,
and it has to have the exact name "constructor",

in fact, if you do not have a constructor method,
JavaScript will add an invisible and empty constructor method.



To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class.

In the example above, we first define a class named Rectangle,
then we'll extend it to create a class named Square:
*/

class Square extends Rectangle {
    constructor(lengthValue) {      // creates a new constructur(lengthValue)
      super(lengthValue, lengthValue);  // refers to constructor(heightValue, widthValue) in the parent class
      this.nameKey = 'Square';
    }
  }

/*
The super() method refers to the parent class.

Note that super(), used in the constructor, can only be used in 'constructors',
and must be called before the 'this' keyword can be used.



Now you can create objects using the mySquare class:
*/

mysquare = new Square(4);  // the value in () is the value set in constructor()

/*
mysquare = object
so:

class Rectangle {nameKey = 'Rectangle'; heightKey = heightValue; widthKey = widthValue}
class Square    {nameKey = 'Square';    heightKey = lengthValue; widthKey = lengthValue}
object mysquare={nameKey = 'Square',    heightKey = 4,           widthKey = 4}
*/



// You are also free to make your own methods, the syntax should be familiar:

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return "I have a " + this.carname;
    }
  }
  
mycar = new Car("Ford"); // object mycar = { carname: 'Ford' } - it doesn't have a method by itself - but it inherits one from its parent class (present)

document.querySelector('.header2Parent').insertAdjacentHTML('afterbegin','<h2 id="createdElement" style="color:red"></h2>');
document.getElementById('createdElement').innerHTML = mycar.present(); // present() is a method inherited from its parent - it's not in the object


// we can even have an input parameter (x):

class Car {
    component(brand) {
        this.carname = brand;
    }
    present(x) {
        return x + " I have a " + this.carname;
    }
}

mycar = new Car("Ford");

document.querySelector('.header2Parent').insertAdjacentHTML('afterbegin','<h2 id="createdElement" style="color:red"></h2>');
document.getElementById('createdElement').innerHTML = mycar.present('Hello');



/*
READ MORE AT:
https://www.w3schools.com/js/js_classes.asp
*/




