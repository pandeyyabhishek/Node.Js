// !http
// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
// To include the HTTP module, use the require() method:


//! Node.js as a Web Server
// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

// Use the createServer() method to create an HTTP server:

var http =require('http')

// server is created below.
          /*  http.createServer(function(reqest,response){

                *now give or write a response to the client
                response.write('Hello World, I am from the server ');
                response.end();// end the response
            }).listen(8000); //the server object listens on port 8080
            */


// !Add an HTTP Header
// If the response from the HTTP server is supposed to be displayed as HTML,
//  you should include an HTTP header with the correct content type:

            // var http =require('http');

            // http.createServer(function(req,res){
            //     res.writeHead(200,{"Content-Type": 'text/html'});
            //     res.write("<h1>this is and http header(used to display the response from server as html<h1/>)");
            //     res.end();
            // }).listen(8000); //the server object listens on port 8000

// The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.


//! Read the Query String
// ?The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

// *This object has a property called "url" which holds the part of the url that comes after the domain name

                    var http=require('http');
                    http.createServer((req,res)=>{
                        res.writeHead(200,{});
                        res.write(`Your are on ${req.url}`);
                        res.end();
                    }).listen(8000);