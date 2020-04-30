// Synchronous JS
console.log('Synchronous JavaScript:')
print1()
print2()
print3()
print4()
print5()


// Asynchronous JS
console.log('Asynchronous JavaScript:')
setTimeout(print1, 1000)
setTimeout(print2, 0)
setTimeout(print3, 0)
print4()
print5()




// Function declarations
function print1() {
    console.log('One')
}

function print2() {
    console.log('Two')
}

function print3() {
    console.log('Three')
}

function print4() {
    console.log('Four')
}

function print5() {
    console.log('Five')
}



/*

JavaScript is a single-threaded, synchronous language
JavaScript has *functions* that act asynchronously

Asynchronous JavaScript:
1. Execution stack  => last in - first out  |   JavaScript Engine
2. Browser APIs     => functions outside js, which are handled by browser's engine
3. Function queue   => first in - first out |   Browser Engine
4. Event loop       => checks Exec Stack and if there's nothing there, calls the first item from Queue to the Stack

Asynchronous Functions:
* setTimeout()
* XMLHttpRequest()
* jQuery.ajax()
* fetch()       |   Promises to return a value
    .then()     |   Expect the response of a promise and accepts the callback
    .catch()    |   Handles any error that may occur in any of the then statements above it
and database calls

*/