import sys

def checkString(param):
    ret = ''
    if param.count('()') != 0:
        raise 
    for e in param:
        if e not in ['0','1','2','3','4','5','6','7','8','9','(',')']:
            ret+='&'
        else:
            ret+=e
    return ret

def toEval(param):
    ret = ''
    for e in param:
        if e == '/':
            ret += '//'
        else: ret += e
    return ret
        
input=sys.stdin.readline

data=input().rstrip()


try:
    eval(checkString(data))
    print(eval(toEval(data)))
except:
    print("ROCK")
