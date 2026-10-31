let ar = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] ;

for (let i = 0; i < ar.length; i++) {
    let flag=true
    for (let j = 2; j < ar[i]; j++) {
        if(ar[i]%j==0){
            flag=false
            break
        }
        
    }
    if(flag && ar[i]>1){
        console.log(ar[i]);
    }
    
}

//  2, 3, 5, 7, 11, 13, 17, 19,