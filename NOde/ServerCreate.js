var http =require('http'); 
// This line imports the built-in http module, ... http mudule is a built in module -
// which allows you to create an HTTP server in Node.js.

// This line creates an HTTP server using the createServer method
http.createServer((req,res)=>{
  //  It takes a callback function with two parameters  (req.object)(res.object)
  res.write("<h1>Hello, World!</h1>");
  res.write(" world");
  // this  used to send resPonse to the client
  // we can send html,string to the client
  const myArray = [1, 2, 3, 4, 5];
  // Convert array to JSON string and send it
  // means array convert to string and send
  res.write(JSON.stringify(myArray));
  res.end("= ended");
  // This line ends the response and sends the string 'come  ' to the client.

  //(3) this used to send the response and end the response to the client
  //    otherwise  it will load continuously ; we should end the response to the client 

//   We didn't use "res.end()" on the server, it will load continuously

}).listen(3000);

// .listen(3000): This '.listen(3000)' makes the server listen on port like 3000

// It means that the server will be accessible at http://localhost:3000. 
// also 
// (It means make avilble port for server)