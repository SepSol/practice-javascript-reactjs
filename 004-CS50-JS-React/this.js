// an object with a method that includes this
// in this context this bounds to the object the method is called on
const person1 = {
    name: "Person 1 Obj",
    greet: function() {console.log('THIS is => ' + this.name)}
}

// int this context, this should refer to person2 object
const person2 = {
    name: "Person 2 Obj"
}

// we have to first define what person2.greet is before invoking it
// if we assigned greet to person1.greet(), the person1.greet would be invoked and probabely its return would be stored in person2.greet
person2.greet = person1.greet

// greet is a global variable which stores the person1.greet method
// so if we invoke greet(), this should refer to the global object
const greet = person1.greet


console.log('======================')
console.log('||   Testing THIS   ||')
console.log('======================')
person1.greet()         // this.name => person1.name => Person 1 Obj
person2.greet()         // this.name => person2.name => Person 2 Obj
greet()                 // this.name => global.name => undefined

this.name = 'Global Obj'//              global.name => Global Obj
greet()                 // this.name => global.name => Global Obj
// it doesn't change in the terminal below though
// it needs to be invoked in either browser or Node REPL to be able to change the global object name

console.log('======================')
console.log('||   Setting THIS   ||')
console.log('======================')
// bind - call - apply - arrow function //

person1.greet.bind({name: 'binded'})    // doesn't invoke the method by itself
person1.greet.call({name: 'called'})    // ivokes the method
person1.greet.apply({name: 'applied'})  // invokes the method

// we need to store (bind) in a variable and ivoke it manually
const binded = person1.greet.bind({name: 'binded'})
binded()



console.log('======================')
console.log('||  Arrow Function  ||')
console.log('======================')
// ES6 arrow notation will bind 'this' to be 
// whatever 'this' is at the time that we *declare* the function
// rather than at the time that we *invoke* the function

// creating a new method on an object using the arrow function
const person3 = {
    name: 'arrowFunc',
    greet: () => {console.log('THIS is => ' + this.name)}
}

// testing the output
person3.greet()

// declaring a new GLOBAL function for that method
const arrowGreet = person3.greet
// testing the results
arrowGreet()



console.log('======================')
console.log('||   But Still...   ||')
console.log('======================')
person1.greet()

// so this is not overwritten
// every time it is invoked it looks at the context and takes a value