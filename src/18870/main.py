import sys
input = lambda : sys.stdin.readline().rstrip()

n = int(input())

x = list(map(int,input().split(' ')))

arr = sorted(list(set(x)))

t = {}

for i in range(len(arr)):
    t[arr[i]] = i

print(' '.join([str(t[e]) for e in x]))