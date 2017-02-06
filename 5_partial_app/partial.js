'use strict'	

function partial(func) {
	var partialArgs = [].slice.call(arguments, 1); // массив аргументов (кроме func) функции partitial 

	return function() {
		var funcArgs = [].slice.call(arguments); // массив аргументов функции func 
		return func.apply(null, partialArgs.concat(funcArgs));		
	}
}


function add(a, b) { 
	return a + b; 
}

function mult(a, b, c, d) { 
	return a * b * c * d; 
}

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6

console.log( "----------------------" );

var add10 = add.bind(null, 10); // bind для фиксации аргумента

console.log(add10(5));
