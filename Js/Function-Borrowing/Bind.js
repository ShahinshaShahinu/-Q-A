// // function Borrowing
//  bind() --method  argument through pass the obect , return a new function ,
// It will executes when the that  function is called

const person = {
    name:'alice ',
    age:34
}
function bindExample(greet ,Today){
    console.log(greet +' '+Today ,' I am ',this.name ,' My age is ',this.age);
}

const BindPerson=bindExample.bind(person,' HEllo ,');
BindPerson('Good Morning');