'use strict'

function fmap(a, gen) {

	return function() {
		if (arguments) {
			return a( gen.apply(null, arguments) );
		}

		return a( gen() );
	}
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

function add(a, b) { 
    return a + b; 
}

var gen = sequence(1, 1);
function square(x) { return x * x; }
var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16

// Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
