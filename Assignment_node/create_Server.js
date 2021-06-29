var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('<html>');
  res.write('<head><title>Hello World!</title></head>');
  res.write('<body><h2>This is my first server object!</h2></body>');
  res.write('</html>');
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

