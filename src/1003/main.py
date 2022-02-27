import sys

def preCal():
    table = [(1,0),(0,1)]
    for i in range(2,100):
        table.append((table[i-1][0] + table[i-2][0], table[i-1][1] + table[i-2][1]))
    return table

table = preCal()
for i in range(int(input())):
    a = int(input())
    print(str(table[a][0])+' '+str(table[a][1]))
