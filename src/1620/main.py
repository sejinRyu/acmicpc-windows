import sys
input = lambda : sys.stdin.readline().rstrip()

n, m = map(int, input().split(' '))

itos = {}
stoi = {}

for i in range(n):
    s = input()
    itos[i+1] = s
    stoi[s] = i+1


for i in range(m):
    s = input()
    try:
        s = int(s)
        print(itos[s])
    except ValueError:
        print(stoi[s])