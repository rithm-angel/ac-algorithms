//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user
//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"
//Bonus 2: Make both numbers whole integers (aka round to the nearest integer)

var r = parseInt(prompt("Please enter the radius."));

function circleCalculation() {
		var area = Math.round(Math.PI * (Math.pow(r, 2)));	

// 	var area = Math.round(Math.PI * (r * r));	
	var perimeter = Math.round(2 * Math.PI * r);

	
console.log("The area of the circle is " + area + " and the perimeter of the circle is " + perimeter + ".");
}

circleCalculation(r);

