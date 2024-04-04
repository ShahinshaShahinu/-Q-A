// Pass by Value:
function modifyvalue(x){
    x=10 ;
    console.log(x)
}
let  a = 5;
modifyvalue(a);
console.log(a)  // unchangable 



// Copies the value of the variable to the function.
// Changes inside the function don't affect the original variable.
// Applies to primitive data types such as numbers, strings, and booleans.