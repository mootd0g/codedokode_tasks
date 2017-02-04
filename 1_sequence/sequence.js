'use strict'

function sequence(start, step) {
	start = start || 0;
	step = step || 1;

	return function() {
		start += step;
		return start - step;
	};
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8
