import sys
input = lambda : sys.stdin.readline().rstrip()

n, m = map(int, input().split(' '))

d = {}

for i in range(n):
    site, pw = input().split(' ')
    d[site] = pw

for i in range(m):
    print(d[input()])