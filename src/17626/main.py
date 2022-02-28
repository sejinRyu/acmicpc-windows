import sys
input = lambda : sys.stdin.readline().rstrip()

n = int(input())

dp = [0] * (n+1)

for i in range(1, len(dp)):
    if i ** 0.5 == int(i ** 0.5):
        dp[i] = 1
    else:
        l = []
        for j in range(1, int(i**0.5) + 1):
            l.append(dp[j**2] + dp[i - j**2])
        dp[i] = min(l)

print(dp[-1])