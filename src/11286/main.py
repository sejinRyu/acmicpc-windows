import sys
import heapq
input = lambda : sys.stdin.readline().rstrip()

n = int(input())

h = []

for _ in range(n):
    e = int(input())
    if e == 0:
        if len(h) == 0: print(0)
        else: print(heapq.heappop(h)[1])
    else:
        heapq.heappush(h, (abs(e), e))