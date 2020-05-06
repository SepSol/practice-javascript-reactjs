console.log('=================')
console.log('    callbacks    ')
console.log('=================')
/*
Many functions are provided by JavaScript host environments
that allow you to schedule asynchronous actions. 
In other words, actions that we initiate now, but they finish later.

For instance, one such function is the setTimeout function:
*/
print(1)
print(2)
setTimeout(print3, 1000)
print(4)
setTimeout(print5, 0)
print(6)
print(7)


// function declarations
function print(n) {console.log(n)}
function print1() {console.log(1)}
function print2() {console.log(2)}
function print3() {console.log(3)}
function print4() {console.log(4)}
function print5() {console.log(5)}
function print6() {console.log(6)}
function print7() {console.log(7)}
function print8() {console.log(8)}
function print9() {console.log(9)}