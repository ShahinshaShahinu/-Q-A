// IF YOU would like to insert a document it is not found , we can use the *upsert* option

db.posts.updateOne(
  { title: "Post Title 5" },
  {
    $set: {
      title: "Post Title 5",
      body: "Body of post.",
      category: "Event",
      likes: 5,
      tags: ["news", "events"],
      date: Date(),
    },
  },
  { upsert: true } // upDate the Document ,but  if it is not found , insert it ,
);
