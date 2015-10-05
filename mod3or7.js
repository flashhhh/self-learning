function magic(arrayOfIntegers) {
    return arrayOfIntegers
        .filter((int) => int % 3 === 0 || int % 7 === 0)
        .join(',');
}

console.log(magic([2,5,3,5,6,7,8,9,25,24,18,26,27,28,29,30,31]));
