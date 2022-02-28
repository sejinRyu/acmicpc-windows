import sys
input = lambda : sys.stdin.readline().rstrip()

exp = input().split('-')

for i in range(len(exp)):
    t = list(map(int,exp[i].split('+')))
    exp[i] = sum(t)

v = exp[0]
for e in exp[1:]:
    v -= e

print(v)