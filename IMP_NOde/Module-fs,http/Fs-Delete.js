let fs = require('fs') ;

fs.unlink("sampleForUnlink.css", (err) => {
  if (err) throw err;
  console.log("deleted file");
});

fs.open('sampleForUnlink.css','w',(err,file)=>{
  //  no need the file argument 
  if (err) throw err;
  console.log("created new file --fs.open() file->", file);
})