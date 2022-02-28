import sys

n = int(input())
t = []

for i in range(n):
    t.append(input())

t = list(set(t))

t.sort()
t.sort(key = len)

for e in t:
    print(e)