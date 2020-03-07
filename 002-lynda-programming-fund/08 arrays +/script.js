var input = prompt("Enter a number:");
var myNumber = Number(input);


if ( isNaN(myNumber) ) {
	while ( isNaN(myNumber) ){
		input = prompt("That was NOT a number, try again:");
		myNumber = Number(input);
	}
	alert("It was a number!");
} else {
	alert("It was a number!");
}

/*
if ( !isNaN(myNumber) ) {
	alert("It's a number!");
} else {
	alert("It's NOT a number!");
}
*/

