var express = require('express');
var app = express();
var routes = require('./routes');
var port = process.env.PORT || 8080;


app.use(express.static(__dirname + "/public"))
app.use('/api', routes);


app.listen(port, function(){
  console.log('You connected to the port:' + port);
});
