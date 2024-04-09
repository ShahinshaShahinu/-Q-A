find()
// To select data from a collection in MongoDB, we can use the find() method

findOne();
// To select only one document, we can use the findOne() method.

Projection -
// projection is  which fields to include in the results. in mongodb
// We can use a 1 to include a field and 0 to exclude a field.
db.posts.find({}, { title: 1, date: 1 });

UpdateOne();
// The updateOne() method will update the first document that is found matching the provided query.
// that ( maches the spesific condition)/ 

Upsert 
// If you would like to insert the document if it is not found, you can use the upsert option.
// Update the document, but if not found insert it:

updateMany();
// The updateMany() method will update all documents that match the provided query.
db.posts.updateMany({}, { $inc: { likes: 1 } }); //Update likes on all documents by 1. $inc (increment) operator:
db.posts.updateMany({}, { $inc: { likes: -1 } });  //Update likes on all documents by decrease -1. $inc (decrement) operator:

deleteOne()
// The deleteOne() method will delete the first document that matches the  provided query

deleteMany()
// The deleteMany() method will delete all documents that match the query provided.



