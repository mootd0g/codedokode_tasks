'use strict'	

function partialAny(func) {
	var partialArgs = [].slice.call(arguments, 1); // массив аргументов (кроме func) функции partitial 

	return function() {
		var funcArgs = [].slice.call(arguments).reverse(); // массив аргументов функции func, reverse => pop
		var argumentsToApply = partialArgs.map(function(currentElement, idx, partialArgs) {
			return (currentElement === undefined) ? funcArgs.pop() : currentElement;
		});
		return func.apply(null, argumentsToApply);		
	}
}



function test(a, b, c) { 
	return 'a=' + a + ',b=' + b + ',c=' + c; 
}

var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3
