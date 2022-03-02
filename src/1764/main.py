import sys
input = lambda : sys.stdin.readline().rstrip()

n, m = map(int, input().split(' '))

nn = ['' for e in range(n)]
mm = ['' for e in range(m)]

for i in range(n):
    nn[i] = input()

for i in range(m):
    mm[i] = input()

l = sorted(list(set(nn)&set(mm)))
print(len(l))
for e in l:
    print(e)
