'use strict';

var express = require('express');
var mmm = require('./lib/mmm.js');
var bp = require('body-parser');
var app = express();

app.use(bp.json());
app.use(express.static(__dirname + '/build'));

app.post('/calculate', function(req, res) {
  var nums = req.body.numbers.split(' ');
  for (var i = 0; i < nums.length; i++) {nums[i] = +nums[i];}
  var result = {};
  result.mean = mmm.mean(nums);
  result.median = mmm.median(nums);
  result.mode = mmm.mode(nums);
  res.json(result);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server listening on ' + port);
});
