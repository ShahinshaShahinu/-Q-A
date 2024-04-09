// $addToSet: Adds distinct/unique elements to an array  
// $pop: Removes the first or last element of an array
// $pull: Removes all elements from an array that match the query
// $push: Adds an element to an array

--not ,$addToSet() --//T and S are capital letters 

2 
// (1 indicates the last element)
// (-1 indicates the first element)

db.employeeSalary.updateOne(
  { name: 'rock' },
  { $pop: { hobbies: 1 } }
);
