String.prototype.replaceAt = function(index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
}

function simulate(m) {
    var width = m[0].length;
    var height = m.length;

    function moveDown(row, cell) {
        if (row < height - 1 && m[row][cell] === 'o' && m[row + 1][cell] === '.') {
            m[row] = m[row].replaceAt(cell, '.');
            m[row + 1] = m[row + 1].replaceAt(cell, 'o');
            moveDown(row + 1, cell);
        }
    }

    //height - 2: -1 because of common reverse loop and -1 because
    //we aren't calculating the bottom
    //so, if there are 5 rows, it will be 0, 1, 2, 3
    for (var row = height - 2; row >= 0; row--) {
        for (var cell = 0; cell < width; cell++) {
            moveDown(row, cell);
        }
    }
    

    return m;
}

var map = ["#o##o.....","#.......o.","..o#.o.#.o","#.o.#...#o","#oo.#..#o.","#oo.oo.o..","...##ooo#o","o.oo....o.","..ooo.....","..o..#oo.#","..o..#..oo","##o.#oo.oo","..ooo.ooo.","##..#oo#o.","o#.ooo...."];

console.log('map');
console.log(map);
console.log('sim');
console.log(simulate(map));
