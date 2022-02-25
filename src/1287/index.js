
const input = parse(require('fs').readFileSync('/dev/stdin').toString());

if(isRightExp(input)) {
    console.log('ROCK');
    process.exit();
}


console.log(postfix(infixToPostfix(input)));


function parse(exp){
    exp = exp.replaceAll('+', ',+,');
    exp = exp.replaceAll('-', ',-,');
    exp = exp.replaceAll('*', ',*,');
    exp = exp.replaceAll('/', ',/,');
    exp = exp.replaceAll('(', ',(,');
    exp = exp.replaceAll(')', ',),');
    
    exp = exp.split(',').filter(e => e.length != 0);

    return exp;
}

function isOperator(param) {
    return isNaN(Number(param));
}

function infixToPostfix(expArr) {
    let res = [];
    let stack = [];

    for(let e of expArr) {
        if(isOperator(e)) {
            if(e == '(')
                stack.push(e);
            else if(e == ')') {
                let op;
                while((op=stack.pop())!='(')
                    res.push(op);
            }
            else {
                while((stack.length != 0) && (priority(e) <= priority(stack[stack.length-1])))
                    res.push(stack.pop());
                stack.push(e);
            }
        }
        else
            res.push(e);
    }

    while(stack.length != 0)
        res.push(stack.pop());

    return res;
}

function priority(e) {
    if(e == '(' || e == ')') return 0;
    if(e == '+' || e == '-') return 1;
    if(e == '*' || e == '/') return 2;
}

function isRightExp(exp) {
    let count = 0;
    for(let i = 0; i < exp.length - 1; i++)
        if(exp[i] == '(' && exp[i+1] == ')')
            return false;

    for(let e of exp) {
        if(e == '(')
            count++;
        if(e == ')')
            count--;
        if(count < 0)
            return false;
    }
    if(count != 0)
        return false;

}

function postfix(exp) {
    let stack = [];
    for(let e of exp) {
        if(isOperator(e)) {
            if(stack.length < 2)
                return 'ROCK';
            let b = stack.pop();
            let a = stack.pop();

            if(e == '+')
                stack.push(a + b);
            else if(e == '-')
                stack.push(a - b);
            else if(e == '*')
                stack.push(a * b);
            else if(e == '/') {
                if(b == 0)
                    return 'ROCK';
                stack.push(a / b);
            }
        }
        else {
            stack.push(BigInt(e));
        }
    }
    if(stack.length == 1)
        return stack[0].toString();
    else return 'ROCK';
}