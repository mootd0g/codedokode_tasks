'use strict'

function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

function testThis(a) {
    console.log("x=" + this.x + ", a=" + a);
}

global.x = 1;
var ctx = { x: 2 };

var boundFunction = bind(testThis, ctx); // == ctx.testThis;
console.log(boundFunction(100)); // x=2, a= 100 == ctx.testThis()

var boundFunction2 = testThis.bind(ctx);
console.log(boundFunction2(100));
