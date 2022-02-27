from collections import deque
import sys

def arrToStr(arr):
    if len(arr) == 0:
        return '[]'
    r = '['
    for e in arr:
        r += str(e)+','
    return r[:-1] + ']'

loop = int(input())

for i in range(loop):
    flag = False
    rdCommand = input()
    input()
    arr = deque(eval(input()))
    rCount = 0

    for e in rdCommand:
        if e == 'R':
            rCount += 1
        elif e == 'D':
            if len(arr) == 0:
                flag = True
                break
            if rCount % 2 == 0:
                arr.popleft()
            else : arr.pop()
    
    if flag == False:
        if rCount % 2 != 0:
            arr.reverse()
        print(arrToStr(arr))
    else: 
        print('error')