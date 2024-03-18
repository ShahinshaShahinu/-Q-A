// // function Borrowing
//  applay() --  apply works similarly to call, but it accepts an array of arguments. 
// also argument through pass the obect

const person1 = { name: "Alice",
    age:12 ,
    occupation:'engineer' };

const Person2 ={name:'wikki'} 

function introduce(name,age,occupation){
    console.log(`Hi I am ${name} ,I am ${age} year old work on a ${occupation}`)
    console.log(
      `Hi I am ${this.name} ,I am ${this.age} year old work on a ${this.occupation}`
    );
}

introduce.apply(person1,['john',23,'doctor'])