var shuffle = function (nums, n) {
    let Shuffle = [];
    let firstAr = [...nums.length<n], secondAr = [], shuf = 0;

   
    for (let j = n; j < nums.length; j++) {
        secondAr.push(nums[j])
    }
    if (firstAr.length < secondAr.length) {
        shuf = secondAr.length
    } else {
        shuf = firstAr.length
    }
    for (let i = 0; i < shuf; i++) {
        if (firstAr.length == shuf) {
            Shuffle.push(firstAr[i])
        }else if(firstAr.length<shuf&&i<shuf){
            Shuffle.push(firstAr[i])
        }

        if (secondAr.length == shuf) {
            Shuffle.push(secondAr[i])
        } else if (secondAr.length < shuf && i < shuf) {
            Shuffle.push(secondAr[i])
        }
        
    }


    return Shuffle
};

console.log(shuffle([1, 1, 2, 2], 2)); ''
