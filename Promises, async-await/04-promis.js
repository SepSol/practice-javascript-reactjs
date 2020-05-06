console.log('=================')
console.log('     promises    ')
console.log('=================')
/*
A promise is a special JavaScript object that links 
the “producing code” and the “consuming code” together. 

A “producing code” that does something and takes time. 
For instance, some code that loads the data over a network. 

“consuming code” that wants the result of the “producing code” 
once it’s ready. Many functions may need that result. 

The constructor syntax for a promise object is:
*/

var promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});

/*
The function passed to new Promise is called the executor. 
When new Promise is created, the executor runs automatically. 
It contains the producing code which should eventually 
produce the result. 

Its arguments resolve and reject are callbacks provided by 
JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, 
doesn’t matter, it should call one of these callbacks:

* resolve(value) — if the job finished successfully, with result value.
* reject(error) — if an error occurred, error is the error object.



So to summarize:

1. the executor runs automatically and attempts to perform a job. 
2. When it is finished with the attempt:
    a. it calls resolve if it was successful 
    or
    b. reject if there was an error.
.


The promise object returned by the new Promise constructor 
has these internal properties:

state — initially "pending", then changes to either 
      "fulfilled" when resolve is called or 
      "rejected" when reject is called.

result — initially undefined, then changes to 
      value when resolve(value) called or 
      error when reject(error) is called.
.


Here’s an example of a promise constructor and a simple executor 
function with “producing code” that takes time (via setTimeout):


https://javascript.info/promise-basics


To summarize:

the executor should perform a job (usually something that takes time) 
and then call resolve or reject to change the state of the 
corresponding promise object.

A promise that is either resolved or rejected is called “settled”, 
as opposed to an initially “pending” promise.
*/