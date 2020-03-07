console.log('=================================');
console.log('            DATA TYPES           ');
console.log('=================================');


console.log('      7 PRIMATIVE DATA TYPES     ');
/*
        1.  String:     "ABcd123"
        2.  Number:     12345
        3.  BigInt:     23n
        4.  Boolean:    true(1), false(0)
        5.  Null:       null
        6.  Undefined:  undefined
        7.  Symbol:     ???
*/

console.log('      2 COMPLEX DATA TYPES       ');
/*
        1.  Object:     {key1:'value1',key2:'value2'}
            Array:      ['value1', 'value2']
        2.  Function:   (event, parameter, argument) {
                        statements to be executed;
                        reurn ();
                        }
*/

//  if in doubt, use 'typeof' before the data you want to know the type of:
//  console.log(typeof true);

console.log('=================================');
console.log('      7 PRIMATIVE DATA TYPES     ');
console.log('=================================');
// Primative data types are immutable - they cannot be altered.


// 1 String :       a sequence of characters
var string = 'some text';
console.log(string);

// 2 Number :       numeric data
var number = 1180;
console.log(number);

// 3 bigint :       numeric data (cannot be operated with regular numbers) - can represent integers in the arbitrary precision format to safely store and operate on large integers beyond the safe integer limit for numbers
var bigInt = 3n;
console.log(bigInt);

// 4 boolean :      logical data - only has 'true = 1' or 'false = 0' answers
var boolean = true;
if (boolean == true) {
    console.log(true + ' = ' + 1);
} else {
    console.log(false + ' = ' + 0);
}
Boolean(10 > 5);            // checks the validity of the expression and outputs 'true' - from the typo I guess Boolean is a class, just like Object
    Boolean(true);          // outputs true
    Boolean(false);         // outputs false

    var noValue;
    Boolean(noValue);       // outputs false
    Boolean(!noValue);      // outputs true
    var hasValue = 10;
    Boolean(hasValue);      // outputs true - everything with a 'value' is 'true'
    Boolean(!hasValue);     // outputs false

    var numZero = 0;
    Boolean(numZero);       // boolean value of zero is false
    var emptyString = '';
    Boolean(emptyString);   // boolean value of empty string is false

    Boolean(undefined);     // outputs false - everything with a 'value' is 'true' (remember?)
    Boolean(null);          // outputs false
    Boolean(NaN);           // outputs false

// 5 null :         a reference that -intentionally- points to a nonexistent or invalid OBJECT or address
null;
console.log(null);

// 6 undefined :    is automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments
var x;
console.log(x);

// 7 symbol :       a function that can be used as the key an object property - a symbol value represents a unique identifier which is used for debugging purposes only - sometimes is called 'atom'




console.log('=================================');
console.log('      2 COMPLEX DATA TYPES       ');
console.log('=================================');


// 1.2 Array :        an object which is an ordered collection of data - arrays can be manipulated with methods
var array = ['string', 1180, false, boolean]; // index = 0,1,...
console.log(array);
console.log(array[0]);
console.log(array.length);


// 1.1 Object :       a class  which is a collection of keyed more complex collections - can be created using Object() or var myObject={key0:'property',key1:'value',key2:'method',key3:'function'}
//                    class is a type of function, and object is a type of class. so: class > object > array > data

// using: object initializers
var object = {      // object = collection of properties
    key:'value',   // key (string or symbol) + value (anything) = property
    name:'Sepehr',
    lastName:'Soltanieh',
    method: function() {console.log(this.key);}  // METHOD = a PROPERTY, which has a FUNCTION as its VALUE
}
console.log(object);
console.log(object["key"]);
console.log(object.key);
console.log(object.method());


// using: 'Object.create' method
var myObject = Object.create(object); // myObject   = new child object
myObject.key = 'myValue';             // object     = old parent object
myObject.method();


// using: 'Object()' class
var myObject = new Object();
myObject.key = 'value';
myObject.name = 'Sepehr';
myObject.lastName = 'Soltanieh';

console.log(myObject);
console.log(myObject.key);


