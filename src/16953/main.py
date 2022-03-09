import sys
sys.setrecursionlimit(10**8)
input = lambda : sys.stdin.readline().rstrip()

s, e = map(int, input().split(' '))

def rev(p, n):
    if p < s:
        return -1
    if p == s:
        return n
    if p % 10 == 1:
        return rev(p//10, n+1)
    if p & 1 == 0:
        return rev(p//2, n+1)
    return -1

print(rev(e, 1))