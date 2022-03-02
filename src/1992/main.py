import sys
input = lambda : sys.stdin.readline().rstrip()

def f(r, c, size):
    if size == 1:
        return table[r][c]
    half = int(size/2)
    l = ['' for e in range(4)]
    l[0] = f(r, c, half)
    l[1] = f(r, c + half, half)
    l[2] = f(r + half, c, half)
    l[3] = f(r + half, c + half, half)

    if l.count('0') == 4:
        return '0'
    if l.count('1') == 4:
        return '1'
    

    return '(' + ''.join(l) + ')'

n = int(input())
table = [[] for _ in range(n)]

for i in range(n):
    table[i] = list(input())

print(f(0,0,n))