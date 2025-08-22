function tower(n,a,b,c){
    if (n==1){
        console.log("shift 1 disk from "+a+" to "+c)
        return;
    }
    tower(n-1,a,c,b);
    console.log("shift disk "+n+" from "+a+" to "+c);
    tower(n-1,b,a,c);
    console.log("shift disk 1 from "+b+" to "+a);
}

tower(3,"A","B","C");