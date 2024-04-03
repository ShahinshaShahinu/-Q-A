//A factory function in JavaScript is a function that returns an object
//it  useful when you need to create multiple objects with similar properties and behavior 

function createPerson(name,age){
    return {
        name:name,
        age:age,
        greet:function(){
            console.log("hello ,my name is "+this.name+" and I am "+this.age+" year Old ")
        }
    }
}

const person1 =createPerson('alice ',23)
const person2 =createPerson('shahinsha',19);

console.log(person1)  // it will return an object 
person1.greet();
person2.greet()





