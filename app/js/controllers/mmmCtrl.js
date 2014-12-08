'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', 'mmmBackend', function($scope, mmmBackend) {
    $scope.calculate = function() {
      var nums = $scope.arr.numbers.split(' ');
      $scope.results.mean = mmmBackend.mean(nums);
      $scope.results.median = mmmBackend.median(nums);
      $scope.results.mode = mmmBackend.mode(nums);
    };
  }]);
};
