// $and: Returns documents where both queries match
// $or: Returns documents where either query matches // conditional operator , if they are same . that return 
// $nor: Returns documents where both queries fail to match
// $not: Returns documents where the query does not match

// $ne specifically checks for inequality with a single value.
// $not specifically checks for inequality with a single and multiple value 
$not --
// Find employees whose salary is not between 50000 and 70000
db.employees.find({ salary: { $not: { $gte: 50000, $lte: 70000 } } });
