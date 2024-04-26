var isSameAfterReversals = function (num) {
    let mod = num % 10;
    let div = num / 10;

   if(mod==0){
    return false
   }
   return true
};

isSameAfterReversals(1800) 