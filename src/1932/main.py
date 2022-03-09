import sys
import copy
input = lambda : sys.stdin.readline().rstrip()

n = int(input())

l = [int(input())]
for i in range(2,n+1):
    nl = list(map(int, input().split(' ')))
    
    nl[0] = nl[0] + l[0]
    for j in range(1, len(nl)-1):
        nl[j] = max(nl[j] + l[j-1], nl[j] + l[j])
    nl[-1] = nl[-1] + l[-1]
    l = copy.deepcopy(nl)

print(max(l))

