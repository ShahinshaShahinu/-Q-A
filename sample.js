const numbers = [1, 2, 3, 4, 5];
 
const sum = numbers.reduce((acum,current)=>{
        return acum+current
});
console.log(sum)