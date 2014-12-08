'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', 'mmmBackend', function($scope, mmmBackend) {
    var mmm = new mmmBackend();
    $scope.calculate = function() {
      var nums = $scope.arr.numbers.split(' ');
      for (var i = 0; i < nums.length; i++) {
        nums[i] = +nums[i];
      }
      $scope.results = {'mean': mmm.mean(nums), 'median': mmm.median(nums), 'mode': mmm.mode(nums)};
    };
  }]);
};