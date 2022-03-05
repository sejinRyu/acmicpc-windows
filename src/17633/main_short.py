import math,random
g=random.randrange
def o(x,y,p):
    r=1
    x%=p
    while y>0:
        if y&1:r=(r*x)%p
        y>>=1
        x=(x*x)%p
    return r
def m(n,a):
    r=0
    d=n-1
    while d&1==0:
        r+=1
        d//=2
    x=o(a,d,n)
    if x==1 or x==n-1:return False
    for _ in range(r-1):
        x=o(x,2,n)
        if x==n-1:return False
    return True
def s(n):
    if n==2:return True
    if n&1==0 or n==1:return False
    for a in [2,3,5,7,11,13,17,19,23,29,31,37,41]:
        if n==a:return True
        if m(n,a):return False
    return True
def r(n):
    if s(n):return n
    if n==1:return 1
    if n&1==0:return 2
    x=y=g(2,n)
    c=g(1,n)
    d=1
    while d==1:
        x=(x*x+c)%n
        y=(y*y+c)%n
        y=(y*y+c)%n
        d=math.gcd(abs(x-y),n)
        if d==n:return r(n)
    if s(d):return d
    else:return r(d)
d={}
n=a=int(input())
q=w=False
while a&3==0:a>>=2
while n>1:
    b=r(n)
    try:d[b]+=1
    except:d[b]=1
    n//=b
for i in d:
    if i!=2 and i%4==3 and d[i]%2==1:q=True
    if d[i]%2==1:w=True
if a&7==7:e=4
elif q:e=3
elif w:e=2
else:e=1
print(e)