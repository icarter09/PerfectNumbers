(function(){

	var sum, start, divisorArray, check;
	var maxNum /* SET TO WHATEVER YOU WANT MAX TO BE */;
	var quotient = 0;
	
	for (start = 3; start < maxNum; start++) {

			divisorArray = [];
			sum = 1;
			check = false;

			for (let divisors = 2; divisors < start; divisors++) {

				if (start % divisors === 0) {
					quotient = start / divisors;

					if (isNotInArray(divisors, divisorArray)) {
						divisorArray.push(divisors);	
					}

					if (isNotInArray(quotient, divisorArray)) {
						divisorArray.push(quotient);
						check = true;	
					}					
				}

				if (check) {
					if (divisors >= divisorArray[divisorArray.length - 1]) {
						break;
					}	
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

//Check if the values is already stored in the array.
function isNotInArray(value, array) {
  return array.indexOf(value) === -1;
}
