// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
// <element event="some JavaScript">
// <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

// In the next example, the code changes the content of its own element (using this.innerHTML): 
// <button onclick="this.innerHTML = Date()">The time is?</button>

// JavaScript code is often several lines long. It is more common to see event attributes calling functions:
// <button onclick="displayDate()">The time is?</button> 
// <script>function displayDate() {document.getElementById('testP2').innerHTML = Date();}</script>


//
console.log('=================================');
console.log('               EVENTS            ');
console.log('=================================');
//

/*
Common HTML Events: 

onchange
onclick
ondblclick
onmouseover
onmouseout
onkeydown
onload

(look at HTML script or the yellow code after '.' here)
*/

document.querySelector('#myButton').onclick = function() {console.log('click!');}

var jsButton = document.querySelector('.myButton'); // yellow() = method
// console.log(jsButton);

jsButton.onclick = function() { // yellow = HTML event 
    console.log('click!');
}

jsButton.onmouseover = function() { // yellow = HTML event
    console.log('mouse over')
}

jsButton.ondblclick = function() { // yellow = HTML event
    alert('double click!');
}



//
console.log('=================================');
console.log('          EVENT LISTENERS        ');
console.log('=================================');
//


var jsButton2 = document.querySelector('.myButton2'); // method

function clickFunc1(event) {    // event listener function
    console.log('clicked me!');
}

function clickFunc2() {    // event listener function
    console.log('clicked me again!');
    jsButton2.removeEventListener('click', clickFunc1);
}

jsButton2.addEventListener('click', clickFunc1); // event listener method - no parantheses for clickFunc
jsButton2.addEventListener('click', clickFunc2); // event listener method - no parantheses for clickFunc
//                            ^
//                          event


//
console.log('=================================');
console.log('         EVENT PROPERTIES        ');
console.log('=================================');
//

// to see 'the bubbling effect' uncomment the commented code:

var jsParentRect = document.querySelector('.parentRect');
var jsChildRect = document.querySelector('.childRect');


function parentAnnouncer (event) {
    console.log('Red / Blue Parent Rectangle');
    // to change color on click:
    if (jsParentRect.style.background = 'red') {
        jsParentRect.style.background = 'blue';
    } else {
        event.target.style.background = 'red'; // has an issue - doesn't work!
    }
}

function childAnnouncer (event) {
    // event.stopPropagation();     // stops the event to spread to parent div
    console.log('Green Child Rectangle');
}

jsParentRect.addEventListener('click', parentAnnouncer);
jsChildRect.addEventListener('click', childAnnouncer);



