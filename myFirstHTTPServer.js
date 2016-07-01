var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/eatShitHank.html'));
});

app.listen(8080, function(){
  console.log("Server listening on: http://localhost:%s", 8080);
});
