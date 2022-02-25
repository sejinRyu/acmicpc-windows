[a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(e=>Number(e));
console.log(a > b ? '>' : (a == b ? '==' : '<'));