const input = require('fs').readFileSync("/dev/stdin").toString();

let memory = [0,1,1]

console.log(fibonacci(Number(input)).toString());


function fibonacci(n){
    if(memory[n] == undefined)
        memory[n] = fibonacci(n-1)+fibonacci(n-2);
    return BigInt(memory[n]);
}