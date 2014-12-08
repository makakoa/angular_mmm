'use strict';

require('../../../app/js/client');
require('angular-mocks');

describe('mmm front test', function() {
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });

  describe('mmm calculation', function() {
    it('should calculate the mean median and mode', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.arr = {numbers: '1 2 3 3 4 5'};
      $scope.calculate();
      expect($scope.results.mean).toBe(3);
      expect($scope.results.median).toBe(3);
      expect($scope.results.mode).toBe(3);
    });
  });
});
