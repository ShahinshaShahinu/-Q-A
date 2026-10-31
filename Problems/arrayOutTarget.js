let nums = [-3, 4, 3, 90],target = 0;
let opr =[]
for (let i = 0; i < nums.length; i++) {
    
    for (let j = i+1; j < nums.length; j++) {
        
        let ss = nums[i] + nums[j] ;

        if(ss==target) opr.push(i,j)
    }
}

console.log(opr);