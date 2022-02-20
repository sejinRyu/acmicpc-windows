const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');

if(input.length == 1 && input[0].length == 0)
    console.log(0);
else console.log(input.length);

