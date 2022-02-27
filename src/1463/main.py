import sys

table = [0,0,1]

def preCal():
    for i in range(3, 1000001):
        t = []
        if i % 3 == 0:
            t.append(table[int(i/3)])
        if i % 2 == 0:
            t.append(table[int(i/2)])
        t.append(table[i-1])
        table.append(min(t)+1)

preCal()
print(table[int(input())])