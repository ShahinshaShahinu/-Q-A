// $first accumulator to select the first value encountered/ directly within each group

db.posts.aggregate([
  {
    $group: {
      _id: "$_id",
      title: { $first: "$title" },
      body: { $first: "$body" },
      category: { $first: "$category" },
      date: { $first: "$date" },
      likes: { $first: "$likes" },
      tags: { $first: "$tags" },
      age: { $first: "$age" },
    },
  },
  { $out: "n" },
]);
