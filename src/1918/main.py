import sys

def priority(e):
    if e == '(' or e == ')': return 0
    if e == '+' or e == '-': return 1
    if e == '*' or e == '/': return 2
    return -1

def isOperator(e):
    return priority(e) != -1

def infixToPostfix(expArr):
    res = []
    stack = []

    for e in expArr:
        if isOperator(e):
            if e == '(':
                stack.append(e)
            elif e == ')':
                op = stack.pop()
                while op != '(':
                    res.append(op)
                    op = stack.pop()
            else:
                while len(stack) != 0 and priority(e) <= priority(stack[-1]):
                    res.append(stack.pop())
                stack.append(e)
        else:
            res.append(e)
    
    while len(stack)!=0:
        res.append(stack.pop())
    
    return res

print(''.join(infixToPostfix([e for e in input()])))

