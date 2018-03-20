var express = require('express');
var app = express();
var request  = require('request');
var port = process.env.PORT || 8080;


app.use(express.static(__dirname + "/public"))

app.get('/api/prices*', function(req, res){
  var baseUrl = 'http://api.travelpayouts.com/v2/prices';
  var url = baseUrl + req.url.substring(('/api/prices').length);
  request(url, { headers: {"X-Access-Token": "5c61b72f81da16dfda7b47729c783f90"}}, function(err, response, body){
    res.json(JSON.parse(body).data);
  });
});

app.listen(port, function(){
  console.log('Connected to the port:' + port);
});
