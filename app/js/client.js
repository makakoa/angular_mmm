'use strict';

require('angular/angular');

var app = angular.module('app', []);

//services
require('./services/mmm_backend_service')(app);

//controllers
require('./controllers/mmmCtrl')(app);
