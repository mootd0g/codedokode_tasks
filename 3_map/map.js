'use strict'

function map(fn, array) {

	return array.map( function(currElement, curIdx, array) {
		return fn(currElement);
	} );
}

function sequence(start, step) {
	start = start || 0; // 1
	step = step || 1; // 1
	var newStart = start; // 1

	return function() {
		start = newStart;
		newStart += step;

		return start;
	};
}

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
