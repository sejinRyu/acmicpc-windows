import sys
input = lambda : sys.stdin.readline().rstrip()

n, s = map(int, input().split(' '))

l = list(map(int, input().split(' ')))
sumT = [0 for _ in range(n)]

sum = 0
for i in range(n):
    sum += l[i]
    sumT[i] = sum

low = high = 0
mLen = 987654321
while low<=high and high<n:
    su = sumT[high] - (sumT[low-1] if low != 0 else 0)
    if su >= s:
        mLen = min(mLen, high-low+1)
    if su <= s:
        high += 1
    if su > s:
        low += 1

print(0 if mLen == 987654321 else mLen)