'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.calculate = function() {
      $http({
        method: 'POST',
        url: '/calculate',
        data: $scope.arr
      })
      .success(function(data) {
        $scope.results = data;
      })
      .error(function(data, status) {
        console.log(data);
      });
    };
  }]);
};
