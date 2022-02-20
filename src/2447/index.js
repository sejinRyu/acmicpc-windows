const input = Number(require('fs').readFileSync("/dev/stdin").toString());
let result = '';

for(let i = 0; i < input; i++){
    for(let j = 0; j < input; j++){
        printStar(i, j, input);
    }
    result += '\n';
}
console.log(result);

function printStar(i, j, v){
    if(i % 3 == 1 && j % 3 == 1)
        result += ' ';
    else if(v == 1)
        result += '*';
    else
        printStar(Math.floor(i / 3), Math.floor(j / 3), Math.floor(v / 3));
    
}
