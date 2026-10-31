arr = [2, 1, 2, 3, 5, 7, 9, 10, 12, 14, 15, 16, 18, 14, 13]

var validMountainArray = function (arr) {
    if(arr[0]>arr[1]){
        return false
    }
    
    
   
    let f = false
    let k=false
    let c=0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return false
        }

        if(arr[i]<arr[i+1]){
        if(c==0){
            f=true
        }else{
            return false
        }
        }else if(f==true && arr[i]>arr[i+1]){
            c++
           k=true
        }
    }
  
return k
};
console.log(validMountainArray(arr));