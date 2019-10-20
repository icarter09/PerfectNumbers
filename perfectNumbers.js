
const classify = (num) => {
	let arr = [];
	let suma = 0;
	if(num > 0){
	for(let i = 1; i< num ; i++){
	if(num % i == 0){
	arr.push(i);
	suma+=i;
	}
		}
	if(suma === num){
		return "perfect";
	}else if(suma > num){
	  return "abundant";
	}else if(suma < num){
	return "deficient";
	}
	}else{
		throw new Error("Classification is only possible for natural numbers.");
	}
	};
	console.log(classify(5));