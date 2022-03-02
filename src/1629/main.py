import sys
input = lambda : sys.stdin.readline().rstrip()
sys.setrecursionlimit(10000)

a, b, q = map(int, input().split(' '))

def fpow(C, n):
	if n == 1:
		return C % q
	else:
		x = fpow(C, n//2)
		if n % 2 == 0:
			return x * x %q
		else:
			return x * x * C %q



print(fpow(a, b))