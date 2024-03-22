// Object.seal() -- prevent adding or deleting properties  
// but allows you to modify the values of existing properties 

let obj={
    name:'john'
}

Object.seal(obj);

obj.name='shahinsha' ;
obj.age=34 
delete  obj.name 

console.log(obj)