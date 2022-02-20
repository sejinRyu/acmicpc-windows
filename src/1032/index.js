const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');

const length = input[1].length;

let result = '';
for (let i = 0; i < length; i++) {
    let array = [];
    for (let j = 1; j <= Number(input[0]); j++) {
        array.push(input[j][i]);
    }
    result += (array.every((v, i, a)=> v === a[0]) ? input[1][i] : '?');
}

console.log(result);
