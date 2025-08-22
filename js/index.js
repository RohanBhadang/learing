// let a=7;

// if(a%2==0){
//     console.log("it is a even number")
// }
// else{
//     console.log("it is a odd number")
// }
// let a=10;
// let b=20;
// let c=9;

// if (a<b&&a<c) 
//     { console.log(a)

// }else if (b<a&&b<c)
//  {console.log(b)
    
// }
// else
//   { console.log(c)
    
// }

// let a=10;
// let b=20;
// let c=20;

// if(a<b+c&&b<c+a&&c<a+b){
//     console.log("done")
// }else{
//     console.log("no")
// }

// let a=10;
// let b=10;
// let c=10;
// if(a==b&&b==c&&c==a){
//     console.log("equiletral")

// }
// else if(a!=b&&b!=c&&c!=a){
//     console.log("scale")
// }
// else{console.log("isosc")

// }
//  let i=20
//  while(i>=1){
//     console.log(i)
//     i-=1;
//  }
// for(let i=1;i<=25;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for(let i=25;i>=1;i--){
//     console.log(i)}

// Pattern printing
// let n=6


// for(let row=1;row<=n;row++){


//     let str="";
//     for(let col=1;col<=n;col++){
//         str+="*";
//     }
//     console.log(str);
        
// }


// let n=6;

// for(let row=1;row<=n;row++){
//     let str="";
//     let space=n-row;
//     for(let j=1;j<=space;j++){
//         str+=" ";
//     }
//     for(let col=1;col<=row;col++){
//         str+="*";
//     }
//     console.log(str);
// }



// function fibonacci(n){
//     if(n==0){
//         console.log(0);
//         return;
//     }
//     if(n>=0){
//         console.log(0)
//         console.log(1);
//     }
//     let last=1;
//     let secondlast=0
//     for(let i=2;i<=n;i++){
//         let ans=last+secondlast;
//         console.log(ans)
//         secondlast=last;
//         last=ans;
//     }
// }
// // fibonacci(30)
// function swap(arr,i,j){
//     let tem=arr[i];
//     arr[i]=arr[j];
//     arr[j]=tem
// }



// function separate(arr){
//     let i=0;
//     let j=arr.length-1
//     while(i<=j){
//         if(arr[i]==1){
//         swap(arr,i,j)
//         j--
//     }
//     else{
//         i++;
//     }
// }

// }
// let arr=[1,0,1,0,1,0,1,0,0]
// separate(arr);
// console.log(arr)



//frequency count
// let str="naamaan"
// let freq={}
// for(const char of str){
//     if(freq[char]){
//         freq [char]+=1
//     }
//     else{
//         freq[char]=1;
//     }
// }
// console.log(freq)