'use strict';

module.exports = function(app) {
  app.factory('mmmBackend', [function() {
    return function () {
      this.mean = function() {
        var nums = arguments[0];
        
        var sum = 0;
        for (var i = 0; i < nums.length; i++) {
          sum += Number(nums[i]);
        }
        return (sum / nums.length);
      };

      this.median = function() {
        var nums = arguments[0];

        nums.sort(function(a, b) {
          return a - b;
        });
        if (nums.length%2 === 0) {
          return (nums[nums.length/2 - 1] + nums[nums.length/2])/2;
        } else {
          return nums[(nums.length - 1)/2];
        }
      };

      this.mode = function() {
        var nums = arguments[0];

        nums.sort(function(a, b) {
          return a-b;
        });
        var mode = nums[0];
        var count = 0;
        var maxCount = -1;
        var lastNum;
        for (var i = 0; i < nums.length; i++) {
          var num = nums[i];
          if (num === lastNum) {
            count++;
          } else {
            lastNum = num;
            count = 1;
          }
          if (count > maxCount) {
            maxCount = count;
            mode = num;
          } else if (maxCount === count && num != mode) {
            mode = [mode, num];
          }
        }
        return mode;
      };
    };
  }]);
};

