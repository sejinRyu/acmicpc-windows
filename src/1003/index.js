const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(e=>Number(e));

let table = [[1n,0n], [0n,1n]];

preCal();

for(let i = 1; i <= input[0]; i++){
    console.log(table[i][0]+' '+table[i][1]);
}

function preCal(){
    for(let i = 2; i < 200; i++)
        table[i] = [table[i-1][0] + table[i-2][0], table[i-1][1] + table[i-2][1]];
    
}