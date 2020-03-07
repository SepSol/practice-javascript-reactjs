// The 'document' object

// === PROPS === //
console.log(document); // outputs all the available functions and props

console.log(document.title); // outputs the <title> in HTML, BEFORE the <script>
console.log(document.body); // outputs all the available commands
console.log(document.body.children); // outputs an array with <body> elements
console.log(document.body.children[0]); // outputs a part of the body array
console.log(document.body.children[0].textContent); // outputs its content
console.log(document.body.children[0].style.color); //outputs its color

// === MODIFIERS === //
document.body.children[0].textContent = 'changed text content';
document.body.children[0].style.color = 'red';