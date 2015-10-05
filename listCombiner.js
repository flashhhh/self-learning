function combine(listA, listB) {
    var listC = [];

    var length = Math.max(listA.length, listB.length);
    for (var i = 0; i < length; i++) {
        var itemA = listA.shift();
        var itemB = listB.shift();
        if (itemA !== undefined) {
            listC.push(itemA);
        }
        if (itemB !== undefined) {
            listC.push(itemB);
        }
    }

    return listC;
}

var testMap = [
    [[[1, 2, 3], ['a', 'b', 'c']], [1, 'a', 2, 'b', 3, 'c']],
    [[[1, 2, 3], ['a']], [1, 'a', 2, 3]],
    [[[1], ['a', 'b']], [1, 'a', 'b']]
];

var assert = require('assert');

for (var i = 0; i < testMap.length; i++) {
    console.log('test:', testMap[i]);
    assert.deepEqual(combine.apply(null, testMap[i][0]), testMap[i][1]);
}

console.log('All is OK!');
