// $regex: Allows the use of regular expressions when evaluating field values (return ducoument by evaluvate field values)
// $text: Performs a text search
// $where: Uses a JavaScript expression to match documents --

// The $where operator in MongoDB --- 
//  allows you to write JavaScript expressions to query documents in a collection.

db.employeeSalary.find({
  $where: function () {
    return this.salary > 60000 && this.department.includes("Engineering");
  },
});

// the $where operator used to write js in monogdb                 //// IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP IMP
