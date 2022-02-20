const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const targetChannel = Number(input[0]);
let channel = 100;

const m = Number(input[1]);

if(m == 0) {
    console.log(Math.min(Math.abs(targetChannel - channel), input[0].length));
    process.exit();
}
else if(m == 10) {
    console.log(Math.abs(targetChannel - channel));
    process.exit();
}

const breakButton = input[2].split(' ').map(e => Number(e));

const promiseUpTask = new Promise((resolve, reject) => {
    for(let i = targetChannel; i <= 1000000; i++) {
        if(isRightChannel(i))
            resolve(i);
    }
    resolve(210000000);
});

const promiseDownTask = new Promise((resolve, reject) => {
    for(let i = targetChannel; i >= 0; i--) {
        if(isRightChannel(i))
            resolve(i);
    }
    resolve(210000000);
});


Promise.all([promiseUpTask, promiseDownTask]).then(values => {
    let result = values.map(e=>Math.abs(e - targetChannel) + e.toString().length);
    result.push(Math.abs(targetChannel - channel));
    console.log(Math.min(...result));
});


function isRightChannel(channel) {
    return channel.toString().split('').every(e => !breakButton.includes(Number(e)));
}

