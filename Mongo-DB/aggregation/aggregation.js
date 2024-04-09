// Aggregation:- is a way of processing a large number of documents in a collection 
// by means of passing them through different stages is known aggragation

// This /*aggregation stage*/  groups documents by the unique _id
//limits :-This aggregation stage */limits*/ the number of documents passed to the next stage.
//$project: Reshapes documents by including/excluding/adding fields in MongoDB queries.
//      ($project is a MongoDB aggregation pipeline stage used to )
//      {Project--add field}  likesDoubled:  { $literal: 10 } // Adding a fixed value
//      include and exclude fields simultaneously .. it is not allow 

//$match :- It will filter documents that match the query provided. 

//$addFields :-This aggregation stage adds new fields to documents.
//  it does not affect the original collection or documents;
