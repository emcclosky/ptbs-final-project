var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var flights = require('flights');

app.use(express.static(__dirname + "/public"))

app.get('/api/prices', function(req, res){
  var { origin, destinations } = req.query

  flights({origin, destinations: destinations.split(',')}).then(function(result){
    res.json(result);
  });
});

app.listen(port, function(){
  console.log('Connected to the port:' + port);
});