// using: 'contructor()' function
function Car(key, make, model, year) {
    this.key = key;
    this.make = make;
    this.model = model;
    this.year = year;
}

var mycar = new Car('value', 'Eagle', 'Talon TSi', '1993');
var kenscar = new Car('value', 'Nissan', '300ZX', '1992');

console.log(mycar);
console.log(kenscar.make);


// 2.0 Function :       
var myFunc = () => console.log('arrow function')

var myFunc = function () {
    console.log('regular function');
}

function myFunc() {
    console.log('classic regular function');
}



console.log('=================================');
console.log('       DECLARING VARIABLES       ');
console.log('=================================');

var x;          // a declared variable with unassigned value
console.log(x); // these variables are by default 'undefined'

x = 20;         // a value is now assigned to variable x
console.log(x); // x is no longer 'undefined'

x = undefined;  // we can empty a variable again -||- x="" --> empty value
console.log(x); // the x is now again 'undefined'

//

var x;      // declaring variable
var y;      // declaring variable
var z;      // declaring variable

x = 5;      // assigning a value to a variable
y = 20;     // assigning a value to a variable
z = x + y;  // assigning a value to a variable
console.log(z);

//

var x, y, z;
x = 5;
y = 20;
z = x + y;
console.log(z);

//

var x = 5;      // 1st declaration statement
var y = 20;     // 2nd declaration statement
var z = x + y;  // 3rd declaration statement
console.log(z); // notice that they all end with semicolon ';'

//

var x = 5,      // begining of 1st declaration
    y = 20,     // 
    z = x + y;  // end of 1st declaration
console.log(z); // notice that the variables are seperated by comma ','

//

var x = 5, y = 20, z = x + y; // you can write the previous example in one line
console.log(z);


console.log('=================================');
console.log('    ADDITION VS CONCATENATION    ');
console.log('=================================');

var addition        = 3 + 5;    // returns 8
var concatenation   = '3' + 5;  // returns '35'


console.log('=================================');
console.log('        UNDEFINED & NULL         ');
console.log('=================================');


var x = '';             // 'empty string' is an empty value
console.log(typeof ''); // type = string


var variable = 'value';
variable = undefined;   // 'undefined' empties variables (and objects)
console.log(typeof undefined); // type = undefined


var object = {key1:'value1', key2:'value2', key3:'value3'}
object = undefined;     // 'undefined' empties objects (and variables) - type = undefined
object = null;          // 'null' empties objects - type is stille object
console.log(typeof null); // type = object


console.log('---------------------------------');


// 'undefined' and 'null' are equal in VALUE but different in TYPE:

console.log (typeof undefined);      // undefined
console.log (typeof null);           // object

console.log (null === undefined);    // false
console.log (null == undefined);     // true 


console.log('=================================');
console.log('         VARIABLE SCOPES         ');
console.log('=================================');

/*
    NAME                SCOPE           RE-DECLARABLE?      RE-ASSIGNABLE?
    --------------------------------------------------------------------------
    var         global / local (func)        YES                  YES     
    let                block {}               NO                  YES
    const              block {}               NO                   NO


    With JavaScript, the global scope is the JavaScript environment.
    In HTML, the global scope is the window object.

    Global variables defined with the var keyword belong to the window object.
*/



// === VAR === //
var a = 2;
var a = 5;
{var a = 3}
function varScope() {
    a = 9; // inside the function (locally) a = 9
}
// outside the function (globally) a = 3

var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10 



// === LET === //
let b = 10;
// let b = 15; // this gives an error - you cannot re-declare let value (in the same scope)
b = 13;
{let b = 19} // inside this block b = 19
function letScope() {
    let b = 17; // inside this function b = 17
}
// globally b = 13

let ii = 5;
for (let ii = 0; ii < 10; ii++) {
  // some statements
}
// Here ii is 5 



// === CONST === //
const c = 23;
// const c = 27; // this gives an error - you cannot re-declare const value (in the same scope)
// c = 25;       // this gives an error too - you cannot re-assign const value (in the same scope)
{const c = 21} // inside this block c = 21
function constScope() {
    const c = 24; // inside this function c = 17
}
// globally c = 23



