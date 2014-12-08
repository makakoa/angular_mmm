'use strict';

require('../../../app/js/client');
require('angular-mocks');

describe('MMM controller', function() {
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

  describe('rest requests', function() {
    it('should make a post request', angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $httpBackend.expectPOST('/calculate').respond(200, {'mean': 3, 'median': 3, 'mode': 3});
      $scope.arr = {numbers: '1 2 3 3 4 5'};
      $scope.calculate();
      $httpBackend.flush();

      expect($scope.results.mean).toBe(3);
      expect($scope.results.median).toBe(3);
      expect($scope.results.mode).toBe(3);

      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    }));
  });
});
