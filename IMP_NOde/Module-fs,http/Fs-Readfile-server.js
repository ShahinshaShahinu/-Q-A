var htt=require('http') ;
var fs = require('fs');

htt.createServer((req,res)=>{
    fs.readFile('fsModule.html',(err,data)=>{
        res.write(data) ;
        res.end()
    });
    
}).listen(3000)

//  we can use arrow funciton without use fucntion key word .. simple function , return automatically