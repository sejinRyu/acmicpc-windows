const input = require('fs').readFileSync("/dev/stdin").toString().trim().toUpperCase();

if(input.length === 0)
    console.log('?');
else {
    let count = {};

    for(let c of input)
    {
        if(count[c] == undefined)
            count[c] = 0;
        count[c]++;
    }
    count[' '] = -1;
    const maxValue = Math.max(...Object.values(count));
    const maxKey1 = Object.keys(count).find(key=>count[key] == maxValue);
    
    count[maxKey1] = 0;
    if(Object.keys(count).find(key=>count[key] == maxValue) == undefined)
        console.log(maxKey1);
    else console.log('?');
    
    
}

