var express = require('express');
var startingLocation = require('./user-airport');
var router = express.Router();


router.post('/startingAirport', function(req, res){
    var airport = {airport: req.body.airport};
//placeholder until correct syntax
    ['user-airport'].startingAirport.push(airport);
    res.status(201).json(airport);
});

// var todo = require('./todo');

// router.post('/todos', function(req, res){
//     var task = {id: ++todo.currentId, task: req.body.task, completed: false};
//     todo.list.push(task);
//     res.status(201).json(task);
// });


module.exports = router;
