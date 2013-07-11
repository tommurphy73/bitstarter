var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());


var message = function (file) {
var FILE_DEFAULT = "index.html";
file = file || FILE_DEFAULT;
var buffer = fs.readFileSync(file);
return (buffer.toString('utf-8'));
}


console.log(message("index.html"));





app.get('/', function(request, response) {
  response.send(message("index.html"));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
