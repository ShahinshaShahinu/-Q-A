/* Generator functions are special functions in JavaScript that can be paused and resumed,
  allowing for iterable sequences to be generated.  */

  function* Generator() {    // generator function declared using the function* syntax /keyword 
    yield 'helloo';
    yield 2;                   //, yield is used to pause execution and return a value
    yield 3;
  }

  const generator = Generator();

//  Each time generator.next() is called
//   the function resumes execution until the next yield statement, 
// and the yielded value is returned in the value property of the iterator result

  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());

//   yielded value it will return in the value property 