'use strict'

function filter(arr, func) {
    return arr.filter(function(currentElement, idx, arr) {
        return func(currentElement);
    })
}

var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]

console.log(input); // [1, 2, 3, 4, 5, 6]
