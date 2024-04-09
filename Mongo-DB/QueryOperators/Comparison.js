// $eq: Values are equal
// $ne: Values are not equal (excludes one specific value)
// $gt: Value is greater than another value
// $gte: Value is greater than or equal to another value
// $lt: Value is less than another value
// $lte: Value is less than or equal to another value
// ->>> $in: Value is matched within an array 
// (! The $in operator in MongoDB checks if a specified field matches any value within a provided array,
//  and it returns the documents , that matches conditions)
// ----> $nin (excludes array of  specific value)
// "$nin - Returns documents where the value of a field does not match any value specified in an array.";