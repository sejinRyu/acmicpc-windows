import sys
input = lambda : sys.stdin.readline().rstrip()

n = int(input())
arr = list(map(int, input().split(' ')))

l, r = 0, n-1
ml, mr = l, r
m = sys.maxsize

while l < r:
    s = arr[l] + arr[r]
    if abs(s) < m:
        m = abs(s)
        ml, mr = l, r

    #m,ml,mr = (s, l, r) if abs(s) <= abs(m) else (m, ml, mr)
    if s < 0: l += 1
    elif s > 0: r -= 1
    elif s == 0: break

print(str(arr[ml])+' '+str(arr[mr]))