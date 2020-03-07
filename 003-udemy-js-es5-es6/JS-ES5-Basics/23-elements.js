//
console.log('=================================');
console.log('         SELECT AN ELEMENT       ');
console.log('=================================');
//

// these yellow arguments after '.' are 'methods' which are kind of like a function - but for objects (i think)

// 1st way:
// an old hard way
console.log('---------------------------------');


// 2nd way:
// by using html tags, ids, classes
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('div')[2]);
console.log(document.getElementsByClassName('specialClassName'));
console.log(document.getElementsByClassName('specialClassName')[1]);
console.log(document.getElementById('uniqueIdName'));
console.log('---------------------------------');

// 3rd way:
// by using query selector
console.log(document.querySelector('div')); // stops at first match
console.log(document.querySelectorAll('div'));
console.log(document.querySelector('.specialClassName')); // stops at first match
console.log(document.querySelectorAll('.specialClassName'));
console.log(document.querySelector('#uniqueIdName')); // stops at first match



//
console.log('=================================');
console.log('         CHANGE AN ELEMENT       ');
console.log('=================================');
//

var carName;
carName = "VOLVO";

document.getElementById("testP").innerHTML = carName;



//
console.log('=================================');
console.log('         CREATE AN ELEMENT       ');
console.log('=================================');
//

var parentDiv = document.querySelector('.header2Parent'); // create a variable from that 'div' in html with class name
var ulVar = parentDiv.querySelector('ul'); // we've already addressed the 'parentDiv', so there's no need to start from document object again to define something that's inside the parentDiv

var header2, header3;
header2 = document.createElement('h2');
header3 = document.createElement('h3');

console.log(header2); // it's been created in the memory, we should put it on the HTML DOM

header2.textContent = 'My new header!';
header2.style.color = 'red';
header2.style.fontSize = '200%';
console.log(header2); // it's still in the memory, but now it has attributes and text in it



// === 1ST WAY === //
header2.textContent = 'New header via appendChild!';
/////////////////////
parentDiv.appendChild(header2); // this puts the element under 'parentDiv' as last element


// === 2ND WAY === //
header3.innerHTML = 'New header via insertBefore!';
/////////////////////
parentDiv.insertBefore(header3, ulVar); // this puts the element under 'parentDiv' and right before 'ulVar'


// === 3RD WAY === // ** recommended **
var p1 = document.createElement('p');
var p2 = document.createElement('p');
var p3 = document.createElement('p');
var p4 = document.createElement('p');

p1.style.color = 'red';
p2.style.color = 'green';
p3.style.color = 'blue';
p4.style.color = 'pink';

p1.textContent = 'insertAdjacentElement(\'beforebegin\')';
p2.textContent = 'insertAdjacentElement(\'afterbegin\')';
p3.textContent = 'insertAdjacentElement(\'beforeend\')';
p4.textContent = 'insertAdjacentElement(\'afterend\')';

parentDiv.insertAdjacentElement('beforebegin', p1);
parentDiv.insertAdjacentElement('afterbegin', p2);
parentDiv.insertAdjacentElement('beforeend', p3);
parentDiv.insertAdjacentElement('afterend', p4);


// === 4TH WAY === // *** the best ***
parentDiv.insertAdjacentHTML('afterbegin','<h2 style="color:blue">insertAdjacentHTML(\'afterbegin\')</h2>')



//
console.log('=================================');
console.log('         DELETE AN ELEMENT       ');
console.log('=================================');
//

// like 'creating an element', you should first declare your JS variables from html elements

// === 1ST WAY === // compatible with older browsers like IE 7 or 8
// parentDiv.removeChild(ulVar);    // comment/uncomment to see the result


// === 2ND WAY === // more modern
// ulVar.remove();                  // comment/uncomment to see the result


