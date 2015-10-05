var assert = require('assert');
function fib(limit) {
    if (limit == null) {
        limit = 1;
    }

    assert.equal(limit > 0, true);

    var a = 0;
    var b = 1;
    var tmp;
    var values = [0];

    for (var i = 0; i < limit - 1; i++) {
        tmp = b;
        b += a;
        a = tmp;
        values.push(a);
    }

    return values;
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(10));
console.log(fib(100));
