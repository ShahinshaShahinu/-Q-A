let ar=[[1,2,3],[3,4,5]] ;
let priv
for (let i = 0; i < ar.length; i++) {
   let sum =0;
    let sub=ar[i]
    for (let j = 0; j < sub.length; j++) {
        sum += sub[j]
    }
     priv =sum ;
    if(priv<sum){
        priv=sum
    }
    
}

console.log(priv);