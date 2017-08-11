(function(){

	var maxNum = 100000;  //set whatever you want for a max limit
	var divisorArray;
	var sum = 1;
	var start = 0;

	for (start = 3; start < maxNum; start++) {

			divisorArray = [];
			sum = 1;

			for (let divisors = 2; divisors < start; divisors++) {
				if (start % divisors === 0) {
					divisorArray.push(divisors);
				}
			}

			for (let index = 0; index < divisorArray.length; index++) {
				sum = sum + divisorArray[index];
			}

			if (sum === start) {
				console.log("... and it found a perfect number for the # " + start);
			} 	

		
	}

	console.log("Reached end of maxNum");

})();
