//this program creates a mean median mode module executable from the command line
//takes a set of numbers as individual numbers or an array
var MeanMedianMode = function() {

	this.mean = function() {
		var nums = conv(arguments);

		//mean function
		var sum = 0;
		for(i=0; i<nums.length; i++) {
			sum += nums[i];
		}
		return sum/nums.length;
	};

	this.median = function() {
		var nums = conv(arguments);

		//median function
		nums.sort(function(a, b){
			return a-b;
		});
		var median;
		if(nums.length%2===0) {		//for even arrays average middle two
			median = (nums[nums.length/2-1]+nums[nums.length/2])/2;
		} else {
			median = nums[(nums.length-1)/2];
		}
		return median;
	};

	this.mode = function() {
		var nums = conv(arguments);

		//mode function
		nums.sort(function(a, b){
			return a-b;
		});
		var mode = nums[0];
		var count = 0;
		var maxCount = -1;
		var lastNum;
		for(i=0; i<nums.length; i++) {
			var num = nums[i];
			if(num===lastNum) {
				count++;
			} else {
				lastNum = num;
				count = 1;
			}
			if(count > maxCount) {
				maxCount = count;
				mode = num;
			} else if(maxCount === count && num != mode) {	//in case multiple modes
				if(Array.isArray(mode)) {
          mode.push(num);
        } else {
          mode = [mode, num];
        }
			}
		}
		return mode;
	};

	//function to take arguments and output as array
	var conv = function(args){
		if(args.length>1) {			//for numbers passed as individual arguments
			nums = [];
			for(j=0; j<args.length; j++){
				nums = nums.concat(args[j]);
			}
		} else {					//for a single array argument passed
			nums = args[0];
		}
		return nums;
	};
	
};

var mmm = new MeanMedianMode();
module.exports = mmm;

