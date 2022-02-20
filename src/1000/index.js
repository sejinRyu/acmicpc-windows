console.log(require('fs').readFileSync("/dev/stdin").toString().split(' ').reduce((prev,curr)=>Number(prev)+Number(curr)));


