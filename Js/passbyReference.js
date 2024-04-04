//Pass by Value: it will modify original resoursess or array or object 

function modifyArr(x){
    x[0]=0;
    console.log(x);     
}
let ar = [5,10,15,20];
modifyArr(ar) ;
console.log(ar);
