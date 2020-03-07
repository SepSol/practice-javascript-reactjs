// Functions are regular objects with the additional capability of being callable.

/*
[[[ DECLARING A FUNCTION ]]]
function myFunc(parameter1, parameter2) {
    statements to be executed;
    return();
}

[[[ INVOKING / CALLING A FUNCTION ]]]
myFunc(3, 5);
       ^  ^
     arguments
arguments are values (received by the function - when it is invoked)
*/

// the code inside the function is only executed when it is later invoked in the code

// [[[ 3 WAYS TO EXECUTE A FUNCTION ]]]
//  1. event:   when a user clicks a button - onclick, onmouseover, etc...
//  2. invoke:  when it is called in the code - with () operator
//  3. auto:    self-invoked


console.log('=================================');
console.log('         REGULAR FUNCTION        ');
console.log('=================================');

//function nameOfFunc (parameter1, parameter2, ...) { do this when called }
function firstFunc () {
    console.log('my first function');
}

function secondFunc () {
    console.log('my second function');
}

secondFunc;

function thirdFunc () {
    console.log('my third function');
}

thirdFunc();

console.log('---------------------------------');

function welcome (username) {
    alert('Welcome back ' + username + '!');
}

// copy this into your browser's console:
// welcome('Sepehr')

function parameters (par1, par2, par3) {
    console.log('parameter one is ' + par1);
    console.log('parameter two is ' + par2);
    console.log('parameter three is ' + par3);
}

parameters(1,2,3);

console.log('---------------------------------');

function sumFunc (num1, num2) {
    sumInFunc = num1 + num2;
    console.log('inside the function the sum is = ' + sumInFunc);
}

sumFunc(2,3);
// console.log('outside the function the sum is = ' + sumInFunc1);
// this gives an error:
// 'sumInFunc1 is not defined'


function calc (a, b) {
    result = a + b;
    return result; // when the function reaches the 'return' statement it stops executing and the 'return value' is returned back to the 'caller' of the function
}

var sum = calc(10,5);                           // we can use a variable to store the result of the function
// var fullName = calc('Sepehr ', 'Soltanieh'); // or we can use the function itself as a variable - look below

console.log('SUM = ' + sum);                // 'sum' variable stores the reslut of 'calc' function
console.log(calc('Sepehr ', 'Soltanieh'));  // 'calc' function itself works as a variable as well



console.log('---------------------------------');
console.log('           THIS. KEYWORD         ');
console.log('---------------------------------');

var person = {
    firstName   :   'Sepehr',
    lastName    :   'Soltanieh',
    fullName    :   function() {
        return this.firstName + ' ' + this.lastName;
    }
}

// In a function definition, "this" refers to the "owner" of the function.
// In the example above, this is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object (person).

console.log(person.fullName()); // returns: Sepehr Soltanieh

// If you access a method without the () parentheses,
// it will return the function definition:

console.log(person.fullName);   // returns: function fullName()


/*
    In a method, this refers to the owner object. (just like above)
    
    Alone, this refers to the global object.
        In a browser window the Global object is [object Window]:
            try:    console.log(this);
    
    In a function, this refers to the global object.
        In a JavaScript function, the owner of the function is the default binding for this.
        So, in a function, this refers to the Global object [object Window]:
            try:     function myFunction() {return this;} 
    
    In a function, in strict mode, this is undefined.
        JavaScript strict mode does not allow default binding.
        So, when used in a function, in strict mode, this is undefined.
            try:     "use strict"; function myFunction() {return this;} 
    
    In an event, this refers to the element that received the event.
         <button onclick="this.style.display='none'">Click to Remove Me!</button> 
    
    Methods like call(), and apply() can refer this to any object.
*/



console.log('=================================');
console.log('          ARROW FUNCTION         ');
console.log('=================================');

//          function myFunc (p) {statements}
//     var myFunc = function(p) {statements}
//          myFunc = function() {statements}
//
//          var myFunc = (p) => {statements}
//                myFunc = p => statement;
//                       (p) => {statement}
//                         p => statement;      // () and {} not needed for 1 parameter/statement
//                        () => statement;


// Arrow Functions Return Value by Default:
// Note: This works only if the function has only one statement.
hello = () => "Hello World!"; 
console.log(hello());


console.log('---------------------------------');
console.log('           THIS. KEYWORD         ');
console.log('---------------------------------');

/*
    The handling of this is also different in arrow functions compared to regular functions.
    In short, with arrow functions there are no binding of this.

    In regular functions the this keyword represented:
    the object that CALLED (INVOKER) the function,
        which could be the window, the document, a button or whatever.
    
    With arrow functions the this keyword always represents:
    the object that DEFINED (OWNER) the arrow function.
*/



// Regular Function (Event Listener):        // this refers to invoker   (so it changes as seen below)
var regularFunc = function() {
    document.getElementById('thisPReg').innerHTML += this;
}

// Arrow Function (Event Listener):          // this refers to owner     (so it doesn't change)
var arrowFunc = () => {
    document.getElementById('thisPArr').innerHTML += this;
}


// When the window object calls each function:
window.addEventListener('load',regularFunc);    // [object window]
window.addEventListener('load',arrowFunc);      // [object window]


// When the button object calls each function:
document.getElementById('thisButReg').addEventListener('click',regularFunc);    // [object HTMLButtonElement]
document.getElementById('thisButArr').addEventListener('click',arrowFunc);      // [object window]




