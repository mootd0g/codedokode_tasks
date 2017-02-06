'use strict'

function pluck(arr, key) {
    return arr.map(function(currentElement, idx, arr) {
        for (var currentKey in currentElement) {
            if (currentKey == key)
                return currentElement[currentKey];
            return undefined; 
        }
    });
}

var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']
