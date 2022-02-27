const input = require('fs').readFileSync('/dev/stdin').toString();

let table = [1n]

init();
console.log(zeroCount(table[Number(input)]));

function init(){
    for(let i = 1n; i <= 1000n; i++){
        table[i] = table[i - 1n] * i;
    }
}

function zeroCount(n){
    let i = 0;
    while(true){
        if(n%10n != 0)
            return i;
        n /= 10n;
        i++;
    }
}


//////////////////////////////////
const n = Number(require('fs').readFileSync('/dev/stdin').toString());

console.log(f(n));

function f(n){
    return Math.floor(n/5)+Math.floor(n/25)+Math.floor(n/125)+Math.floor(n/625);
}

