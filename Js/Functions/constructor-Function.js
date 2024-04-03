// A constructor function in JavaScript is a function used to create and initialize
//  objects with properties and methods.

// object is  a collection of key-value pairs,
// an instance  a unique copy of an object created using a constructor function
// class
class person{
    constructor(name , age){
        this.name=name,
        this.age=age
    }
}

const person1=new person('shahinsha',12);
const person2=new person('ak47',34);

console.log('personONe-', person1,'PersonTwo-', person2);
console.log(person1.age,person2.age);

/// function 

function PersonFun(name,age ){
    this.name=name ,
    this.age=age 
}
const FunPerson1=new PersonFun('alice',23)
const FunPerson2=new PersonFun('Bob',12);

console.log(FunPerson1,FunPerson2)