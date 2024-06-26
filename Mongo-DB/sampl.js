//Largest and Smallest Salary department

db.employeeSalary.aggregate([ { $group: { _id: '$department', MaxSalary: { $max: '$salary' }, MinSalary: { $min: '$salary' } } }, 
{ $sort: { MaxSalary: -1 } }, { $facet: { MaxSalary: [{ $limit: 1 }], MinSalary: [{ $sort: { MinSalary: 1 } }, { $limit: 1 }] } }] )        