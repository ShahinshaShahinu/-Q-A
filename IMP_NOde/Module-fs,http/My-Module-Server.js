var http =require('http') ;
var dt =require('./Own-Module')
http.createServer((req,res)=>{
  res.writeHead(200, {
    "Content-Type": "text/html",
    // "Content-Type": "text/plain",
  });
  // If the response from the HTTP server wd needs to be displayed as HTML / plain text 
  // we should include an HTTP header with the correct content type:
  // it will change to html 
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(3000)  


// HTTP സെർവർ wd-ൽ നിന്നുള്ള പ്രതികരണം HTML ആയി display chayyanamengil 
//  correct aaya content type oru HTTP header include cheyanam 