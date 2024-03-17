var fs = require('fs')

// fs.rename('oldfile name.txt','newfile.txt' (err)=>{})

fs.rename('fs.txt','shahinsha.txt',(err)=>{
    if(err) throw err.message
    console.log('file name changed ');
})