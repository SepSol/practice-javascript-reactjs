var headline = document.getElementById("mainHeading");
button.onclick = function () {
	var input = prompt("Enter your new heading:");
	headline.innerHTML = input;
};