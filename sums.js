function sumForLoop(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

function sumWhileLoop(numbers) {
    var sum = 0;
    var i = 0;

    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }

    return sum;
}

function sumRecursion(numbers, sum) {
    if (sum == undefined) {
        sum = 0;
    }
    
    if (numbers.length > 0) {
        return sumRecursion(numbers, sum + numbers.shift());
    } else {
        return sum;
    }
}

var testMap = [
    [[1, 2, 3], 6],
    [[], 0]
];

var assert = require('assert');

for (var i = 0; i < testMap.length; i++) {
    console.log('Test for ', testMap[i]);
    console.log('for');
    assert.strictEqual(sumForLoop(testMap[i][0]), testMap[i][1]);
    console.log('while');
    assert.strictEqual(sumWhileLoop(testMap[i][0]), testMap[i][1]);
    console.log('recursion');
    assert.strictEqual(sumRecursion(testMap[i][0]), testMap[i][1]);
}

console.log('All is fine');
