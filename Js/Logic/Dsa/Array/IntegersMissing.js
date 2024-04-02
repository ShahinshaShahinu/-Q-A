const ar =[1,2,3,6,7,10,12,13];

for (let i = 0; i < ar.length; i++) {
    if(ar[i]+1==ar[i+1] && i<ar.length-1){
        continue; 
    }else{
        if(i+1!==ar.length){
            console.log(i+1)
        }
    }
    
}