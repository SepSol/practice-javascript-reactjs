// source: https://scotch.io/tutorials/javascript-promises-for-dummies

var isMomHappy = false;



// promise
var willIGetNewPhone = new Promise(
  function(resolve, reject) {
    if(isMomHappy === true) {
      var phone = {
        brand: 'samsung',
        color: 'black'
      };
      resolve(phone); // resolve
    } else {
      var reason = new Error('Mom is not happy :(');
      reject(reason); // reject
    }
  }
);



// call our promise
var askMom = function() {
  willIGetNewPhone
  .then(function (fullfilled) {
    console.log(fullfilled);
  })
  .catch(function (error) {
    console.log(error.message)
  });
};

askMom();