// The splice() method -
//  can be used to add new items to  specified position in an array , without removing any existing elements

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Shahinsha", "Shahinu");
//  First Parameter - where new elements should be added (index)
// The second parameter -  how many elements should be removed 
// Third "" What element should be added?
console.log(fruits)