console.log('=================')
console.log('     promises    ')
console.log('=================')
/*
A Promise object serves as a link between the 
executor (the “producing code”) and the 
consuming functions, which will receive the result or error. 

Consuming functions can be registered using methods:
 .then, .catch and .finally.
*/
console.log('=================')
console.log('       THEN      ')
console.log('=================')
/*
The most important, fundamental one is .then.

https://javascript.info/promise-basics

If we’re interested only in successful completions, 
then we can provide only one function argument to .then:
*/
console.log('=================')
console.log('      CATCH      ')
console.log('=================')
/*
If we’re interested only in errors, then we can use null 
as the first argument: .then(null, errorHandlingFunction). 
Or we can use .catch(errorHandlingFunction), which is exactly the same:

The call .catch(f) is a complete analog of .then(null, f), 
it’s just a shorthand.

