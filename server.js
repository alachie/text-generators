var express = require('express');
var app = express();

app.use(express.static('build'))
app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.listen(80);