import sys

input = lambda : sys.stdin.readline().rstrip()

N, M = map(int,input().split(' '))

table = list(map(int,input().split(' ')))

sumTable = [0] * (N + 1)

for i in range(N):
    sumTable[i+1] = sumTable[i] + table[i]

for i in range(M):
    s, e = map(int, input().split(' '))
    print(sumTable[e] - sumTable[s-1])
