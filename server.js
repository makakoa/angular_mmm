'use strict';

var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(bp.json());
app.use(express.static(__dirname + '/build'));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server listening on ' + port);
});
