import sys
input = lambda : sys.stdin.readline().rstrip()

n, k = map(int, input().split(' '))

a = [0] * n

for i in range(n):
    a[i] = int(input())

a.reverse()

count = 0

for e in a:
    count += int(k/e)
    k %= e

print(count)