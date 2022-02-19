const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [x, y, w, h] = input.map(e => Number(e));

console.log(Math.min(...[x, y, w - x, h - y]));