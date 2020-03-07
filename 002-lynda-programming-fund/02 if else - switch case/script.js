
// input
var input;
input = prompt ("Enter a number:");
// (if & else) & (switch & case)



	if( (input >= 100) && (input < 1000) ) {
			switch (input) {
					case "100" : alert("It's a multiple of 100."); break;
					case "200" : alert("It's a multiple of 100."); break;
					case "300" : alert("It's a multiple of 100."); break;
					case "400" : alert("It's a multiple of 100."); break;
					case "500" : alert("It's a multiple of 100."); break;
					case "600" : alert("It's a multiple of 100."); break;
					case "700" : alert("It's a multiple of 100."); break;
					case "800" : alert("It's a multiple of 100."); break;
					case "900" : alert("It's a multiple of 100."); break;
					default    : alert("Your value has 3 digits.");
			}
			
	} if ( (input > 2000) || (input < 20) ) {
				alert("Your input is special!")
			} else {

				// output
				var output;
				output = "Your output is " + input;

				// alert
				alert (output);

			}
			