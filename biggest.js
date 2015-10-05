function sort(itemA, itemB) {
    var string = {
        A: itemA.toString(),
        B: itemB.toString()
    };
    var diff = string.A.length - string.B.length;
    var biggest;
    if (diff > 0) {
        itemA = Math.round(itemA / (10 * diff));
        biggest = 'A';
    } else if (diff < 0) {
        itemB = Math.round(itemB / (10 * -diff));
        biggest = 'B';
    }

    if (itemA > itemB) {
        return -1;
    } else if (itemA < itemB) {
        return 1;
    } else {
        // priority to the smallest
        if (biggest === 'A') {
            return 1;
        } else if (biggest === 'B') {
            return -1;
        } else {
            return 0;
        }
    }
}

function biggest(numbers) {
    numbers.sort(sort);
    return parseInt(numbers.join(''));
}

var testMap = [
    [[50, 2, 1, 9], 95021],
    [[85, 885], 88585],
    [[90, 901], 90901],
    [[90, 900], 90900],
    [[30, 303], 30330],
];

var assert = require('assert');

for (var i = 0; i < testMap.length; i++) {
    console.log('test: ', testMap[i]);
    assert.strictEqual(biggest(testMap[i][0]), testMap[i][1]);
}

console.log('OK');
