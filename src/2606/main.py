import sys
input = lambda : sys.stdin.readline().rstrip()

def dfs(adj, v, visit):
    visit[v] = True

    for i in adj[v]:
        if not visit[i]:
            dfs(adj, i, visit)

n = int(input())
m = int(input())

adj = [[] for i in range(n+1)]

for i in range(m):
    a, b = map(int, input().split(' '))
    adj[a].append(b)
    adj[b].append(a)

visit = [False] * (n+1)
dfs(adj, 1, visit)

print(visit.count(True)-1)
