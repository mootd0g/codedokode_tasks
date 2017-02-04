#4
Напиши функцию `fmap(a, gen)`, которая принимает на вход 2 функции, `a` и `gen`, где `gen` — функция-генератор вроде той, что была в первом задании. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из `gen` и пропускает его через функцию `a`. Пример:

```
var gen = sequence(1, 1);
function square(x) { return x * x; }
var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16
```

А, еще, сделай тогда, чтобы в качестве `gen` можно было указать функцию с аргументами, и при вызове

```
function add(a, b) { 
    return a + b; 
}
```

// Мы получаем новую функцию, которая вызвает `add`, и результат пропускает через функцию `square`

```
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
```

Эти аргументы бы передавались функции `gen`. Аргументов может быть любое количество.