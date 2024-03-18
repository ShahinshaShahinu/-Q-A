var fs=require('fs');
// //  create file with content   filename content 
// // 1
// fs.appendFile('NewFileAppend.txt','Hello -AppendFile',(err)=>{
//     if(err) throw err ;
//     console.log('saved ! file');
// });
// // 2
// //  create emty wile for writing
// fs.open("NewFile2.txt", "w", (err, file) => {
//   if (err) throw err;
//   console.log("saved !", file);
// });
// // "w" is  for writing

// // 3
fs.writeFile('write.txt','fs write file ,e it will replace all file content ',(err)=>{
    if(err) throw err
    console.log('saved file and replace content ');
})