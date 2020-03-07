var input = prompt("Enter a number:");
var myNumber = Number(input);

/*
if ( isNaN(myNumber) ) {
	alert("It's NOT a number!");
} else {
	alert("It's a number!");
}
*/

if ( !isNaN(myNumber) ) {
	alert("It's a number!");
} else {
	alert("It's NOT a number!");
}


