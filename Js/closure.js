function outerFunciton(){
    let outerVariable='i am  from the outer Funciton' ;

    function innerFunciton(){
      console.log(outerVariable); // Inner function has access to outerVariables
    }

    return innerFunciton
}

const myClosure = outerFunciton() // myClosure is now a closure ;

myClosure() // This will still log "I am from the outer function" 
// A closure is a function having access to the parent scope, even after the parent function has closed.

