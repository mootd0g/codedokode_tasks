'use strict'

function sequence(start, step) {
	start = start || 0; 
	step = step || 1; 
	var newStart = start; 

	return function() {
		start = newStart;
		newStart += step;

		return start;
	};
}

function take(gen, x) {
	var resultsArray = [];

	for (; x > 0; x--) {
		resultsArray.push( gen() ); 
	}

	return resultsArray;
}

var gen2 = sequence(0, 2);
console.log( take(gen2, 5) ); // [0, 2, 4, 6, 8 ]
