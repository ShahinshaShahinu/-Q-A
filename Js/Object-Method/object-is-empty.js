let obj1={
    name:'alice'
}
let obj2 ={
    
}

function isEmpty(obj){
    // return Object.keys(obj).length===0
    if(Object.keys(obj).length===0){
        return true
    }else{
        return false
    }
}
console.log(isEmpty(obj1))