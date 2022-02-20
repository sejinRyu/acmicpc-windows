const input = require('fs').readFileSync('/dev/stdin').toString();

let data = input.split('\n').slice(1).map(e=>e.trim());

data = Array.from(new Set(data))

data = data.sort((a, b) => 
    (a.length == b.length ? (a < b ? -1 : (a > b ? 1 : 0)) : a.length - b.length)
);

data.forEach(e => console.log(e));
