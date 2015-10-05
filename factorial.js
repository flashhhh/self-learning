'use strict';
function factorialRec(n, acc) {
    if (acc == null) acc = 1;
    if (n <= 0) return 0;
    if (n === 1) return acc;
    return factorialRec(n - 1, acc * n);
}

function factorialItr(n) {
    if (n <= 0) return 0;

    // js doesn't have any kind of range(start, end) function
    const range = [];
    for (let i = 1; i <= n; i++) {
        range.push(i);
    }

    return range.reduce((prev, cur) => { return prev * cur }, 1);
}

const testMap = [
    [10, 3628800],
    [5, 120],
    [3, 6],
    [2, 2],
    [1, 1],
    [0, 0],
    [-1, 0]
];

console.log("start:\n");
for (let testCase of testMap) {
    console.log(`fact(${testCase[0]}) === ${testCase[1]}`);
    console.log('recursion: ' + Boolean(factorialRec(testCase[0]) === testCase[1]));
    console.log('iteration: ' + Boolean(factorialItr(testCase[0]) === testCase[1]));
}
