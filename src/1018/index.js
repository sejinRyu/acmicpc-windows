const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [row, column] = input[0].split(' ').map(e => Number(e));

const array = [];

input.slice(1).forEach(e => array.push(e.split('')));

let minimum = 64;

for(let i = 0; i < row - 7; i++) {
    for(let j = 0; j < column - 7; j++) {
        minimum = Math.min(...[minimum, checkChess(i, j, 'WB'.split('')), checkChess(i, j , 'BW'.split(''))]);
    }
}

console.log(minimum);

function checkChess(indexRow, indexColumn, pattern) {
    let count = 0;
    for(let row = indexRow; row < indexRow + 8; row++) {
        for(let column = indexColumn; column < indexColumn + 8; column += 2) {
            count += (array[row][column] == pattern[0] ? 0 : 1);
            count += (array[row][column + 1] == pattern[1] ? 0 : 1);
        }
        pattern.reverse();
    }
    return count;
}