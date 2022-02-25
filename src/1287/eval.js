const input = require('fs').readFileSync('/dev/stdin').toString();

try {
    eval(check(input));
    //console.log(parse(input));
    console.log(eval(parse(input)).toString());
} catch(e) {
    console.log('ROCK');
}

function check(exp){
    exp = exp.replaceAll('+', '+');
    exp = exp.replaceAll('-', '+');
    exp = exp.replaceAll('*', '+');
    exp = exp.replaceAll('/', '+');
    exp = exp.replaceAll('()', '++++');
    
    return exp;
}

function parse(exp){
    exp = exp.replaceAll('+', ',+,');
    exp = exp.replaceAll('-', ',-,');
    exp = exp.replaceAll('*', ',*,');
    exp = exp.replaceAll('/', ',/,');
    exp = exp.replaceAll('(', ',(,');
    exp = exp.replaceAll(')', ',),');
    
    exp = exp.split(',').filter(e => e.length != 0).map(e => {
        if(!isOperator(e))
            return BigInt(e).toString() + 'n';
        return e;
    });

    return exp.join('');
}

function isOperator(param) {
    return isNaN(Number(param));
}