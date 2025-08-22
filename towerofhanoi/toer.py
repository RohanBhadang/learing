def tower(n,a ,b,c):
    if n==1:
     print (" pehli disk ko ",a,"se",c,"me dalo")
     return
    tower(n-1,a,c,b)
    print(" disk no ",n," ko ",a," se ",c," me dalo")
    tower(n-1,b,a,c)
    print(" pehli disk ko ",b," se ",a," me dalo")
    
tower(4,'X','Y','Z')