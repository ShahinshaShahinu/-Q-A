// Object.freeze() makes an object's properties unchangeable, preventing additions,
//    modifications, or deletions.
//   Example:

const obj = { name: "John" };
// Now obj is immutable
// Object.freeze(obj);

obj.name='shahinhsa',obj.age=34 ;delete obj.name;
console.log(obj);
console.log(Object.isFrozen(obj))   // it will check is forzen or not 
