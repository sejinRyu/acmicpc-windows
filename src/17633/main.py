import sys
import random
import math
import collections
input = lambda : sys.stdin.readline().rstrip()


def pow(x, y, p):
    res = 1
    x %= p
    while y > 0:
        if y & 1:
            res = (res * x) % p
        y >>= 1
        x = (x**2) % p
    return res

 
def millerRabin(n, a):
        r = 0
        d = n-1
        while d & 1 == 0:
            r += 1
            d //= 2
 
        x = pow(a, d, n)
        if x == 1 or x == n-1:
            return True
 
        for i in range(r-1):
            x = pow(x, 2, n)
            if x == n - 1:
                return True
        return False
 
def isPrime(n):
    pList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
    if n == 1:
        return False
    if n == 2 or n == 3:
        return True
    if n & 1 == 0:
        return False
    for a in pList:
        if n == a:
            return True
        if not millerRabin(n, a):
            return False
    return True
 
 
def pollardRho(n):
    if isPrime(n):
        return n
    if n == 1:
        return 1
    if n & 1 == 0:
        return 2
    x = random.randrange(2, n)
    y = x
    c = random.randrange(1, n)
    d = 1
    while d == 1:
        x = ((x ** 2 % n) + c + n) % n
        y = ((y ** 2 % n) + c + n) % n
        y = ((y ** 2 % n) + c + n) % n
        d = math.gcd(abs(x - y), n)
        if d == n:
            return pollardRho(n)
    if isPrime(d):
        return d
    else:
        return pollardRho(d)

def getFactor(n):
    list = []
    while n > 1:
        div = pollardRho(n)
        list.append(div)
        n //= div
    
    list.sort()
    return list

def fourSquares(n):
    while n & 3 == 0:
        n //= 4
    return n & 7 == 7


def threeSquares(n):
    list = getFactor(n)

    c = collections.Counter()
    c.update(list)
    for key, value in c.items():
        if key & 3 == 3 and value & 1 == 1:
            return True
    return False

def twoSquares(n):
    return n != int(n**0.5) ** 2

n = int(input())

if fourSquares(n):
    print(4)
elif threeSquares(n):
    print(3)
elif twoSquares(n):
    print(2)
else: print(1)

 