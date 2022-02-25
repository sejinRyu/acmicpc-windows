const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// [1] = 1, [3] = 2, [7] = 3
let dp = [0, 1, 2, 2];

const lines = Number(input[0]);

let count=0;

//이쪽이 시간오래걸리는듯
for(let i = 1; i <= lines; i++) {
    let task = [];
    let max = 0;
    [x, y] = input[i].split(' ').map(e=>Number(e));

    for(let j = y;j>=x;j--) {
        max = Math.max(jump(j), max);
    }
    console.log(max);

    /*for(let j = y;j<=x;j--) {
        if(!isNaN(dp[j]))
            max = Math.max(max, dp[j]);
        else task.push(p(j));
    }
    Promise.all(task).then(e=>console.log(Math.max(...e, max)));*/
    
}

function p(x) {
    return new Promise((resolve, reject) => {
        resolve(jump(x));
    });
}

function jump(x) {
    count++;
    if(!isNaN(dp[x])) {
        return dp[x];
    }
    else {
        //[x] = log, [3~6] = 2, [7~14] = 3, [15] = 4
        const log = Math.floor(Math.log2(x + 1));
        const z = 2**log - 1;
        dp[z] = log;

        const result = jump(x - z) + dp[z];
        dp[x] = result;
        return result;
    }
    
}

