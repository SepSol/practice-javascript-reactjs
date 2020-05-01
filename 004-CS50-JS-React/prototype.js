// JavaScript uses functions as classes.

console.log('=================')
console.log('     METHOD 1    ')
console.log('=================')

function newPerson(first, last) {
    return {
        first: first,
        last: last
    };
}

function personFullName(person) {
    return person.first + ' ' + person.last;
}

function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
}



var person1 = newPerson('name', 'lastname'); // creates new object instance
personFullName(person1);    // "name lastname"
personFullName(person1);    // "lastname, name"



console.log('=================')
console.log('     METHOD 2    ')
console.log('=================')

/*
First method works, but it's pretty ugly. You end up with dozens of functions in your global namespace. What we really need is a way to attach a function to an object. Since functions are objects, this is easy:
*/

function newPerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
            return this.last + ', ' + this.first;
        }
    };
}



var person2 = newPerson('foo', 'bar'); // creates new object instance
person2.fullName();         // "foo bar"
person2.fullNameReversed(); // "bar, foo"



console.log('=================')
console.log('     METHOD 3    ')
console.log('=================')

/*
Note on the this keyword. Used inside a function, this refers to the current object. What that actually means is specified by the way in which you called that function. If you called it using dot notation or bracket notation on an object, that object becomes this. If dot notation wasn't used for the call, this refers to the global object.

We can take advantage of the this keyword to improve our newPerson function:
*/

function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    };
    this.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    };
}

/*
We have introduced another keyword: new. new is strongly related to this. It creates a brand new empty object, and then calls the function specified, with this set to that new object. Notice though that the function specified with this does not return a value but merely modifies the this object. It's new that returns the this object to the calling site. Functions that are designed to be called by new are called constructor functions. Common practice is to capitalize these functions as a reminder to call them with new.
*/

var person3 = new Person('sep', 'sol'); // creates new object instance



console.log('=================')
console.log('     METHOD 4    ')
console.log('=================')

/*
Our person objects are getting better, but there are still some ugly edges to them. Every time we create a person object we are creating two brand new function objects within it — wouldn't it be better if this code was shared?
*/

function personFullName() {
    return this.first + ' ' + this.last;
}

function personFullNameReversed() {
    return this.last + ', ' + this.first;
}

function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}

/*
That's better: we are creating the method functions only once, and assigning references to them inside the constructor. Can we do any better than that? The answer is yes!
*/



console.log('=================')
console.log('     METHOD 5    ')
console.log('=================')

function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};

Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
};

/*
Person.prototype is an *object* shared by all instances of Person. It forms part of a lookup chain (that has a special name, "prototype chain"): any time you attempt to access a property of Person that isn't set, JavaScript will check Person.prototype to see if that property exists there instead. As a result, anything assigned to Person.prototype becomes available to all instances of that constructor via the this object.

This is an incredibly powerful tool. JavaScript lets you modify something's prototype at any time in your program, which means you can add extra methods to existing objects at runtime. Interestingly, you can also add things to the prototype of built-in JavaScript objects.
*/