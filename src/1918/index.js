const input = require('fs').readFileSync('/dev/stdin').toString().split('');

console.log(infixToPostfix(input).join(''));

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
    else return -1;
}

function isOperator(e) {
    return priority(e) != -1;

}
